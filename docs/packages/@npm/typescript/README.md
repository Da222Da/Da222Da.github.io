---
title: README
date: 2022-06-06 09:09:08
permalink: /pages/889e52/
categories:
  - packages
  - npm
  - typescript
tags:
  -
---

# Typescript 调研报告

::: tip typescript 能将 JavaScript 从动态弱类型语言变成动态强类型语言。

[[toc]]

:::

## # 笔记

### 1.typescript 能帮我们的 JavaScript 代码代码哪些改变？

::: details 答：typescript 能将 JavaScript 变成动态强类型语言。

- #众所众知，JavaScript 是一门动态弱类型编程语言，这种设计的好处就是编写代码的时候足够的灵活。

- #但相较于 C++这种静态强类型语言而言，缺点也很明显：

  - 1.JS 是弱类型，不会强制程序员预设数据类型，从而，导致了代码中可能存在大量潜在 Bug
  - 2.JS 是动态类型，所以 JS 代码在执行阶段才去确定变量的数据类型，无疑会增加 JS 引擎的工作量，降低执行性能。

- #所以，我们可以使用 typescript 帮助我们做以下事情： - 1.TS 给我们提供了一套数据类型系统，让我们在编码时，能够预设数据类型，更清晰地描述和约束变量值，减少潜在 Bug，写出更健壮的代码。
  :::

### 2.typescript 为什么要新增数据类型 void？

::: details 答：void 数据类型为了描述返回值为 undefined 的函数

```js
function add(num1: number, num2: number): void {
  console.log(num1 + num2);

  // JavaScript函数默认返回undefined
  // return undefined
}
add(1, 2);
```

:::

## # 附录 A：TypeScript Tree

### 一、tsconfig.json 配置文件

- 1. `tsc --init` 初始化 tsconfig.json

### 二、类型注解

```md
- 1.类型声明语法`(变量/函数): type`
- 2.类型分类：
  - 2-1.描述不可改变的原始值：boolean | string | number | undefined | null | symbol
  - 2-2.描述数组值：
    - 2-2-1.单一类型 `例如,let arr:number[] = [1, 2]`
    - 2-2-2.泛型 api `例如,let arr:Array<number | string> = [1, 2, '3']`
    - 2-2-2.元组 `例如,let arr: [number, string] = [1, '2']`
  - 2-3.描述函数表示式
    - 2-3-1. 普通函数`例如，function func(x:number, y:number):number { return x + y }`
    - 2-3-2. void 没有返回值的函数
    - 2-3-3. nerve 永远不可能有返回值的函数`例如，let error = () => { throw new Error('error') } || let endless = () => { while(true) {} }`
  - 2-4.描述对象值 `例如，let obj: {x: number, y: number} = { x: 1, y: 2}`
  - 2-5.any 任意类型
```

## # 附录 B：参考链接

### [1.TypeScript 官网文档](https://www.typescriptlang.org/)
