# JavaScript 给我们提供的数据类型

::: tip

[[toc]]

:::

## 一、JavaScript 原始数据类型

## 二、JavaScript 引用数据类型

### `Array`数组: 一组有序的数据

:::: code-group
::: code-group-item 1-js 数组使用说明

```js
// 方式1：Array构造函数
var arr = new Array();
var arr = new Array(20);
var arr = new Array("red", "green", "blue");

// 方式2: array literal
var arr = [];
var arr = ["red", "green", "blue"];

/**
 * 我们什么时候应该使用数组结构呢？
 * - 对数组进行“查、改”操作的时候，时间复杂度均为O(1)
 * - 对数组进行“增、删”操作的时候，时间复杂度均为O(n)
 *
 * 综上所述，当我们需要对一组数进行大量随机访问操作的时候，数组最为合适。
 */
```

:::

::: code-group-item 2-Array 构造函数

```md
# Array 构造函数对象

- 属性

  - `Array[Symbol.species]` 指向 Array 构造函数

- 方法
  - `Array.from()` 将类数组转成数组`例如Array.from("Hello World")`
  - `Array.of()` 将一组参数转成数组`例如Array.of(1, 3, 4, 6)`
  - `Array.isArray()` 判断参数是不是一个数组`例如Array.isArray([1, 2, 3])`
```

:::

::: code-group-item 3-Array Prototype 原型对象

```md
# Array Prototype 原型对象

## 属性

- `Array.prototype.length` 数组长度

## 方法

1. `Array.prototype.indexOf(searchElement, fromIndex)`
   - 描述：判断数组中是否存在传入的元素，若存在，返回该元素的索引，否则，返回-1
   - 例子`[1, 2, 3].indexOf(1) => 索引0`
```

:::

::::

