# 函数式编程

::: tip
[[toc]]
:::

## Overall

### 1.(what)什么是函数式编程？

假如说数学公式是用来描述数字之间的映射关系`例如，y=2x, 描述了 xy 之间的映射关系`

那么，函数则是编程语言用来描述代码之间映射关系的形式。

其最大的特征就是输入和输出，且相同的输入无论执行多少次函数？输出结果也都相同。

所以说，函数式编程 => 公式编程

### 2.(why)为什么要进行函数式编程？

函数式编程是对程序的一种抽象。

让使用函数的人只需关注函数的输入值和输出值即可！而不需要关心函数的实现细节。

可以大大地提升了编码效率、降低了维护成本。

### 3.(how to) 如何进行函数式编程呢？

### 3-1.高阶函数(high-order function)

::: details 理解高阶函数(high-order function)

- 函数本身可以作为参数
- 函数本身可以作为返回值

满足以上两大特征的函数，均可称为高阶函数。

```js
// Target: 在不改变原有函数的基础上，对其进行拓展
// Result: 先吃饭，再上厕所！

function eat(...args) {
  console.log("吃饭", `${args.length > 0 ? "吃了" + args : ""}`);
}

// 函数的作为参数
eat.after = function (afterFn) {
  // 函数的作为返回值
  return (...args) => {
    afterFn ? this(...args) || afterFn() : this(...args);
  };
};

let eatAfter = eat.after(() => {
  console.log("吃完上厕所");
});
eatAfter("米饭", "猪肉");
```

:::

### 3-2.柯里化函数(currying function)

::: details 理解柯里化函数(currying function)

柯里化函数：

- 柯里化函数的做法：拆分函数参数，使其依次传入。
- 柯里化函数的效果：
  - 1.会减少函数作用范围
  - 2.让函数变得更加具体

```js
// 未使用柯里化
function checkType(type, v) {
  return (v) => Object.prototype.toString.call(v) === `[object ${type}]`;
}

// 柯里化
function checkType(type) {
  return (v) => Object.prototype.toString.call(v) === `[object ${type}]`;
}

let isNumber = checkType("Number"); // isNumber(2)
let isString = checkType("String"); // isString('2')
```

:::

函数式编程就是灵活、巧妙地运用上述概念。
