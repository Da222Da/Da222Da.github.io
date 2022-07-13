---
title: jest
date: 2022-06-17 17:56:11
permalink: /pages/440cb3/
categories:
  - technology
  - web-runtime
  - tools
tags:
  - 
---
# Jest 测试框架

::: tip
[[toc]]
:::

## Use

### 01.以 toBe()为例，写出 Jest Matchers 的实现原理？

::: details Jest 匹配器(Matchers) 实现原理

```js
function test(title, callback) {
  try {
    callback();
    console.log(`${title} √ 测试通过`);
  } catch (error) {
    console.error(`${title} × 测试失败`);
    console.error(error);
  }
}

function expect(result) {
  return {
    toBe(expect) {
      if (!Object.is(result, expect)) {
        throw new Error(`${result}不等于${expect}，不符合预期`);
      }
    },
  };
}

// 需要被测试的函数 sum
function sum(a, b) {
  return a + b;
}

// 测试实例1
test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(2);
});

// 测试实例2
test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

:::
