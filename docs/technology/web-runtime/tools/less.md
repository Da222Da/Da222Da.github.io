---
title: less
date: 2022-06-23 14:05:51
permalink: /pages/eff9ac/
categories:
  - technology
  - web-runtime
  - tools
tags:
  - 
---
# Less

::: tip
[[toc]]
:::

## 从整体角度了解 Less

### 1.(what)什么是 Less？

Less(Leaner Style Sheet)，CSS 扩展语言。

使用 Less 样式语法、再配合 Less.js 编译成 CSS 样式。

一切都是为了让 CSS 写起来更加容易、高效。

### 2.(why)为什么要使用 Less？

为了写出更高效、可维护的样式代码。

### 3.(when)什么时候可以使用 Less？

凡是需要我们写 CSS 样式的时候，均可以使用 Less 来替代 CSS。

### 4.(how to)如何将 Less 使用起来？

在使用 Less 之前，可以先前往[less 官网](https://less.bootcss.com/)，熟悉 Less 语法。

在熟悉 Less 语法，并安装了 NodeJS 环境的前提之下，

可以全局安装 Less 工具`npm install -g less`。

接下来，便能使用 Less 指令，编译你的 less 文件了`例如，lessc styles.less styles.css`

### 5.(where and who)JavaScript 工程化中，Less 常常和哪些工具配合使用呢？

- 和 webpack 进行配合使用

::: details 在 webpack 里面使用 less

1. 安装 less 相关包`npm i less less-loader css-loader style-loader -D`

2. 配置 webpack.config.js

```js
module: {
    rules: [
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
    ],
},
```

:::

## Use

### 01.如何在 less 中定义变量？

```less
@name: "张三";
@list: 1, 2, 3, 4, 5;
```

### 02.如何使用 range() 函数声明一个数列？

::: danger range() 参数解析

- 语法`range(start, end, step)`
  - start: 范围的起始值
  - end: 范围的结束值
  - step: 从 start 到 end，每一次的增量

:::

::: details (例子)声明数列的两种方式

- 方式 1：变量 + 逗号分隔

```less
@list: 1, 2, 3, 4, 5;
@people: "zhangsan", "lisi", "wangwu";
```

- 方式 2：range(start, end, step) 函数

```less
range(1, 10, 5); // 1, 5, 10
range(10px, 30px, 10); // 10px 20px 30px
```

:::

### 03.如何使用 each() 函数对数列进行迭代操作

::: danger each() 参数解析

- 语法`each(list, rules)`
  - list: 要被遍历的数列
  - rules: 匿名规则集（或者是匿名 mixin）
    - 若是 ruleset 会默认传入三个变量@value、@key、@index
    - 若是 mixin 匿名函数则可以指定变量`例如，each(range(30), .(@value){})`。

:::

::: details (例子) 生成 1px-30px 的 margin 样式类

```less
each(range(30), {
  @valueToPx: @value * 1px; 
  .m-@{value} {
    margin: @valueToPx;
  }
});
```

:::

### 04.如何定义、使用 Mixin(混入)？

- Mixin(混入) 类似于 JavaScript 里面的匿名函数，使用`.`和`#`均可。

::: details 测试用例

- 定义与使用 Mixin

```less
// 定义Mixin -> .mixin
.mixin {
  color: red;
}
// 定义Mixin -> #mixin
#mixin {
  background-color: red;
}
.test {
  .mixin(); // 使用.mixin
  #mixin(); // 使用#mixin
}
```

- 编译结果

```css
.mixin {
  color: red;
}
#mixin {
  background-color: red;
}
.test {
  color: red;
  background-color: red;
}
```

:::

### 05.(例子)生成 1px-50px 的[.m-*|.mt-*|.mb-*|.ml-*|.mr-*|.my-*|.mx-*] 样式类？

::: details 源码

```less
each(range(30), .(@value){
  @valueToPx: @value * 1px; 
  .m-@{value} {
    margin: @valueToPx;
  }
  .mx-@{value} {
    margin: 0 @valueToPx;
  }
  .my-@{value} {
    margin: @valueToPx 0;
  }
  .mt-@{value} {
    margin-top: @valueToPx;
  }
  .mb-@{value} {
    margin-bottom: @valueToPx;
  }
  .ml-@{value} {
    margin-left: @valueToPx;
  }
  .mr-@{value} {
    margin-right: @valueToPx;
  }
});
```

:::
