---
title: 'Monet-Color'
published: 2026-02-22
description: 一个实现莫奈取色的Capacitor插件
tags: ['Capacitor']
category: '项目'
draft: false
---
# 项目链接
- ::github{repo="hill-1024/Monet-Color-For-Capacitor"}
- **[npm package](https://www.npmjs.com/package/android-dynamic-color)**

# 我为什么做这个插件
我在做[2FA验证器](/posts/matcha-auth/)的时候,想要加上莫奈取色这个功能,找了一圈,要么被原生软件集成,要么被root模块化,没有人给webview应用做相关插件,所以就有了这个插件

# 工作原理
很简单,就是直接调用把系统的五级莫奈取色值传给前端\
:spoiler[(毕竟你Capacitor不就是把一些系统接口开给前端webview的吗,不知道为什么没人做这个接口)]