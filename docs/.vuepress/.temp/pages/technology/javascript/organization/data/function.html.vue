<template><h1 id="function-函数" tabindex="-1"><a class="header-anchor" href="#function-函数" aria-hidden="true">#</a> Function 函数</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#use">Use</RouterLink><ul><li><RouterLink to="#_01-请描述你对-javascript-函数的理解">01.请描述你对 JavaScript 函数的理解？</RouterLink></li><li><RouterLink to="#_02-es6-为什么会新增箭头函数-arrow-function">02.ES6 为什么会新增箭头函数(arrow function)？</RouterLink></li><li><RouterLink to="#_03-箭头函数省略函数体大括号的时候-javascript-会隐式地做哪些事">03.箭头函数省略函数体大括号的时候，JavaScript 会隐式地做哪些事？</RouterLink></li><li><RouterLink to="#_04-请描述箭头函数中-this-的指向">04.请描述箭头函数中 this 的指向？</RouterLink></li><li><RouterLink to="#_05-请描述你对-javascript-闭包的理解">05.请描述你对 JavaScript 闭包的理解？</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<h3 id="_01-请描述你对-javascript-函数的理解" tabindex="-1"><a class="header-anchor" href="#_01-请描述你对-javascript-函数的理解" aria-hidden="true">#</a> 01.请描述你对 JavaScript 函数的理解？</h3>
<p>JavaScript 里面的任意一个函数本质就是一个对象（new Function），而函数名则是指针。不仅仅可以用来组织代码，还能当做其他函数的参数或返回值。</p>
<h3 id="_02-es6-为什么会新增箭头函数-arrow-function" tabindex="-1"><a class="header-anchor" href="#_02-es6-为什么会新增箭头函数-arrow-function" aria-hidden="true">#</a> 02.ES6 为什么会新增箭头函数(arrow function)？</h3>
<details class="custom-container details"><summary>箭头函数：一切都是为了替换函数表达式</summary>
<p>在 JavaScript 里面声明函数的主要有以下两种：</p>
<ul>
<li>1.函数声明<code>function sum(a, b) { return a + b; }</code></li>
<li>2.函数表达式<code>let sum = function(a, b) { return a + b }</code></li>
</ul>
<p>然后，在一些函数嵌入的场景里面，函数表示式显得尤为重要，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在 JavaScript 引入箭头函数之后，我们便可以优化上述代码，如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h3 id="_03-箭头函数省略函数体大括号的时候-javascript-会隐式地做哪些事" tabindex="-1"><a class="header-anchor" href="#_03-箭头函数省略函数体大括号的时候-javascript-会隐式地做哪些事" aria-hidden="true">#</a> 03.箭头函数省略函数体大括号的时候，JavaScript 会隐式地做哪些事？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 不写函数体大括号时，便会隐式地返回这行代码的值</span>

arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等价于 arr.map((i) => { return i * 100 });</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_04-请描述箭头函数中-this-的指向" tabindex="-1"><a class="header-anchor" href="#_04-请描述箭头函数中-this-的指向" aria-hidden="true">#</a> 04.请描述箭头函数中 this 的指向？</h3>
<p>注意！箭头函数里面的 this 指向当前上下文作用域，call/apply 也改变不了。</p>
<h3 id="_05-请描述你对-javascript-闭包的理解" tabindex="-1"><a class="header-anchor" href="#_05-请描述你对-javascript-闭包的理解" aria-hidden="true">#</a> 05.请描述你对 JavaScript 闭包的理解？</h3>
<details class="custom-container details"><summary>闭包：能够访问到其他函数内部变量的特殊函数。</summary>
<p>闭包：一种特殊函数，即能够访问到其他函数内部变量的函数。</p>
<p>在 javascript 中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的子函数“。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> closure <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> closure<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// JS形成闭包的条件：子函数被当做了返回值 &amp;&amp; 子函数中存着父函数的内部变量closure</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> newFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newFn</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 闭包形成的时机：当该函数被执行的时候，执行期上下文中就会生成闭包作用域[closuer scope] = { closure: 2 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>
</template>
