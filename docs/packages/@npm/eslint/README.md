---
title: README
date: 2022-06-06 09:09:08
permalink: /pages/2b04fd/
categories:
  - packages
  - npm
  - eslint
tags:
  -
---

# ESLint 调查报告

::: tip ESlint 一款插件化的 JavaScript 代码检查工具

[[toc]]

[ESlint 官网](https://eslint.bootcss.com/)
:::

## #整体思维模式认识 ESLint

### 1.ESLint 能给我们的 JavaScript 代码带来什么好处？

- 对于个人而言：代码检查可以减少 JS 代码 bug，保证代码质量。
- 对于团队而言：代码检查可以统一 JS 代码风格，提升多人协同开发的工作效能。

### 2.ESlint 快速上手

首先，我们得初始化源文件 package.json`npm init -y`，然后安装 ESLint 包`npm i eslint -D`。

之后，我们便可以使用 ESLint 提供的指令`./node_modules/.bin/eslint --init`，初始化配置文件`.eslintrc.js`。

```js
// .eslint.js 配置文件详情

module.exports = {
  root: true, // 表示当前目录即为根目录（ESlint的检查规则只对该目录下的JS文件有效）
  // Environments，指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    // globals，脚本在执行期间访问的额外的全局变量。
    module: "readonly", // writable 可写 || readonly 可读
  },
  // 直接使用别人的检查配置规则`例如，extends: "eslint:recommended"`
  extends: "eslint:recommended",
  parserOptions: {
    // parserOptions 指定想要支持的 JavaScript 语言选项
    ecmaVersion: "latest", // ecmaVersion 你想使用的 ECMAScript 版本
    sourceType: "module", // 设置 JavaScript 文件模块类型`script(默认) | module`
  },
  plugin: [], // 拓展 ESLint 没有的规则，从而支持一些特定的语法`例如，React、Vue`
  rules: {
    // 启用的规则及其各自的错误级别
    // off | 0 关闭规则
    // warn | 1 开启规则，使用警告级别的检测，但不会终止程序。
    // error | 2 开启规则，使用错误级别的检测，一旦触发，终止程序。
    quotes: [2, "single"],
    semi: ["error", "never"],
  },
};
```

配置完`.eslintrc.js`之后，便能运行 ESLint 来检查我们的代码`例如，./node_modules/.bin/eslint ./src/index.js`。

但是，每一次都需要我们手动去运行 ESlint，才能检查我们的代码，未免太麻烦了。

如何在 VSCode 编辑器中自动运行 ESLint 呢？需要我们先安装 VSCode ESlint 插件，并配置 VSCode settings.json 文件：

```js
// settings.json

{
    // eslint.probe 规定 ESlint 插件需要校验的语言类型,
    // 配置eslint.probe之后，ESlint才能以高亮的实现显示错误语法 && 在终端输出错误信息
    "eslint.probe": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "vue",
    ],
    // eslint 保存文件时自动修复bug
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
}
```

## #专精思维模式练习 ESLint

### 1.已经使用了 ESLint 的情况下，我们应不应该使用 Prettier 呢？

- eslint 注重代码质量
  - 例如，let a = 1; 当你只声明，但未使用变量 a 时，从而导致代码后期可能报错。ESLint 就会警告了。
- prettier 注重代码风格 `prettier关注的是如何让代码更好看`
  - 例如，一行多少个字符啊！加不加分号啊！诸如此类的问题？
  - pretter 还有强大的--fix 能力，帮助我们自动格式化。

其实，eslint 也能设置代码风格相关的规则，也有--fix 自动格式化能力，只是没有 prettier 那么强大。

如果你十分注重代码风格的话？可以使用 ESLint prettier 相关插件，帮我们做以下两个事

- 第一件事：禁用掉所有与 Prettier 发生冲突的 ESLint 代码格式化规则。
- 第二件事：将 Prettier 的所有规则导入 ESLint 当中。

如此，我们能使用 ESLint 强大的代码质量检测能力，又能享用 prettier 强大的代码风格格式化功能。

不过，配置 prettier 之后，会让 eslint 配置复杂度会变大，如何取舍？全凭个人需求。
