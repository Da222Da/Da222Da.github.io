<template><h1 id="webpack-5-调研报告" tabindex="-1"><a class="header-anchor" href="#webpack-5-调研报告" aria-hidden="true">#</a> Webpack@5 调研报告</h1>
<div class="custom-container tip"><p class="custom-container-title">webpack: 针对于 JavaScript 应用程序的"打包工具"和"构建工具"</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#第一分部-使用整体思维模式认识-webpack">第一分部：使用整体思维模式认识 Webpack</RouterLink></li><li><RouterLink to="#第二分部-使用专精思维模式练习-webpack">第二分部：使用专精思维模式练习 Webpack</RouterLink><ul><li><RouterLink to="#_1-webpack-是如何解决-multiple-chunks-导致输出文件名冲突的问题">1. webpack 是如何解决&quot;multiple chunks&quot;导致输出文件名冲突的问题？</RouterLink></li><li><RouterLink to="#_2-以图片资源为例-看看-webpack-5-是如何处理资源模块的">2. 以图片资源为例，看看 webpack@5 是如何处理资源模块的？</RouterLink></li><li><RouterLink to="#_3-webpack-文件监听原理-watch-watchoptions">3. webpack 文件监听原理 watch &amp;&amp; watchOptions</RouterLink></li><li><RouterLink to="#_4-webpack-提供的文件指纹策略-hash-chunkhash-contenthash">4. webpack 提供的文件指纹策略 Hash &amp;&amp; ChunkHash &amp;&amp; Contenthash</RouterLink></li><li><RouterLink to="#_5-热更新替换解决了哪些问题-其原理又是怎么样的">5.热更新替换解决了哪些问题？其原理又是怎么样的？</RouterLink></li><li><RouterLink to="#_6-注意-在使用-postcss、babel-的时候-记得添加-browserslist-属性。">6.注意！在使用 PostCSS、Babel 的时候，记得添加 browserslist 属性。</RouterLink></li></ul></li></ul></nav>
<p><a href="https://webpack.docschina.org/concepts/" target="_blank" rel="noopener noreferrer">webpack 中文文档<OutboundLink/></a></p>
</div>
<h2 id="第一分部-使用整体思维模式认识-webpack" tabindex="-1"><a class="header-anchor" href="#第一分部-使用整体思维模式认识-webpack" aria-hidden="true">#</a> 第一分部：使用整体思维模式认识 Webpack</h2>
<p><strong>1.当前认知中的 webpack 是什么样的？</strong></p>
<p>webpack 一款针对于 JavaScript 应用程序的静态文件打包工具。简而言之，webpack 能将不同类型的文件模块<code>例如，.js | .css | .png等的</code>，按照我们自定义的 webpack 规则<code>webpack.config.js</code>，输出一个或多个 bundle 包文件并重组、拼接形成一个更符合我们需求的 JavaScript 应用程序。</p>
<p><strong>2.如何自定义 webpack 配置规则？webpack.config.js 怎么写？</strong></p>
<p>webpack.config.js 是 webpack 默认的配置文件名称。还有，我们要知道 webpack 解析代码包和 webpack-cli 指令包是两个不同的项目。所以，当我们的 webpack 在执行构建任务时，会做以下两件事件：</p>
<ul>
<li>第一件事：webpack-cli 脚手架先解析该文件里面的内容，得到配置信息。</li>
<li>第二件事：调用 webpack 包，按照配置内容，完成构建任务。</li>
</ul>
<p>本质上，{ “build”: &quot;webpack&quot; } =&gt; { &quot;build&quot;: &quot;webpack-cli --config webpack.config.js&quot; }</p>
<p>上述内容，帮助我们了解 webpack.config.js 配置文件，我们来看一下 webpack 的核心概念。</p>
<ul>
<li><code>1.entry 指定打包入口 &amp;&amp; 默认值：./src/index.js</code></li>
<li><code>2.output 指定打包出口 &amp;&amp; 默认值：./dist/main.js</code> 用来告诉 webpack 将编译后的文件输出到磁盘中的什么位置。</li>
<li><code>3.mode设置内置模式 &amp;&amp; 默认值: production 生产模式</code>用于指定 webpack 运行环境。</li>
<li><code>4.Loader文件类型扩展</code> webpack 开箱即用只支持.js 和.json 两种文件类型，若想支持其他类型的文件，则需要使用不同的 Loader，将源文件转化成 webpack 有效模块。</li>
<li><code>5.Plugins功能扩展</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wbepack.config.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span> <span class="token comment">// production 生产模式 || devlopment 开发模式 || none，不使用任何默认的优化选项</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].bundle.js"</span><span class="token punctuation">,</span> <span class="token comment">// filename, 指定出口文件的名称</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// path, 指定出口文件的路径</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// clean, 配置webpack如何清空出口目录</span>

    <span class="token comment">// assetModuleFilename 自定义输出文件名</span>
    <span class="token comment">// [hash] 占位符，根据文件内容进行hash加密</span>
    <span class="token comment">// [ext] 占位符，表示文件后缀名，例如".svg | .png"</span>
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">"assets/[hash][ext]"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// rules，自定义webpack模块扩展规则，接收一个对象数组</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// test，指定匹配规则</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// exclude，指定忽略文件</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span> <span class="token comment">// use，指定使用的loader名称和loader options配置规则</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span> <span class="token comment">// "asset/resource" 打包生成资源文件，并在引用的时候，导出RUL地址</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">"./index.html"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="第二分部-使用专精思维模式练习-webpack" tabindex="-1"><a class="header-anchor" href="#第二分部-使用专精思维模式练习-webpack" aria-hidden="true">#</a> 第二分部：使用专精思维模式练习 Webpack</h2>
<p><img src="@source/packages/@npm/webpack/img/travel.drawio.svg" alt="webpack 行程图"></p>
<h3 id="_1-webpack-是如何解决-multiple-chunks-导致输出文件名冲突的问题" tabindex="-1"><a class="header-anchor" href="#_1-webpack-是如何解决-multiple-chunks-导致输出文件名冲突的问题" aria-hidden="true">#</a> 1. webpack 是如何解决&quot;multiple chunks&quot;导致输出文件名冲突的问题？</h3>
<details class="custom-container details"><summary>Conflict: Multiple chunks emit assets to the same filename main.js</summary>
<ul>
<li>
<p><strong>需求：</strong></p>
<ol>
<li>假设 entry 现在有两个出口&quot;app&quot;、&quot;search&quot;，如何根据不同的 chunks 输出对应的文件内容呢？</li>
<li>要求输出两个文件：&quot;./dist/app.js&quot; 和 &quot;./dist/search.js&quot;</li>
</ol>
</li>
<li>
<p><strong>解决方案：</strong></p>
<ul>
<li>webpack 引用了[name]占位符的概念，用来确保文件名的唯一</li>
</ul>
</li>
<li>
<p><strong>webpack.config.js 代码如下：</strong></p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">"./src/search.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details>
<h3 id="_2-以图片资源为例-看看-webpack-5-是如何处理资源模块的" tabindex="-1"><a class="header-anchor" href="#_2-以图片资源为例-看看-webpack-5-是如何处理资源模块的" aria-hidden="true">#</a> 2. 以图片资源为例，看看 webpack@5 是如何处理资源模块的？</h3>
<details class="custom-container details"><summary>测试用例：在 webpack 项目中引入一张名为 logo.png 的图片？</summary>
<p>webpack@5 新增了资源模块(asset module)，它是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。</p>
<ul>
<li><strong>webpack.config.js 文件代码</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].bundle.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// assetModuleFilename 自定义输出文件名</span>
    <span class="token comment">// [hash] 占位符，根据文件内容进行hash加密</span>
    <span class="token comment">// [ext] 占位符，表示文件后缀名，例如".svg | .png"</span>
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">"assets/[hash][ext]"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span> <span class="token comment">// "asset/resource" 打包生成资源文件，并在引用的时候，导出RUL地址</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">"./index.html"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ul>
<li><strong>src/index.js 文件代码</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> logoImage <span class="token keyword">from</span> <span class="token string">"./assets/img/logo.png"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>logoImage<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// http://127.0.0.1:5502/dist/assets/f3150a6bbdf13d9e0ff1.png</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>logoImage<span class="token punctuation">}</span> width<span class="token operator">=</span><span class="token string">"100"</span> height<span class="token operator">=</span><span class="token string">"100"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details>
<h3 id="_3-webpack-文件监听原理-watch-watchoptions" tabindex="-1"><a class="header-anchor" href="#_3-webpack-文件监听原理-watch-watchoptions" aria-hidden="true">#</a> 3. webpack 文件监听原理 watch &amp;&amp; watchOptions</h3>
<details class="custom-container details"><summary>原理分析：webpack --watch 做了哪些事情？</summary>
<ul>
<li><strong>需求分析：</strong></li>
</ul>
<p>当我们在开发环境中编码时，要是每次细小的变动，都得重新构建项目的话？那未免也太麻烦了吧。</p>
<ul>
<li><strong>解决方案：</strong></li>
</ul>
<p>基于上述问题，webpack 引入了 watch 的概念，通过一个轮询机制<code>watchOptions.poll</code>不断地收集发生变化的文件，并将其缓存起来，然后延迟一段时间<code>watchOptions.aggregateTimeout</code>后，重新构建一次，并释放已经累积的缓存文件。</p>
<p>若是某些系统，监听大量文件会导致大量的 CPU 或内存占用。我们可以使用<code>watchOptions.ignored</code>忽略不必要的文件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 相当于指令 webpack --watch</span>
  <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token comment">// 1000ms &amp;&amp; 默认 1s 轮询一次(不停地询问系统指定文件有没有发生变化)</span>
    <span class="token comment">// 判断文件发生变化的条件是：文件最后编辑时间是否发生变化</span>
    <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">// 每隔300ms，重新构建一次</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li><strong>缺点</strong></li>
