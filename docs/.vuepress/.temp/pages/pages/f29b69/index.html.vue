<template><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML:</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#简介-从整体角度认识-html">简介: 从整体角度认识 HTML</RouterLink></li><li><RouterLink to="#use">Use</RouterLink><ul><li><RouterLink to="#_01-如何给-select-标签设置默认选中项">01.如何给 select 标签设置默认选中项？</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="简介-从整体角度认识-html" tabindex="-1"><a class="header-anchor" href="#简介-从整体角度认识-html" aria-hidden="true">#</a> 简介: 从整体角度认识 HTML</h2>
<ul>
<li>HTML: Hypertext Markup Language</li>
<li>HTML 标签
<ul>
<li><code>&lt;select&gt; &amp;&amp; (&lt;option&gt; || &lt;optgroup&gt;)</code> HTML 提供的选项菜单控件</li>
</ul>
</li>
</ul>
<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<h3 id="_01-如何给-select-标签设置默认选中项" tabindex="-1"><a class="header-anchor" href="#_01-如何给-select-标签设置默认选中项" aria-hidden="true">#</a> 01.如何给 select 标签设置默认选中项？</h3>
<details class="custom-container details"><summary>使用 option[selected]属性给 select 标签设置默认选中项</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Value 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value2<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>Value 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Value 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>注意！默认情况下，默认项的 selected 属性是不会随着选择项的变化而变化。</p>
</div>
</template>
