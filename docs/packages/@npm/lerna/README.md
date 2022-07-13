---
title: README
date: 2022-06-06 09:09:08
permalink: /pages/5a353c/
categories:
  - packages
  - npm
  - lerna
tags:
  -
---

# Lerna 调研报告

::: tip
`1.Lerna 调研方向：` 熟悉 lerna 的使用

`2.内容目录：`
[[toc]]

:::

## 一、快速上手

### 1. Lerna is a tool that managing multi-package repositories

Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

lerna 是一个优化"multi-package repositories"的管理工具，帮助我们大幅度减少重复性操作、标准化工作流程，从而达到提升开发效能的目的。

注意！lerna 管理的代码仓库必须是基于 git 的、lerna 管理的 package 必须是 npm package。

### 2. lerna 如何在指定目录下创建一个新的 npm-package

- 1.语法`lerna create <name> [loc]`，其中；

  - 1-1.`参数<name>`表示要创建的文件名称
  - 1-2.`参数[loc]`自定义地址，默认值是`lerna.json -> packages[0]`

- 2.参数用例：`lerna create @zhangxianjue-cli-dev/init "./commands"`

## 附录 A

### 1.[lerna 源码](https://github.com/lerna/lerna)

### 2.[lerna 经典项目之 babel](https://github.com/babel/babel)

### 3.[lerna 经典项目之 vue-cli](https://github.com/vuejs/vue-cli)
