---
title: 宝宝级Trojan教程
published: 2025-11-13
tags: []
category: 教程
permalink: "Trojan部署教程"
draft: false
---
# 前言
最近我在使用 hy2 时，发现连接总是不太稳定。  
在[小正太rkk](https://blog.rkk.moe/) 的建议下，我决定改用 **Trojan** 来搭建代理工具，用起来确实更稳了。

如果你之前看过我的 hy2 教程，会发现不少步骤是相似的。想快速上手可以直接跳到 **操作篇** 开始。

---

# 正文

## 购买篇
首先，你需要准备一台 **VPS（Virtual Private Server，虚拟专用服务器）**。  
挑选时请注意下面几点，避免踩坑：

1. **一定要选择固定配置的 VPS**，避开那些标着“弹性配置”的套餐。
2. **服务器位置**：推荐选**香港**或**新加坡**的节点。欧美则延迟偏高。
3. **流量**：有些套餐不包含流量，用了额外计费。如果不确定，最好问问客服。
4. **带宽**：建议至少 **50Mbps**，追求速度的话可选 200Mbps。

### 服务商参考（国内外都有）
- https://www.aliyun.com/product/swas?spm=a2c4g.11174283.0.0.25626284lq3elS
- https://cloud.tencent.com/product/lighthouse
- https://www.huaweicloud.com/special/ecs-vps.html
- https://vm.dogyun.com/server/create（我自己在用这个）

### 配置建议（按最低配来就行，亲测可用）
- CPU：1 核
- 内存：1 GB
- 硬盘：20 GB
- 带宽：50 Mbps
- 系统：Debian 12
- 必须要有 IPv4 公网 IP
- IPv6（可选）

---

### 域名购买
Trojan 必须搭配域名使用，你可以从下面这些服务商购买：
- [Cloudflare](https://domains.cloudflare.com/zh-cn)
- [Godaddy](https://www.godaddy.com/zh)
- [Porkbun](https://porkbun.com/)

买好之后，记得把域名解析到你的 VPS IP 上哦。

---

## 操作篇
购买完成后，你会得到 VPS 的 IP 地址。接下来我们一步步连接并安装。

### 1. 连接服务器
- 按 **Win + R**，输入 `powershell` 回车打开终端。
- 输入以下命令（将 `用户名` 和 `IP` 换成你的）：
  ```bash
  ssh 用户名@你的服务器IP
  ```
  示例：
  ```bash
  ssh root@192.168.3.1
  ```

- 第一次连接会提示确认，输入 `yes` 回车。
- 粘贴密码（输入时不显示，正常现象），回车即可登录。

### 2. 安装 Trojan
登录成功后，依次执行下面的命令（一行一行复制粘贴，每行粘贴后按回车）：

```bash
# 1. 更新系统并安装必要工具
apt update -y && apt install -y curl socat
```

```bash
# 2. 下载并运行 Trojan 安装脚本
wget -N --no-check-certificate -q -O trojan_install.sh "https://raw.githubusercontent.com/xyz690/Trojan/master/trojan_install.sh" && chmod +x trojan_install.sh && bash trojan_install.sh
```

### 3. 安装过程跟着指引做就行
- 安装脚本运行后，会看到菜单。输入 **1** 回车，开始安装 Trojan。
- 接着会让你输入**已解析的域名**，比如 `www.example.com`，输入后回车。
- 安装完成后，可以用这个命令查看配置：
  ```bash
  cat /usr/src/trojan-macos/trojan/config.json
  ```
  **一定要记下里面的 `password`（密码）和 `port`（端口）**，后面客户端连接时需要。

---

## 维护篇
- 查看 Trojan 运行状态：
  ```bash
  systemctl status trojan.service
  ```
- 重启服务：
  ```bash
  systemctl restart trojan.service
  ```

---

# <font color="#dc143c">免责声明</font>
<span style="color: #dc143c; ">
本人坚决拥护中华人民共和国政府，坚持中国共产党的领导。  
本教程仅用于学习与科研目的，请在下载后 24 小时内删除。  
任何人如将相关技术用于非法用途，与本人无关。  
</span>