</ul>
<p>缺点 1：每次重新构建之后。依旧需要我们手动去刷新浏览器，才能看到页面效果。</p>
<p>缺点 2：每次重新构建之后，都会进行一次磁盘读写，而不是存到内存里面。</p>
<p>正因如此，才促使了热更新替换技术的诞生。</p>
</details>
<h3 id="_4-webpack-提供的文件指纹策略-hash-chunkhash-contenthash" tabindex="-1"><a class="header-anchor" href="#_4-webpack-提供的文件指纹策略-hash-chunkhash-contenthash" aria-hidden="true">#</a> 4. webpack 提供的文件指纹策略 Hash &amp;&amp; ChunkHash &amp;&amp; Contenthash</h3>
<details class="custom-container details"><summary>Hash && ChunkHash && Contenthash 的适用场景？怎么样才能有效利用浏览器缓存机制。</summary>
<p><strong>需求分析：</strong></p>
<p>什么是文件指纹？即“打包后输出文件的后缀名”。<code>例如，&lt;script src=&quot;app703a459f67efec54a745.js&quot;&gt;&lt;/script&gt;里面的703a459f67efec54a745</code></p>
<p>文件指纹有什么用呢？当我们的项目在进行迭代更新的时候，若是某个文件里面的内容发生了变化，但是，重新上线的文件名称却没有变化的话？浏览器是不会使用更新文件的，而是继续使用缓存文件。</p>
<p>针对与浏览器的这种缓存机制？我可以“Ctrl + F5 强制刷新” 或者 “每次重新打包项目时，更改哪些文件内容发生过改变的文件名称，让浏览器主动加载那些变动文件。”</p>
<p>很显然！每次让用户强制刷新是不现实的。只能每次打包构建的时候，更改文件名称了。</p>
<p><strong>webpack 解决方案：</strong></p>
<p>针对与浏览器缓存的问题？webpack 给我们提供了以下三种文件指纹：</p>
<p>1.Hash：和整个项目的构建有关系，只要项目文件有修改，整个项目构建生成的 hash 值就会更改。</p>
<p>2.Chunkhash: 和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash 值。</p>
<p>3.Contenthash: 根据文件内容来定义 hash，文件内容不变，则 contenthash 不变。</p>
<p><strong>文件指纹的使用场景：</strong></p>
<ul>
<li>场景 1：针对于.js 文件时，使用 chunkhash</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name][chunkhash].js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>场景 2：针对于图片文件时，使用 hash</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">"assets/[hash][ext]"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details>
<h3 id="_5-热更新替换解决了哪些问题-其原理又是怎么样的" tabindex="-1"><a class="header-anchor" href="#_5-热更新替换解决了哪些问题-其原理又是怎么样的" aria-hidden="true">#</a> 5.热更新替换解决了哪些问题？其原理又是怎么样的？</h3>
<details class="custom-container details"><summary>以 webpack-dev-cli 为例，阐明热更新替换的实现原理？</summary>
<p><strong>1.热更新替换解决了哪些问题？</strong></p>
<ul>
<li>1.每次会将热更新的文件存到内存中，而不是像 watch 一样读写磁盘。</li>
<li>2.只替换发生变化的 bundle.js 包文件，并提供 Live Reloading 服务。</li>
</ul>
<p><strong>2.webpack Dev Server 的原理分析:</strong></p>
<p><img src="@source/packages/@npm/webpack/img/hot-replacement.drawio.svg" alt="webpack Dev Server的原理图"></p>
<ul>
<li>Webpack Compiler：将 JS 编译成 Bundle 包</li>
<li>Bundle Server: 提供文件给浏览器访问</li>
<li>bundle.js: 构建输出的文件</li>
<li>HMR Server: 将热更新的文件输出给 HMR Runtime</li>
<li>HMR Runtime: 会被注入到浏览器中，更新文件的变化</li>
</ul>
</details>
<h3 id="_6-注意-在使用-postcss、babel-的时候-记得添加-browserslist-属性。" tabindex="-1"><a class="header-anchor" href="#_6-注意-在使用-postcss、babel-的时候-记得添加-browserslist-属性。" aria-hidden="true">#</a> 6.注意！在使用 PostCSS、Babel 的时候，记得添加 browserslist 属性。</h3>
<details class="custom-container details"><summary>browserslist 设置浏览器的兼容范围</summary>
<p>若是不加 browserslist 属性，会怎么样呢？ —— 最好的情况就是有默认值；最坏的情况就是插件无效。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// package.json</span>

<span class="token punctuation">{</span>
  <span class="token property">"browserslist"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"last 2 versions"</span><span class="token punctuation">,</span> <span class="token comment">// 兼容浏览器最近的两个版本</span>
    <span class="token string">">1%"</span><span class="token punctuation">,</span> <span class="token comment">// 只兼容全球用户大于1%的浏览器</span>
    <span class="token string">"IOS 7"</span> <span class="token comment">// 兼容IOS浏览器</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details>
<!-- ### 1. webpack.config.js 配置文件的设计需求与原理？
> 需求：如何优雅地在不同环境中运行项目?
>
> 原理图如下：

![ webpack.config.js 配置文件的设计需求与原理？](./img/webpack-config.drawio.svg) -->
<!-- ```md

# 5. Plugins 配置
    - 5-1. HtmlWebpackPlugin 生成HTML5文件，并body中使用 script 标签引入你所有 webpack 生成的 bundle。
``` -->
<!-- ## 附录B: webpack 构建web应用流程图

```md
构建任务：
1. 转换 ES6 语法
2. 转换 JSX
3. CSS 前缀补全/预处理器
4. 压缩混淆
5. 图片压缩

``` -->
</template>
