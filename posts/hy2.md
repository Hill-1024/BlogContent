---
title: 宝宝级hy2部署教程
published: 2025-09-27
tags: []
category: 教程
permalink: "Hysteria2(hy2) 部署教程"
draft: false
---


# **这是一个开头**


# **前言**

~~本来我是想写成[MarkDown](https://markdown.com.cn/basic-syntax/)的, 但是考虑到同学们的水平, 好像还是[HTML](https://www.runoob.com/html/html-tutorial.html)比较合适, 所以我选择用HTML来写这个教程~~
现已经将教程post到博客，拿[MarkDown](https://markdown.com.cn/basic-syntax/)再写了一遍（悲

# **正文**

* 问:什么是hysteria2(hy2)?\
  答:hy2是一种新一代的代理传输协议,旨在提供高效稳定的网络连接,尤其在不稳定的网络环境中表现出色
* 问:我们为什么要部署hy2到一个云服务器,这样做的目的是什么?\
  答:一台海外的云服务器就像是一个中转站,代替你访问了海外的目标,并把这一切转发给你; 而你与云服务器之间的通道由hy2来实现,你通过hy2告诉云服务器你的目标,云服务器把访问后的目标通过hy2传输给你,就是这样

**那么我们就赶快开始我们的hy2部署之旅吧**

<!--more-->

## 购买篇

首先,我们需要一个[VPS](https://cloud.tencent.com/developer/techpedia/1537)\
在选购VPS过程中应主要注意以下几点

1. 一定买的是VPS,固定配置的,不是什么"弹性配置"字样的
2. 服务器位置:我们需要一个海外的服务器,建议为香港或新加坡(东京或首尔的IP易被封禁,欧美地区服务器延迟较高)
3. 流量:部分服务商的套餐中是不包含流量的,这会带来更多的支出;如果你不确定你选择的服务商在套餐中是否包含流量,请咨询客服或者换一家服务商
4. 带宽:擦亮眼睛看好了,带宽建议为50Mbps,富哥也可以考虑200Mbps的带宽

可以参考的服务商列表

* [阿里云](https://www.aliyun.com/product/swas?spm=a2c4g.11174283.0.0.25626284lq3elS)
* [腾讯云](https://cloud.tencent.com/product/lighthouse)
* [华为云](https://www.huaweicloud.com/special/ecs-vps.html)
* [狗云](https://vm.dogyun.com/server/create)(本人目前使用)

大概配置要求(本人使用的都是按照最低来的,所以你们按最低来也没有问题)

* CPU:单核及以上
* 内存:1G及以上
* 硬盘:20G及以上
* 带宽:50Mbps及以上
* 系统:Debian12
* IPv4公网IP
* (可选)IPv6


## 操作篇

在购买完成后,你会看到你的服务器IP地址

1. 接下来在键盘上按下win+R输入powershell并回车\
   在终端里输入"ssh 你的用户名@你的服务器IP地址"并回车(输入的是双引号内的内容,不要把双引号输入进去了)\
   例:
   ```
   ssh root@192.168.3.1
   ```

2. 如果是第一次链接则会询问你是否链接,根据提示输入yes并回车\
   复制你的服务器密码并粘贴到终端,如果你发现粘贴后不显示你的密码,这是正常现象(跟你在其他地方登陆账号输密码显示\*\*\*\*是一样的目的——保密),直接回车

3. 接下来复制命令输入并依照指南操作(记得回车才算输入完成)

   1. 系统更新
      ```
      apt update -y && apt install -y curl && apt install -y socat
      ```

   2. 安装hy2
      ```
      wget -N --no-check-certificate https://raw.githubusercontent.com/flame1ce/hysteria2-install/main/hysteria2-install-main/hy2/hysteria.sh && bash hysteria.sh
      ```

   3. 宝宝级指南

      1. 输入`1`->安装hy2
      2. 输入`1`->选择必应自签证书
      3. 输入你喜欢的端口(范围是1024到49151)并回车
      4. 输入`1`->单端口
      5. 设置密码并回车
      6. 输入`www.bing.com`
      7. 复制"hysteria2:"开头的配置链接,可以用来导入配置到客户端软件
      8. 设置hy2服务开机自启动
         ```
         systemctl enable hysteria-server.service
         ```
      9. 开放80和443端口 把第三行的xxx换成你的端口
         ```
         iptables -I INPUT -p tcp --dport 80 -j ACCEPT
         iptables -I INPUT -p tcp --dport 443 -j ACCEPT
         iptables -I INPUT -p tcp --dport xxx -j ACCEPT
         ```
      10. 如果在电脑上使用V2rayN客户端,请设置限速为1000Mbps,否则会被限速至100Mbps以内




## 维护篇

在管理维护hy2时,我们使用另一套脚本\
执行安装依赖(请执一次依赖安装在进行安装脚本)
```
wget -O phy2.sh https://raw.githubusercontent.com/seagullz4/hysteria2/main/phy2.sh && chmod +x phy2.sh && bash phy2.sh
```
执行安装脚本
```
wget -O hy2.py https://raw.githubusercontent.com/seagullz4/hysteria2/main/hysteria2.py && chmod +x hy2.py && python3 hy2.py
```
这样以后在连接上ssh后仅需输入hy2回车即可呼出脚本进行管理维护


# <font color="#dc143c"> 免责声明 </font>
<font color="#dc143c">
<h3 style="color: #dc143c">笔者坚决维护中华人民共和国政府,坚持中国共产党的领导</h3>
本教程仅供学术用途,请在获取后24小时内删除<br>
如若有人将其投入不良用途,与本人一概无关
</font>