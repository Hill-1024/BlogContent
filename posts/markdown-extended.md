---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解更多关于 Mizuki 中的 Markdown 功能'
image: ''
tags: [演示, 示例, Markdown, mizuki]
category: '示例'
draft: true 
---

## GitHub 仓库卡片
您可以添加链接到 GitHub 仓库的动态卡片，页面加载时，仓库信息会从 GitHub API 拉取。

::github{repo="matsuzaka-yuki/Mizuki"}

使用代码 `::github{repo="matsuzaka-yuki/Mizuki"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 提示框

支持以下类型的提示框：`note` `tip` `important` `warning` `caution`

:::note
高亮显示用户即使快速浏览也应考虑的信息。
:::

:::tip
可选的帮助信息，让用户更加成功。
:::

:::important
用户成功所需的关键信息。
:::

:::warning
由于潜在风险而需要用户立即关注的关键内容。
:::

:::caution
某个操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
高亮显示用户即使快速浏览也应考虑的信息。
:::

:::tip
可选的帮助信息，让用户更加成功。
:::
```

### 自定义标题

可以自定义提示框的标题。

:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::
```

### GitHub 语法

> [!TIP]
> https://github.com/orgs/community/discussions/16925 也受支持。

```
> [!NOTE]
> GitHub 语法也受支持。

> [!TIP]
> GitHub 语法也受支持。
```

### 剧透

您可以在文本中添加剧透。文本也支持 **Markdown** 语法。

内容 :spoiler[是隐藏的 **哎呀**]！
```markdown
内容 :spoiler[是隐藏的 **哎呀**]！
```