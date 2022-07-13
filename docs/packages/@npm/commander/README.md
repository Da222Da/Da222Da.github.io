---
title: README
date: 2022-06-06 09:09:08
permalink: /pages/84117f/
categories:
  - packages
  - npm
  - commander
tags:
  -
---

# NPM Package Commander 调研报告

::: tip
`1.Target：调研目标` <br>

- 熟悉 Commander 的使用

`2.Title：调研目录`
[[toc]]
:::

## 一、快速上手

### 1. Commander: The complete solution for node.js command-line interfaces.

### 3. program.name()修改帮助信息中程序名称

- `program.name()`，程序名称，即主命令名称。默认值是 index。
- 参数用例，`例如，program.name(Object.keys(pkg.bin)[0])`

### 4. program.usage()自定义帮助信息里面的使用描述信息

- 参数用例，`例如，program.usage('[option] [command]')`

### 5. 自定义 version 选项的两种方式

- 1.方式 1：version api`例如，program.version(pkg.version)`
- 2.方式 2：option api

```js
program
  .name(Object.keys(pkg.bin)[0])
  .usage("[options] [command]")
  // true 是 [version] 参数的默认值
  // [] 表示可选 || <> 表示必传
  .option("-v, --version [version]", "output the version number", true);

program.on("option:version", function () {
  program.opts().version ? console.log(pkg.version) : "";
});
```

### 6. program.opts() 能够拿到 program.parse(arguments)解析后的 options 参数

```js
const { Command } = require("commander");
const program = new Command();

program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");

program.parse(process.argv);

const options = program.opts();
console.log(options); // cli-name -d -s -> { debug: true, small: true }
```

### 7. program.outputHelp() 使用代码的形式展示帮助信息，不退出程序。

### 8. program.showHelpAfterError() 在出错后展示帮助信息

- 参数用例：
  - 1. `program.showHelpAfterError()` 展示完整的帮助信息
  - 2. `program.showHelpAfterError('(add --help for additional information)')` 自定义帮助信息

### 9. 如何利用 program.args 的特性，监听未知命令？

```js
const { Command } = require("commander");
const program = new Command();

program.on("command:*", function (obj) {
  // 通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。
  // 这里的obj === program.args
  if (obj.length > 1) console.error("出现未知命令:", obj.join(","));

  let availableCommands = program.commands.map((item) => item.name());
  if (availableCommands.length > 1)
    console.log("可用命令有：", availableCommands.join(","));
});

program.parse(process.argv);
```

### 10. 命令处理函数 action()的参数含义是什么？以及它该怎么用？

- 1.命令处理函数的参数，为该命令声明的所有参数，除此之外还会附加两个额外参数：一个是解析出的选项，另一个则是该命令对象自身。
- 2.测试用例

  - 2-1：在全局命令上使用处理函数`program.action()`

  ```js
  #! /usr/bin/env node

  const { Command } = require("commander");
  const program = new Command();

  program
    .name("commander-cli")
    .version("1.0.0")
    .usage("[option] [command]")
    .option("-d, --debug [name]", "debug model", false)
    .action((option, command) => {
      console.log(option, command.name()); // commander-cli -d -> { debug: 'true' } commander-cli
    });

  program.parse(process.argv);
  ```

  - 2-2：在普通命令上使用处理函数`program.command().action()`

  ```js
  #! /usr/bin/env node

  const { Command } = require("commander");
  const program = new Command();

  program.name("commander-cli");

  program
    .command("init")
    .argument("<name>", "初始化项目的名称，必传")
    .argument("[loc]", "自定义初始化路径")
    .option("-f, --force", "强制执行init", false)
    .action((name, loc, options, command) => {
      console.log(name, options, command.name()); // commander-cli init project-name -f -> project-name { force: true } init
    });

  program.parse(process.argv);
  ```

## 附录 A:

### [commander 官方文档](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
