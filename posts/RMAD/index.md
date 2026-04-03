---
title: 浅谈快速开发的不同构建方式
published: 2025-04-03
tags: []
category: Tech
permalink: "浅谈快速开发的不同构建方式"
draft: false
---
# webview桥接?原生组件?自渲染引擎?
## Capacitor:webview和系统接口桥接
- Capacitor的构建方式是最简单的,把你的前端项目(可以使用React/Vue)塞进webview绘制,并通过官方/社区开发者以原生方式编写的插件与系统桥接通信,获取系统接口
- 性能表现:普通webview应用水平
## React-Native:原生组件
- React-Native会在运行时把例如`<button>`的组件通过桥向系统发送对应原生控件的渲染请求,绘制任务由系统完成
- 性能表现:介于原生应用和普通webview之间
## Flutter:自渲染引擎与原生运行
- Flutter使用自渲染引擎,图形绘制工作由它自带的底层 C++ 图形渲染引擎（以前叫 Skia，现在升级为 Impeller）来完成
- Flutter在Release时会利用AOT把Dart翻译为ARM汇编
- Flutter使用与Capacitor类似的原生编写插件来与系统接口桥接通信
- 性能表现:极其接近原生