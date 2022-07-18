<template><h1 id="javascript-面向对象编程" tabindex="-1"><a class="header-anchor" href="#javascript-面向对象编程" aria-hidden="true">#</a> JavaScript 面向对象编程</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#什么是面向对象编程">什么是面向对象编程？</RouterLink><ul><li><RouterLink to="#_1-类和实例">1.类和实例</RouterLink></li><li><RouterLink to="#_2-类的三大特性-继承、封装、和多态">2.类的三大特性：继承、封装、和多态</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="什么是面向对象编程" tabindex="-1"><a class="header-anchor" href="#什么是面向对象编程" aria-hidden="true">#</a> 什么是面向对象编程？</h2>
<p>在搞清楚什么是面向对象之前，先得搞清楚以下几个概念：</p>
<h3 id="_1-类和实例" tabindex="-1"><a class="header-anchor" href="#_1-类和实例" aria-hidden="true">#</a> 1.类和实例</h3>
<ul>
<li>类，即是模板。<code>例如，张三是人、旺财是狗。这里的人、狗就是我们所说的类</code>。</li>
<li>实例，类的具体化。<code>例如，张三也算是个人。这里的张三就是一个实例</code>。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 声明人类</span>
<span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 声明狗类</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 声明人类的实例张三</span>
<span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">"旺财"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 声明狗类的实例旺财</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-类的三大特性-继承、封装、和多态" tabindex="-1"><a class="header-anchor" href="#_2-类的三大特性-继承、封装、和多态" aria-hidden="true">#</a> 2.类的三大特性：继承、封装、和多态</h3>
<ul>
<li>什么是继承？继承，子类继承父类。</li>
<li>什么是封装？封装，数据的权限和保密。</li>
<li>什么是多态？多态，同一接口的不同实现。</li>
</ul>
</template>
