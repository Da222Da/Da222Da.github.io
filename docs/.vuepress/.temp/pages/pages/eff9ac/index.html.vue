<template><h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#从整体角度了解-less">从整体角度了解 Less</RouterLink><ul><li><RouterLink to="#_1-what-什么是-less">1.(what)什么是 Less？</RouterLink></li><li><RouterLink to="#_2-why-为什么要使用-less">2.(why)为什么要使用 Less？</RouterLink></li><li><RouterLink to="#_3-when-什么时候可以使用-less">3.(when)什么时候可以使用 Less？</RouterLink></li><li><RouterLink to="#_4-how-to-如何将-less-使用起来">4.(how to)如何将 Less 使用起来？</RouterLink></li><li><RouterLink to="#_5-where-and-who-javascript-工程化中-less-常常和哪些工具配合使用呢">5.(where and who)JavaScript 工程化中，Less 常常和哪些工具配合使用呢？</RouterLink></li></ul></li><li><RouterLink to="#use">Use</RouterLink><ul><li><RouterLink to="#_01-如何在-less-中定义变量">01.如何在 less 中定义变量？</RouterLink></li><li><RouterLink to="#_02-如何使用-range-函数声明一个数列">02.如何使用 range() 函数声明一个数列？</RouterLink></li><li><RouterLink to="#_03-如何使用-each-函数对数列进行迭代操作">03.如何使用 each() 函数对数列进行迭代操作</RouterLink></li><li><RouterLink to="#_04-如何定义、使用-mixin-混入">04.如何定义、使用 Mixin(混入)？</RouterLink></li><li><RouterLink to="#_05-例子-生成-1px-50px-的-m-mt-mb-ml-mr-my-mx-样式类">05.(例子)生成 1px-50px 的[.m-|.mt-|.mb-|.ml-|.mr-|.my-|.mx-*] 样式类？</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="从整体角度了解-less" tabindex="-1"><a class="header-anchor" href="#从整体角度了解-less" aria-hidden="true">#</a> 从整体角度了解 Less</h2>
<h3 id="_1-what-什么是-less" tabindex="-1"><a class="header-anchor" href="#_1-what-什么是-less" aria-hidden="true">#</a> 1.(what)什么是 Less？</h3>
<p>Less(Leaner Style Sheet)，CSS 扩展语言。</p>
<p>使用 Less 样式语法、再配合 Less.js 编译成 CSS 样式。</p>
<p>一切都是为了让 CSS 写起来更加容易、高效。</p>
<h3 id="_2-why-为什么要使用-less" tabindex="-1"><a class="header-anchor" href="#_2-why-为什么要使用-less" aria-hidden="true">#</a> 2.(why)为什么要使用 Less？</h3>
<p>为了写出更高效、可维护的样式代码。</p>
<h3 id="_3-when-什么时候可以使用-less" tabindex="-1"><a class="header-anchor" href="#_3-when-什么时候可以使用-less" aria-hidden="true">#</a> 3.(when)什么时候可以使用 Less？</h3>
<p>凡是需要我们写 CSS 样式的时候，均可以使用 Less 来替代 CSS。</p>
<h3 id="_4-how-to-如何将-less-使用起来" tabindex="-1"><a class="header-anchor" href="#_4-how-to-如何将-less-使用起来" aria-hidden="true">#</a> 4.(how to)如何将 Less 使用起来？</h3>
<p>在使用 Less 之前，可以先前往<a href="https://less.bootcss.com/" target="_blank" rel="noopener noreferrer">less 官网<OutboundLink/></a>，熟悉 Less 语法。</p>
<p>在熟悉 Less 语法，并安装了 NodeJS 环境的前提之下，</p>
<p>可以全局安装 Less 工具<code>npm install -g less</code>。</p>
<p>接下来，便能使用 Less 指令，编译你的 less 文件了<code>例如，lessc styles.less styles.css</code></p>
<h3 id="_5-where-and-who-javascript-工程化中-less-常常和哪些工具配合使用呢" tabindex="-1"><a class="header-anchor" href="#_5-where-and-who-javascript-工程化中-less-常常和哪些工具配合使用呢" aria-hidden="true">#</a> 5.(where and who)JavaScript 工程化中，Less 常常和哪些工具配合使用呢？</h3>
<ul>
<li>和 webpack 进行配合使用</li>
</ul>
<details class="custom-container details"><summary>在 webpack 里面使用 less</summary>
<ol>
<li>
<p>安装 less 相关包<code>npm i less less-loader css-loader style-loader -D</code></p>
</li>
<li>
<p>配置 webpack.config.js</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'less-loader'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>
<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<h3 id="_01-如何在-less-中定义变量" tabindex="-1"><a class="header-anchor" href="#_01-如何在-less-中定义变量" aria-hidden="true">#</a> 01.如何在 less 中定义变量？</h3>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token variable">@name<span class="token punctuation">:</span></span> <span class="token string">"张三"</span><span class="token punctuation">;</span>
<span class="token variable">@list<span class="token punctuation">:</span></span> 1<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 3<span class="token punctuation">,</span> 4<span class="token punctuation">,</span> 5<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_02-如何使用-range-函数声明一个数列" tabindex="-1"><a class="header-anchor" href="#_02-如何使用-range-函数声明一个数列" aria-hidden="true">#</a> 02.如何使用 range() 函数声明一个数列？</h3>
<div class="custom-container danger"><p class="custom-container-title">range() 参数解析</p>
<ul>
<li>语法<code>range(start, end, step)</code>
<ul>
<li>start: 范围的起始值</li>
<li>end: 范围的结束值</li>
<li>step: 从 start 到 end，每一次的增量</li>
</ul>
</li>
</ul>
</div>
<details class="custom-container details"><summary>(例子)声明数列的两种方式</summary>
<ul>
<li>方式 1：变量 + 逗号分隔</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token variable">@list<span class="token punctuation">:</span></span> 1<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 3<span class="token punctuation">,</span> 4<span class="token punctuation">,</span> 5<span class="token punctuation">;</span>
<span class="token variable">@people<span class="token punctuation">:</span></span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token string">"wangwu"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>方式 2：range(start, end, step) 函数</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token function">range</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 10<span class="token punctuation">,</span> 5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1, 5, 10</span>
<span class="token function">range</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 30px<span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10px 20px 30px</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="_03-如何使用-each-函数对数列进行迭代操作" tabindex="-1"><a class="header-anchor" href="#_03-如何使用-each-函数对数列进行迭代操作" aria-hidden="true">#</a> 03.如何使用 each() 函数对数列进行迭代操作</h3>
<div class="custom-container danger"><p class="custom-container-title">each() 参数解析</p>
<ul>
<li>语法<code>each(list, rules)</code>
<ul>
<li>list: 要被遍历的数列</li>
<li>rules: 匿名规则集（或者是匿名 mixin）
<ul>
<li>若是 ruleset 会默认传入三个变量@value、@key、@index</li>
<li>若是 mixin 匿名函数则可以指定变量<code>例如，each(range(30), .(@value){})</code>。</li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<details class="custom-container details"><summary>(例子) 生成 1px-30px 的 margin 样式类</summary>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>each<span class="token selector">(range(30),</span> <span class="token punctuation">{</span>
  <span class="token variable">@valueToPx<span class="token punctuation">:</span></span> <span class="token variable">@value</span> <span class="token operator">*</span> 1px<span class="token punctuation">;</span> 
  <span class="token selector">.m-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@valueToPx</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>
<h3 id="_04-如何定义、使用-mixin-混入" tabindex="-1"><a class="header-anchor" href="#_04-如何定义、使用-mixin-混入" aria-hidden="true">#</a> 04.如何定义、使用 Mixin(混入)？</h3>
<ul>
<li>Mixin(混入) 类似于 JavaScript 里面的匿名函数，使用<code>.</code>和<code>#</code>均可。</li>
</ul>
<details class="custom-container details"><summary>测试用例</summary>
<ul>
<li>定义与使用 Mixin</li>
</ul>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token comment">// 定义Mixin -> .mixin</span>
<span class="token selector">.mixin</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义Mixin -> #mixin</span>
<span class="token selector">#mixin</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用.mixin</span>
  #<span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用#mixin</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li>编译结果</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.mixin</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#mixin</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
<h3 id="_05-例子-生成-1px-50px-的-m-mt-mb-ml-mr-my-mx-样式类" tabindex="-1"><a class="header-anchor" href="#_05-例子-生成-1px-50px-的-m-mt-mb-ml-mr-my-mx-样式类" aria-hidden="true">#</a> 05.(例子)生成 1px-50px 的[.m-<em>|.mt-</em>|.mb-<em>|.ml-</em>|.mr-<em>|.my-</em>|.mx-*] 样式类？</h3>
<details class="custom-container details"><summary>源码</summary>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code>each<span class="token selector">(range(30), .(<span class="token variable">@value</span>)</span><span class="token punctuation">{</span>
  <span class="token variable">@valueToPx<span class="token punctuation">:</span></span> <span class="token variable">@value</span> <span class="token operator">*</span> 1px<span class="token punctuation">;</span> 
  <span class="token selector">.m-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@valueToPx</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mx-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 <span class="token variable">@valueToPx</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.my-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@valueToPx</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mt-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token variable">@valueToPx</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mb-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token variable">@valueToPx</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.ml-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token variable">@valueToPx</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mr-@{value}</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token variable">@valueToPx</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details>
</template>
