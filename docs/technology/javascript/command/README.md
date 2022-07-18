# JavaScript 给我们提供的指令

::: tip

[[toc]]

:::

## 申明语句

### 1.申明类

:::: code-group
::: code-group-item 1.JS 申明类的方式

```js
// Function 构造函数申明(ES5 推荐)
function People() {}
var People = function () {};

// Class 关键字申明(ES6 推荐)
class People {}
var Peopel = class {};
```

:::

::: code-group-item 2.JS 类的构成

```js
// 2-1.类的构造函数
// constructor 关键字：new 操作符在创建实例对象的时候，就会调用constructor函数
class People {
  constructor() {} // new People() => 调用该函数
}
```

:::
::::
