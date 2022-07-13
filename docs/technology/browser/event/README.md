---
title: README
date: 2022-06-20 14:26:04
permalink: /pages/f64631/
categories:
  - technology
  - browser
  - event
tags:
  - 
---
# Browser Event 浏览器事件机制

::: tip
[[toc]]
:::

## 简介：整体角度了解浏览器事件机制

### 1.事件：JavaScript 与 HTML 的交互方式。

### 2.事件流：描述了页面接收事件的顺序。

::: danger 为什么会有事件流的概念?
当你点击一个按钮时，实际上不光点击了这个按钮，还点击了它的容器以及整个页面。

描述按钮(事件源)、按钮容器、以及整个页面三者之间如何传递点击事件？

这便是事件流定义的。
:::

- 事件流的主要形式：
  - 冒泡事件流`div(click) -> body -> html -> #document`
  - 捕获事件流`#document -> html -> body -> div(click)`
  - (主流)DOM 事件流`捕获阶段 -> 达到事件源 -> 冒泡阶段`
    - 1.捕获阶段`#document -> html -> body`
    - 2.达到事件源
    - 3.冒泡阶段`div(目标元素) -> body -> html -> #document`

### 3.事件处理程序

::: danger 什么是事件处理程序？
假设你点击了一个按钮。

我们希望这个点击事件在事件流传递过程中，当传递到按钮的时候，打印一句"Hello World"。

我们可以利用事件监听器`例如，addEventListener`来定义事件处理程序。
:::

- (不推荐)以 HTML 属性的形式`例如，<button onclick="console.log('Clike Me')">Click</button>`
- (不推荐)JavaScript 程序 && DOM0
  - 添加事件处理程序`例如，document.getElementById("Click").onclick = () => {};`
  - 移除事件处理程序`例如，document.getElementById("Click").onclick = null;`
- JavaScript 程序 && DOM2
  - 添加事件处理程序`addEventListener('click', () => {}, false)`
    - 参数 1：事件名
    - 参数 2：事件处理函数
    - 参数 3：布尔值`true 在捕获阶段调用事件处理程序，false（默认值）在冒泡阶段调用事件处理程序。`
  - 移除事件处理程序`removeEventListener('click', () => {}, false)`

### 4.事件对象 Event

::: danger 什么是事件对象?
当 DOM 事件触发时，所有相关信息都会被收集并存储在一个名为 event 的对象中，根据实际需求，使用者决定是否需要将其传入事件处理的回调函数中。
:::

- DOM 事件对象的公共属性和方法
  | 属性/方法 | 类型 | 读写 | 描述 |
  | :-- | :--: | :--: | :-- |
  | event.type | String | readonly | 事件类型 |
  | event.target | Node | readonly | 事件源 |
  | event.currentTarget | Node | readonly | 当前事件处理程序所绑定的元素 |
  | event.perventDefault() | Function | readonly | 用于取消事件的默认行为 |
  | event.cancelable | Boolean | readonly | 是否可以调用 e.preventDefault() |
  | event.defaultPrevented | Boolean | readonly | e.preventDefault() 是否已经被调用过了 |
  | event.eventPhase | Number | readonly | 表示调用事件处理程序的阶段：1 代表捕获阶段，2 代表到达目标，3 代表冒泡阶段 |
  | event.stopPropagation() | Function | readonly | 用于取消所有后续事件捕获或事件冒泡 |

### 5.事件类型

::: danger Web 浏览器中为什么要引入事件类型这个概念？

1. Web 浏览器中可以发生很多种事件，事件类型可以帮助我们区分。
2. 我们可以根据所发生事件的类型来决定了事件对象 Event 中会保存什么信息。

:::

- 用户界面事件（UIEvent）`涉及与 BOM 交互的通用浏览器事件。`
  - load 事件
    - 在 window 上当页面加载完成后触发
    - 在<img>元素上当图片加载完成后触发

## Use

### 01. 阻止 a 链接默认点击事件自动跳转 href 属性值的行为

::: details （例子）执行 e.preventDefault()，阻止 a 标签的默认事件行为

```html
<a id="myLink" href="https://baidu.com" target="_blank">百度一下</a>

<script>
  document.getElementById("myLink").addEventListener("click", (e) => {
    e.preventDefault();
  });
</script>
```

:::

### 02.在 DOM 事件流中，如何控制事件处理程序的执行顺序？

::: details （例子）给 button 和 body 绑定事件，来理解触发事件执行函数的顺序

```html
<button id="myBtn">Clicked</button>

<script>
  let btn = document.getElementById("myBtn");

  btn.addEventListener(
    "click",
    (event) => {
      console.log(handle(event.eventPhase), "btn addEventListener:false"); // 2 抵到事件源对象时，触发绑定函数 addEventListener:false
    },
    false
  );

  // 最早执行
  document.body.addEventListener(
    "click",
    (event) => {
      console.log(handle(event.eventPhase), "body addEventListener:true"); // 1 捕获阶段触发了绑定函数 body addEventListener:true
    },
    true
  );

  // 最晚执行
  document.body.addEventListener(
    "click",
    (event) => {
      console.log(handle(event.eventPhase), "body addEventListener:false"); // 3 冒泡阶段触发了绑定函数 body addEventListener:false
    },
    false
  );

  function handle(phase) {
    switch (phase) {
      case 1:
        return "捕获阶段触发了绑定函数";
      case 2:
        return "抵到事件源对象时，触发绑定函数";
      case 3:
        return "冒泡阶段触发了绑定函数";
    }
  }
</script>
```

:::
