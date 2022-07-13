# Function 函数

::: tip
[[toc]]
:::

## Use

### 01.请描述你对 JavaScript 函数的理解？

JavaScript 里面的任意一个函数本质就是一个对象（new Function），而函数名则是指针。不仅仅可以用来组织代码，还能当做其他函数的参数或返回值。

### 02.ES6 为什么会新增箭头函数(arrow function)？

::: details 箭头函数：一切都是为了替换函数表达式

在 JavaScript 里面声明函数的主要有以下两种：

- 1.函数声明`function sum(a, b) { return a + b; }`
- 2.函数表达式`let sum = function(a, b) { return a + b }`

然后，在一些函数嵌入的场景里面，函数表示式显得尤为重要，如下：

```js
let arr = [1, 2, 3];

arr.map(function (i) {
  return i * 100;
});
```

在 JavaScript 引入箭头函数之后，我们便可以优化上述代码，如下：

```js
arr.map((i) => {
  return i * 100;
});
```

:::

### 03.箭头函数省略函数体大括号的时候，JavaScript 会隐式地做哪些事？

```js
// 不写函数体大括号时，便会隐式地返回这行代码的值

arr.map((i) => i * 100); // 等价于 arr.map((i) => { return i * 100 });
```

### 04.请描述箭头函数中 this 的指向？

注意！箭头函数里面的 this 指向当前上下文作用域，call/apply 也改变不了。

### 05.请描述你对 JavaScript 闭包的理解？

::: details 闭包：能够访问到其他函数内部变量的特殊函数。

闭包：一种特殊函数，即能够访问到其他函数内部变量的函数。

在 javascript 中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的子函数“。

```js
function fn() {
  let closure = 2;
  return function (number) {
    return Math.pow(number, closure); // JS形成闭包的条件：子函数被当做了返回值 && 子函数中存着父函数的内部变量closure
  };
}
let newFn = fn();
newFn(2); // 闭包形成的时机：当该函数被执行的时候，执行期上下文中就会生成闭包作用域[closuer scope] = { closure: 2 }
```

:::
