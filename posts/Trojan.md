---
title: 宝宝级Trojan教程
published: 2025-11-13
tags: []
category: 教程
permalink: "Trojan部署教程"
draft: false
---


# **前言**
本来笔者在愉悦地使用hy2，然后发现总是连接不稳定\
在我们的[小正太Rkk](https://blog.rkk.moe/)的建议下，笔者换用了Trojan来继续搭建我们的妙妙小工具

# **正文**

以下绝大部分内容与hy2教程重复，不想看可以自行跳转到操作篇

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

以及，我们Trojan需要一个域名，请寻找合适的服务商购买

* [CloudFlare](https://domains.cloudflare.com/zh-cn)
* [GoDaddy](https://www.godaddy.com/zh)
* [PorkBun](https://porkbun.com/)

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
       wget -N --no-check-certificate -q -O trojan_install.sh "https://raw.githubusercontent.com/xyz690/Trojan/master/trojan_install.sh" && chmod +x trojan_install.sh && bash trojan_install.sh
       ```

    3. 宝宝级指南
       1. 按1回车->安装Trojan
       2. 输入你解析的域名并回车,例子:```www.example.com```
       3. 输入```cat /usr/src/trojan-macos/trojan/config.json```查看配置，记住你的密码和端口
        
    


## 维护篇
输入```systemctl status trojan.service```查看服务运行状态



# <font color="#dc143c"> 免责声明 </font>
<font color="#dc143c">
<h3 style="color: #dc143c">笔者坚决维护中华人民共和国政府,坚持中国共产党的领导</h3>
本教程仅供学术用途,请在获取后24小时内删除<br>
如若有人将其投入不良用途,与本人一概无关
</font>