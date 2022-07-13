---
title: README
date: 2022-06-06 09:09:08
permalink: /pages/f37f48/
categories:
  - packages
  - npm
  - npminstall
tags:
  -
---

# npminstall 调研报告

::: tip npminstall 给我们带来了什么？
使用 npminstall 能让我们以 js 代码的方式来安装 npm 包
:::

## npminstall 测试用例

### 1.需求：

- 执行 index.js 文件，安装 vue@2
- 将 vue@2 安装到指定目录`path.resolve(homedir(), ".zhangxianjie-cli-dev", "node_modules")`

### 2.代码如下：

```js
const npminstall = require("npminstall");
const path = require("path");
const { homedir } = require("os");

void (async () => {
  await npminstall({
    // root：指定根目录
    root: path.resolve(homedir(), ".zhangxianjue-cli-dev"),

    // storeDir: 使用npminstall安装npm包的实际存储路径
    storeDir: path.resolve(homedir(), ".zhangxianjue-cli-dev", "node_modules"),

    // pkgs: 配置需要下载的npm包信息, default is package.json's dependencies and devDependencies
    pkgs: [{ name: "vue", version: "~2.0.0" }],

    // registry, 指定npm包的下载源，默认 https://registry.npmjs.org
    registry: "https://registry.npmjs.org",
  });
})().catch((err) => {
  console.error(err);
});
```
