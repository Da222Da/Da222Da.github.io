---
title: README
date: 2022-06-06 09:09:08
permalink: /pages/90d135/
categories:
  - packages
  - npm
  - babel
tags:
  -
---

# Babel 调研报告

::: tip

Babel 是一个 JavaScript 语法转换工具

[Babel 官网](https://www.babeljs.cn/docs/)

:::

## 需求

- 1.采用 ECMAScript 2015+ 语法编写的代码可能无法在旧版本的浏览器或其他环境正常运行，怎么样才能让 ECMAScript 2015+ 高阶语法代码在旧版本浏览器中正常运行呢？

- 2.某些 JS 框架自定义的语法，例如 Vue 里面的指令、插值表达式、React 里面 JSX 模板语法，JS 引擎是不认识的，怎么样才能让 JS 引擎识别 JSX 语法呢？

- 3.某些 JS 预编译工具里面的某些自创语法，例如 TypeScript，JS 引擎是不认识的，怎么样才能让 JS 引擎识别 TypeScript 语法呢？

## 解决方案 && Use Babel

Babel 工具链就能帮助我们解决上述问题以及类似的 JS 语法转换的问题。

而 Babel 的使用也十分简单，只要安装一个主包`npm i -D @babel/core`，然后根据自己实际的需求安装对应的辅助包，babel 辅助包的类型有以下两个：

- 1.plugins 类型: 每一个 plugin 包对应着一个功能，解决某个特定的问题。
- 2.presets 类型: 一个 preset 包相当于多个 plugin 的集合，解决某一类问题。

知道这些之后，再将我们用到的配置选项(Babel Options)，放到一个名为`.babelrc.js`的文件中，即可。测试代码如下：

```js
// .babelrc.js

{
    "presets": [
        "@babel/preset-env", // npm i -S @babel/preset-env，支持最新的ECMAScript语法
        "@babel/preset-react", // 支持react.js框架
    ]
}

```
