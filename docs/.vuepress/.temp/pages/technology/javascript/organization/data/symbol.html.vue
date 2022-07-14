<template><div><h1 id="symbol-唯一值" tabindex="-1"><a class="header-anchor" href="#symbol-唯一值" aria-hidden="true">#</a> Symbol 唯一值</h1>
<nav class="table-of-contents"><ul><li><router-link to="#es6-引入-symbol-数据类型的原因">ES6 引入 Symbol 数据类型的原因？</router-link></li><li><router-link to="#symbol-给-javascript-带来的改变">Symbol 给 JavaScript 带来的改变？</router-link></li><li><router-link to="#深入了解-symbol-属性">深入了解 Symbol 属性</router-link><ul><li><router-link to="#symbol-prototype-description-symbol-函数接受一个字符串参数的意义">Symbol.prototype.description || Symbol() 函数接受一个字符串参数的意义？</router-link></li><li><router-link to="#symbol-hasinstance-指向-instanceof-运算符的执行函数">Symbol.hasInstance &amp;&amp; 指向 instanceof 运算符的执行函数</router-link></li></ul></li></ul></nav>
<h2 id="es6-引入-symbol-数据类型的原因" tabindex="-1"><a class="header-anchor" href="#es6-引入-symbol-数据类型的原因" aria-hidden="true">#</a> ES6 引入 Symbol 数据类型的原因？</h2>
<p>ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 Symbol 的原因。</p>
<p>在这种背景之下，ES6 引入了一种新的原始数据类型 Symbol，每一个 Symbol 值都是通过调用 Symbol()函数生成，且生成的 Symbol 值是独一无二的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1 <span class="token operator">===</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，证明了symbol值是独一无二的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-给-javascript-带来的改变" tabindex="-1"><a class="header-anchor" href="#symbol-给-javascript-带来的改变" aria-hidden="true">#</a> Symbol 给 JavaScript 带来的改变？</h2>
<ul>
<li>使用 symbol 值来做对象的属性名。换言之，对象的属性名现在可以有两种类型<code v-pre>字符串 &amp;&amp; Symbol类型</code></li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">注意！</p>
<p>Symbol 作为属性名，遍历对象的时候，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。</p>
<p>但是，可以通过 <code v-pre>Object.getOwnPropertySymbols() &amp;&amp; Reflect.ownKeys()</code>获取。</p>
</div>
<h2 id="深入了解-symbol-属性" tabindex="-1"><a class="header-anchor" href="#深入了解-symbol-属性" aria-hidden="true">#</a> 深入了解 Symbol 属性</h2>
<h3 id="symbol-prototype-description-symbol-函数接受一个字符串参数的意义" tabindex="-1"><a class="header-anchor" href="#symbol-prototype-description-symbol-函数接受一个字符串参数的意义" aria-hidden="true">#</a> Symbol.prototype.description || Symbol() 函数接受一个字符串参数的意义？</h3>
<p>Symbol() 函数接受一个字符串参数的意义？只表示对 Symbol 实例的描述，对 Symbol() 函数的返回值不会产生任何影响，主要是为了让读者容易区分而已。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-hasinstance-指向-instanceof-运算符的执行函数" tabindex="-1"><a class="header-anchor" href="#symbol-hasinstance-指向-instanceof-运算符的执行函数" aria-hidden="true">#</a> Symbol.hasInstance &amp;&amp; 指向 instanceof 运算符的执行函数</h3>
<p><code v-pre>Object[Symbol.hasInstance]</code> 指向一个方法（该方法是 instanceof 运算符执行时，所调用的 JavaScript 语言内部方法。）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> zhangsan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

zhangsan <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">;</span> <span class="token comment">// exp01</span>
Person<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span><span class="token punctuation">(</span>zhangsan<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// exp02</span>

<span class="token comment">// exp01 等价于 exp02</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
