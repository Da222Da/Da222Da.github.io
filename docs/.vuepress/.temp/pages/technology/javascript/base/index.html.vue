<template><div><h1 id="javascript-数据类型与指令" tabindex="-1"><a class="header-anchor" href="#javascript-数据类型与指令" aria-hidden="true">#</a> JavaScript 数据类型与指令</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><router-link to="#一、javascript-原始数据类型">一、JavaScript 原始数据类型</router-link></li><li><router-link to="#二、javascript-引用数据类型">二、JavaScript 引用数据类型</router-link><ul><li><router-link to="#array数组-一组有序的数据">Array数组: 一组有序的数据</router-link></li></ul></li><li><router-link to="#三、javascript-指令">三、JavaScript 指令</router-link></li></ul></nav>
</div>
<h2 id="一、javascript-原始数据类型" tabindex="-1"><a class="header-anchor" href="#一、javascript-原始数据类型" aria-hidden="true">#</a> 一、JavaScript 原始数据类型</h2>
<h2 id="二、javascript-引用数据类型" tabindex="-1"><a class="header-anchor" href="#二、javascript-引用数据类型" aria-hidden="true">#</a> 二、JavaScript 引用数据类型</h2>
<h3 id="array数组-一组有序的数据" tabindex="-1"><a class="header-anchor" href="#array数组-一组有序的数据" aria-hidden="true">#</a> <code v-pre>Array</code>数组: 一组有序的数据</h3>
<CodeGroup>
<CodeGroupItem title="1-js 数组使用说明">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 方式1：Array构造函数</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式2: array literal</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 我们什么时候应该使用数组结构呢？
 * - 对数组进行“查、改”操作的时候，时间复杂度均为O(1)
 * - 对数组进行“增、删”操作的时候，时间复杂度均为O(n)
 *
 * 综上所述，当我们需要对一组数进行大量随机访问操作的时候，数组最为合适。
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="2-Array 构造函数">
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Array 构造函数对象</span>

<span class="token list punctuation">-</span> 属性

  <span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`Array[Symbol.species]`</span> 指向 Array 构造函数

<span class="token list punctuation">-</span> 方法
  <span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`Array.from()`</span> 将类数组转成数组<span class="token code-snippet code keyword">`例如Array.from("Hello World")`</span>
  <span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`Array.of()`</span> 将一组参数转成数组<span class="token code-snippet code keyword">`例如Array.of(1, 3, 4, 6)`</span>
  <span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`Array.isArray()`</span> 判断参数是不是一个数组<span class="token code-snippet code keyword">`例如Array.isArray([1, 2, 3])`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="3-Array Prototype 原型对象">
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Array Prototype 原型对象</span>

<span class="token title important"><span class="token punctuation">##</span> 属性</span>

<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`Array.prototype.length`</span> 数组长度

<span class="token title important"><span class="token punctuation">##</span> 方法</span>

<span class="token list punctuation">1.</span> <span class="token code-snippet code keyword">`Array.prototype.indexOf(searchElement, fromIndex)`</span>
   <span class="token list punctuation">-</span> 描述：判断数组中是否存在传入的元素，若存在，返回该元素的索引，否则，返回-1
   <span class="token list punctuation">-</span> 例子<span class="token code-snippet code keyword">`[1, 2, 3].indexOf(1) => 索引0`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="三、javascript-指令" tabindex="-1"><a class="header-anchor" href="#三、javascript-指令" aria-hidden="true">#</a> 三、JavaScript 指令</h2>
</div></template>
