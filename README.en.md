# BlogContent

[中文](./README.md) | English | [日本語](./README.ja.md)

BlogContent is the content repository for a personal blog. It stores posts, special pages, image assets, and site materials separately from the blog theme or site code, so content can be maintained, synced, and migrated independently.

This repository does not build the frontend. It acts as a content source: a theme project reads the Markdown, images, and page data here and generates the final site.

## Content Scope

- Blog posts and tutorials.
- Project notes and course-design materials.
- CTF write-ups, proxy deployment notes, Markdown examples, and other technical content.
- Device, diary, album, and project images.
- Special pages such as About and Friends.

## Structure

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

| Path | Purpose |
| --- | --- |
| `posts/` | Blog posts, supporting both single-file and folder-based posts |
| `images/` | Site image assets |
| `spec/` | Special pages such as About and Friends |
| `data/` | Structured content consumed by the theme |
| `avatar.jpg` | Site avatar |

## Post Format

Posts are Markdown files with frontmatter metadata:

```yaml
---
title: Post title
published: 2026-01-01
description: Post summary
image: ./cover.png
tags: [Tutorial, Project]
category: Category
alias: "optional-alias"
draft: false
---
```

Common fields:

| Field | Description |
| --- | --- |
| `title` | Post title |
| `published` | Publication date |
| `description` | Summary for lists and SEO |
| `image` | Cover image |
| `tags` | Tag array |
| `category` | Category |
| `alias` | Search or route alias |
| `draft` | Whether the post is a draft |
| `pinned` | Whether the post is pinned |

## Writing Conventions

- Use folder-based posts for long articles: `posts/name/index.md`, with images next to the article.
- Put reusable images under `images/` instead of scattering them at the repository root.
- Mark unfinished posts with `draft: true`.
- Tutorial posts should preserve environment, versions, commands, and troubleshooting notes.
- Redact accounts, IP addresses, keys, and server addresses before committing.

## Relationship to the Site

A blog site or theme project can sync this repository as a content source into its `src/content`, `posts`, or equivalent directory. This repository focuses on content structure and assets, not on a specific build framework.

## License

This repository does not declare a unified license yet. Articles, images, and personal materials are copyright reserved by default. Contact the author before redistribution or reuse.
