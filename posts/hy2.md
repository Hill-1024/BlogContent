---
title: 宝宝级hy2部署教程
published: 2025-09-27
tags: [Hysteria2, 代理, 教程]
category: 教程
permalink: "hysteria2部署教程"
draft: false
---

## **前言**

~~本来我是想写成[MarkDown](https://markdown.com.cn/basic-syntax/)的, 但是考虑到同学们的水平, 好像还是[HTML](https://www.runoob.com/html/html-tutorial.html)比较合适, 所以我选择用HTML来写这个教程~~
现已经将教程post到博客，拿[MarkDown](https://markdown.com.cn/basic-syntax/)再写了一遍（悲
## 正文

### 常见问题解答

**问：什么是 Hysteria2（hy2）？**  
答：Hysteria2 是一种新一代的代理传输协议，旨在提供高效、稳定的网络连接，特别在不稳定的网络环境中表现优异。

**问：为什么要将 hy2 部署到云服务器？**  
答：海外云服务器就像一个中转站，代替你访问海外资源，再将结果传回给你。而 hy2 就是连接你和服务器之间的“加密通道”——你通过它告诉服务器要访问什么，服务器完成访问后再通过它将内容传回给你。

**好了，让我们开始 hy2 的部署之旅吧！**

---

## 购买篇

首先，你需要准备一台 **VPS（虚拟专用服务器）**。  
选购时请注意以下几点，避免踩坑：

1. **确认是固定配置的 VPS**，避开标注“弹性配置”的套餐。
2. **服务器位置**：推荐 **香港** 或 **新加坡**。欧美地区延迟较高。
3. **流量**：部分套餐不包含流量，会产生额外费用。不确定的话，建议咨询客服。
4. **带宽**：建议至少 **50Mbps**，追求高速可选 200Mbps。

### 推荐服务商
- [阿里云](https://www.aliyun.com/product/swas?spm=a2c4g.11174283.0.0.25626284lq3elS)
- [腾讯云](https://cloud.tencent.com/product/lighthouse)
- [华为云](https://www.huaweicloud.com/special/ecs-vps.html)
- [狗云](https://vm.dogyun.com/server/create)（我目前使用-香港）
- [v.ps](https://v.ps)（我目前使用-东京）

### 最低配置建议
- CPU：1 核
- 内存：1 GB
- 硬盘：20 GB
- 带宽：50 Mbps
- 系统：Debian 12
- 必须要有 IPv4 公网 IP
- IPv6（可选）

---

## 操作篇

购买完成后，你会获得服务器的 IP 地址。接下来我们一步步连接并安装。

### 1. 连接服务器
- 按下 **Win + R**，输入 `powershell` 回车。
- 在终端中输入以下命令（替换为你的用户名和 IP）：
  ```bash
  ssh 用户名@服务器IP
  ```
  例如：
  ```bash
  ssh root@192.168.3.1
  ```

- 首次连接会提示确认，输入 `yes` 回车。
- 粘贴密码（输入时不显示，这是正常的），回车登录。

### 2. 安装 Hysteria2
登录成功后，依次执行以下命令（每行粘贴后按回车）：

### 安装管理脚本依赖（只需执行一次）
```bash
wget -O phy2.sh https://raw.githubusercontent.com/seagullz4/hysteria2/main/phy2.sh && chmod +x phy2.sh && bash phy2.sh
```

### 安装管理脚本
```bash
wget -O hy2.py https://raw.githubusercontent.com/seagullz4/hysteria2/main/hysteria2.py && chmod +x hy2.py && python3 hy2.py
```

### 3. 注意事项

开放防火墙端口（将第三行的 `xxx` 替换为你设置的端口）：
   ```bash
   iptables -I INPUT -p tcp --dport 80 -j ACCEPT
   iptables -I INPUT -p tcp --dport 443 -j ACCEPT
   iptables -I INPUT -p tcp --dport xxx -j ACCEPT
   ```
**重要提示**：如果在电脑上使用 V2rayN 客户端，请将客户端中的限速设置为 1000Mbps，否则速度可能被限制在 100Mbps 以内。

---

## 维护篇

**以后需要管理 hy2 时**，只需 SSH 连接服务器，输入 `hy2` 回车，即可呼出管理菜单，进行查看状态、重启、修改配置等操作。

---

# <font color="#dc143c">免责声明</font>
<span style="color: #dc143c; ">
本人坚决拥护中华人民共和国政府，坚持中国共产党的领导。  
本教程仅用于学习与科研目的，请在下载后 24 小时内删除。  
任何人如将相关技术用于非法用途，与本人无关。  
</span>
