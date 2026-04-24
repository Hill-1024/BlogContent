---
title: 从手动切换到自动化：Clash 聚合负载均衡与流量池分流实践
published: 2026-04-22
tags: [Clash, 代理, 教程]
category: 教程
permalink: "clash-聚合分流实践"
draft: false
---

## 前言

在折腾代理工具的过程中，很多人的起点都是几个简单的 Hysteria2 或 Trojan 节点，手动点击连接。但随着节点增多、需求变得复杂（比如 AI 需要日本节点，B 站港澳台需要香港节点），这种“手动挡”的操作就显得非常繁琐。

最近，我完成了一次从**单节点手动切换**到 **Clash (Mihomo/Meta) 聚合分流**的配置升级。现在，我不再需要操心哪个节点挂了，也不再需要手动换节点来访问 ChatGPT，一切都在后台自动运转。

## 为什么要进行这次升级？

1.  **消除手动成本**：根据访问目标自动选路，国内直连，AI 走日本，默认走香港。
2.  **实现“流量池”聚合**：将不同协议（HY2、Trojan）和不同服务器的带宽整合。如果主节点延迟高或挂了，自动无感切换。
3.  **精细化分流**：例如 B 站流量，我既想看港澳台内容，又不想因为挂了代理导致看国内视频变慢，这时候精细的规则判断就派上用场了。

## 我的核心配置方案

我使用的是 **Mihomo (原 Clash Meta)** 内核，因为它对 Hysteria2 等新协议的支持最为完美。

### 1. 节点定义（脱敏示例）

在 `proxies` 中，我定义了来自不同地域和协议的节点。Hysteria2 负责高带宽，Trojan 负责极端情况下的稳定性。

```yaml
proxies:
  - name: "HK-HY2"
    type: hysteria2
    server: 103.x.x.42
    port: 1111
    ports: "1111-1234"
    up: "300 Mbps"
    down: "300 Mbps"
    password: "your_password"
    sni: vps.example.com
    skip-cert-verify: true

  - name: "HK-Trojan"
    type: trojan
    server: 103.x.x.42
    port: 443
    password: "your_password"
    sni: vps.example.com
    udp: true

  - name: "JP-HY2"
    type: hysteria2
    server: 45.x.x.225
    port: 1111
    ports: "1111-1234"
    up: "300 Mbps"
    down: "300 Mbps"
    password: "your_password"
    sni: serv.example.com
    skip-cert-verify: true
```

### 2. 策略组：自动化大脑

这是本次升级的灵魂。我设定了三个主要的策略组：

*   **Google/AI 专用策略组**：采用 `fallback`（故障转移）模式。优先使用日本节点（解锁 ChatGPT/Claude 效果更好），如果日本节点不可用，自动切换到备用节点。
*   **B站港澳台策略组**：采用 `select` 模式。支持手动一键切回直连，方便在不同版权环境下切换。
*   **其他外网流量策略组**：作为通用出海流量的兜底。

### 3. 分流规则：精细化路由

通过 `GEOSITE` 和 `GEOIP` 数据库，配合自定义的 `DOMAIN-SUFFIX`，实现真正的无感体验：

*   **直连区**：局域网、国内主流网站、微软 Bing 强制直连。
*   **B 站特区**：通过精细分流，屏蔽广告和不必要的代理请求，视频流根据需要走香港节点。
*   **AI 区**：Google、YouTube 以及 ChatGPT、Claude、OpenRouter 等 AI 平台强制走日本节点。

---

## 完整的配置文件（参考版）

```yaml
port: 7890
socks-port: 7891
allow-lan: true
mode: rule
log-level: info
unified-delay: true
ipv6: true

# 强制使用 Mihomo/Meta 内核
dns:
  enable: true
  listen: 0.0.0.0:53
  ipv6: true
  enhanced-mode: fake-ip
  nameserver:
    - 119.29.29.29
    - 223.5.5.5
    - 8.8.8.8
    - 1.1.1.1

proxies:
  # ... (节点配置如上文所示)

proxy-groups:
  # 1. Google/AI 专用策略组 (主节点为日本)
  - name: "Google-Strategy"
    type: fallback
    url: "http://www.gstatic.com/generate_204"
    interval: 300
    proxies: 
      - "JP-HY2"
      - "HK-Trojan"

  # 2. B站港澳台策略组 (支持手动一键切回直连)
  - name: "Bilibili-Strategy"
    type: select
    proxies: 
      - "HK-HY2"
      - "HK-Trojan"
      - "DIRECT"

  # 3. 其他外网流量（默认）策略组
  - name: "Default-Strategy"
    type: fallback
    url: "http://www.gstatic.com/generate_204"
    interval: 300
    proxies: 
      - "HK-HY2"
      - "HK-Trojan"

rules:
  # --- 1. 本地与局域网直连 ---
  - GEOSITE,private,DIRECT
  - GEOIP,lan,DIRECT,no-resolve

  # --- 2. 微软 Bing 强制直连 ---
  - DOMAIN-SUFFIX,bing.com,DIRECT
  - DOMAIN-SUFFIX,bing.net,DIRECT
  - DOMAIN-SUFFIX,bing.com.cn,DIRECT

  # --- 3. Bilibili 港澳台精细分流 ---
  - DOMAIN,httpdns.bilivideo.com,REJECT
  - DOMAIN,data.bilibili.com,DIRECT
  - DOMAIN,mall.bilibili.com,DIRECT
  - DOMAIN,api.vc.bilibili.com,DIRECT
  - DOMAIN-SUFFIX,bilibili.com,Bilibili-Strategy
  - DOMAIN-SUFFIX,bilivideo.com,DIRECT
  - DOMAIN-SUFFIX,bilivideo.cn,DIRECT
  - DOMAIN-SUFFIX,hdslb.com,DIRECT
  - DOMAIN-SUFFIX,biliapi.net,DIRECT
  - DOMAIN-SUFFIX,biliapi.com,DIRECT

  # --- 4. 中国大陆域名与 IP 自动直连 ---
  - GEOSITE,cn,DIRECT
  - GEOIP,CN,DIRECT,no-resolve

  # --- 5. Google 及 AI 自动分流规则 (走日本) ---
  - GEOSITE,google,Google-Strategy
  - DOMAIN-SUFFIX,google.com,Google-Strategy
  - DOMAIN-SUFFIX,youtube.com,Google-Strategy
  - DOMAIN-SUFFIX,googlevideo.com,Google-Strategy
  - DOMAIN-SUFFIX,googleapis.com,Google-Strategy
  - DOMAIN-SUFFIX,gstatic.com,Google-Strategy
  - DOMAIN-SUFFIX,chatgpt.com,Google-Strategy
  - DOMAIN-SUFFIX,openai.com,Google-Strategy
  - DOMAIN-SUFFIX,claude.com,Google-Strategy
  - DOMAIN-SUFFIX,claude.ai,Google-Strategy
  - DOMAIN-SUFFIX,openrouter.ai,Google-Strategy

  # --- 6. 兜底：其他所有流量 (走香港) ---
  - MATCH,Default-Strategy
```

## 结语

通过这套配置，我实现了节点的 "**高可用**" 。即使其中一台 VPS 宕机，`fallback` 策略也会在几秒内将我的请求转移到备用线路上，全程无需手动干预。

这种从“手动换节点”到“规则全自动”的转变，极大地提升了日常上网的幸福感。如果你也有多个节点，不妨尝试一下这套聚合负载均衡的方案。
