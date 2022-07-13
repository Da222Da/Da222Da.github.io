# Symbol 唯一值

[[toc]]

## ES6 引入 Symbol 数据类型的原因？

ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 Symbol 的原因。

在这种背景之下，ES6 引入了一种新的原始数据类型 Symbol，每一个 Symbol 值都是通过调用 Symbol()函数生成，且生成的 Symbol 值是独一无二的。

```js
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false，证明了symbol值是独一无二的
```

## Symbol 给 JavaScript 带来的改变？

- 使用 symbol 值来做对象的属性名。换言之，对象的属性名现在可以有两种类型`字符串 && Symbol类型`

::: danger 注意！
Symbol 作为属性名，遍历对象的时候，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。

但是，可以通过 `Object.getOwnPropertySymbols() && Reflect.ownKeys()`获取。
:::

## 深入了解 Symbol 属性

### Symbol.prototype.description || Symbol() 函数接受一个字符串参数的意义？

Symbol() 函数接受一个字符串参数的意义？只表示对 Symbol 实例的描述，对 Symbol() 函数的返回值不会产生任何影响，主要是为了让读者容易区分而已。

```js
let s1 = Symbol("foo");
console.log(s1.description); // foo
```

### Symbol.hasInstance && 指向 instanceof 运算符的执行函数

`Object[Symbol.hasInstance]` 指向一个方法（该方法是 instanceof 运算符执行时，所调用的 JavaScript 语言内部方法。）

```js
class Person {}
let zhangsan = new Person();

zhangsan instanceof Person; // exp01
Person[Symbol.hasInstance](zhangsan); // exp02

// exp01 等价于 exp02
```
