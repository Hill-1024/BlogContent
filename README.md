# BlogContent

中文 | [English](./README.en.md) | [日本語](./README.ja.md)

BlogContent 是个人博客的内容仓库，用于保存文章、专题页、图片资源和站点资料。它与博客主题/站点代码分离，让内容可以独立维护、同步和迁移。

这个仓库不负责构建博客前端。它更像一个内容源：主题项目读取这里的 Markdown、图片和页面配置，再生成最终站点。

## 内容范围

- 博客文章与教程。
- 项目记录和课程设计材料。
- CTF/write-up、代理部署、Markdown 示例等技术内容。
- 设备、日记、相册和项目图片。
- 关于页、友链页等专题页面。

## 目录结构

```text
.
├── avatar.jpg
├── posts/
│   ├── *.md
│   └── <post-name>/
│       ├── index.md
│       └── assets
├── images/
│   ├── albums/
│   ├── device/
│   ├── diary/
│   └── projects/
├── spec/
│   ├── about.md
│   └── friends.md
└── data/
```

| 路径 | 说明 |
| --- | --- |
| `posts/` | 博客文章，支持单文件文章和目录型文章 |
| `images/` | 站点图片资源 |
| `spec/` | 关于页、友链页等特殊页面 |
| `data/` | 主题读取的结构化内容数据 |
| `avatar.jpg` | 站点头像 |

## 文章格式

文章使用 Markdown，并通过 frontmatter 描述元数据：

```yaml
---
title: 文章标题
published: 2026-01-01
description: 文章摘要
image: ./cover.png
tags: [教程, 项目]
category: 分类
alias: "可选别名"
draft: false
---
```

常用字段：

| 字段 | 说明 |
| --- | --- |
| `title` | 文章标题 |
| `published` | 发布日期 |
| `description` | 摘要，用于列表和 SEO |
| `image` | 封面图 |
| `tags` | 标签数组 |
| `category` | 分类 |
| `alias` | 搜索或路由别名 |
| `draft` | 是否为草稿 |
| `pinned` | 是否置顶 |

## 写作约定

- 长文章建议使用目录型结构：`posts/name/index.md`，图片与文章放在同一目录。
- 可复用图片放入 `images/`，不要散落在仓库根目录。
- 草稿应设置 `draft: true`，避免被生产站点发布。
- 教程类文章尽量保留环境、版本、命令和错误排查记录。
- 涉及账号、IP、密钥、服务器地址时应先脱敏。

## 与站点项目的关系

博客站点或主题项目可以把本仓库作为内容源同步到自己的 `src/content`、`posts` 或等价目录。内容仓库只关心内容结构和素材，不绑定某一个具体构建框架。

## 许可证

当前仓库尚未声明统一许可证。文章、图片和个人素材默认保留作者权利；转载或复用前请联系作者。
