<template><div><h1 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><router-link to="#overall">Overall</router-link><ul><li><router-link to="#_1-what-什么是函数式编程">1.(what)什么是函数式编程？</router-link></li><li><router-link to="#_2-why-为什么要进行函数式编程">2.(why)为什么要进行函数式编程？</router-link></li><li><router-link to="#_3-how-to-如何进行函数式编程呢">3.(how to) 如何进行函数式编程呢？</router-link></li><li><router-link to="#_3-1-高阶函数-high-order-function">3-1.高阶函数(high-order function)</router-link></li><li><router-link to="#_3-2-柯里化函数-currying-function">3-2.柯里化函数(currying function)</router-link></li></ul></li></ul></nav>
</div>
<h2 id="overall" tabindex="-1"><a class="header-anchor" href="#overall" aria-hidden="true">#</a> Overall</h2>
<h3 id="_1-what-什么是函数式编程" tabindex="-1"><a class="header-anchor" href="#_1-what-什么是函数式编程" aria-hidden="true">#</a> 1.(what)什么是函数式编程？</h3>
<p>假如说数学公式是用来描述数字之间的映射关系<code v-pre>例如，y=2x, 描述了 xy 之间的映射关系</code></p>
<p>那么，函数则是编程语言用来描述代码之间映射关系的形式。</p>
<p>其最大的特征就是输入和输出，且相同的输入无论执行多少次函数？输出结果也都相同。</p>
<p>所以说，函数式编程 =&gt; 公式编程</p>
<h3 id="_2-why-为什么要进行函数式编程" tabindex="-1"><a class="header-anchor" href="#_2-why-为什么要进行函数式编程" aria-hidden="true">#</a> 2.(why)为什么要进行函数式编程？</h3>
<p>函数式编程是对程序的一种抽象。</p>
<p>让使用函数的人只需关注函数的输入值和输出值即可！而不需要关心函数的实现细节。</p>
<p>可以大大地提升了编码效率、降低了维护成本。</p>
<h3 id="_3-how-to-如何进行函数式编程呢" tabindex="-1"><a class="header-anchor" href="#_3-how-to-如何进行函数式编程呢" aria-hidden="true">#</a> 3.(how to) 如何进行函数式编程呢？</h3>
<h3 id="_3-1-高阶函数-high-order-function" tabindex="-1"><a class="header-anchor" href="#_3-1-高阶函数-high-order-function" aria-hidden="true">#</a> 3-1.高阶函数(high-order function)</h3>
<details class="custom-container details"><summary>理解高阶函数(high-order function)</summary>
<ul>
<li>函数本身可以作为参数</li>
<li>函数本身可以作为返回值</li>
</ul>
<p>满足以上两大特征的函数，均可称为高阶函数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Target: 在不改变原有函数的基础上，对其进行拓展</span>
<span class="token comment">// Result: 先吃饭，再上厕所！</span>

<span class="token keyword">function</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"吃饭"</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>args<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">"吃了"</span> <span class="token operator">+</span> args <span class="token operator">:</span> <span class="token string">""</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数的作为参数</span>
eat<span class="token punctuation">.</span><span class="token function-variable function">after</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">afterFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数的作为返回值</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    afterFn <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">afterFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> eatAfter <span class="token operator">=</span> eat<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"吃完上厕所"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">eatAfter</span><span class="token punctuation">(</span><span class="token string">"米饭"</span><span class="token punctuation">,</span> <span class="token string">"猪肉"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="_3-2-柯里化函数-currying-function" tabindex="-1"><a class="header-anchor" href="#_3-2-柯里化函数-currying-function" aria-hidden="true">#</a> 3-2.柯里化函数(currying function)</h3>
<details class="custom-container details"><summary>理解柯里化函数(currying function)</summary>
<p>柯里化函数：</p>
<ul>
<li>柯里化函数的做法：拆分函数参数，使其依次传入。</li>
<li>柯里化函数的效果：
<ul>
<li>1.会减少函数作用范围</li>
<li>2.让函数变得更加具体</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 未使用柯里化</span>
<span class="token keyword">function</span> <span class="token function">checkType</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 柯里化</span>
<span class="token keyword">function</span> <span class="token function">checkType</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> isNumber <span class="token operator">=</span> <span class="token function">checkType</span><span class="token punctuation">(</span><span class="token string">"Number"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// isNumber(2)</span>
<span class="token keyword">let</span> isString <span class="token operator">=</span> <span class="token function">checkType</span><span class="token punctuation">(</span><span class="token string">"String"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// isString('2')</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>函数式编程就是灵活、巧妙地运用上述概念。</p>
</div></template>
