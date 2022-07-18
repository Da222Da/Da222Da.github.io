<template><h1 id="javascript-给我们提供的指令" tabindex="-1"><a class="header-anchor" href="#javascript-给我们提供的指令" aria-hidden="true">#</a> JavaScript 给我们提供的指令</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#申明语句">申明语句</RouterLink><ul><li><RouterLink to="#_1-申明类">1.申明类</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="申明语句" tabindex="-1"><a class="header-anchor" href="#申明语句" aria-hidden="true">#</a> 申明语句</h2>
<h3 id="_1-申明类" tabindex="-1"><a class="header-anchor" href="#_1-申明类" aria-hidden="true">#</a> 1.申明类</h3>
<CodeGroup>
<CodeGroupItem title="1.JS 申明类的方式">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Function 构造函数申明(ES5 推荐)</span>
<span class="token keyword">function</span> <span class="token function">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">People</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Class 关键字申明(ES6 推荐)</span>
<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> Peopel <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="2.JS 类的构成">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 2-1.类的构造函数</span>
<span class="token comment">// constructor 关键字：new 操作符在创建实例对象的时候，就会调用constructor函数</span>
<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// new People() => 调用该函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
