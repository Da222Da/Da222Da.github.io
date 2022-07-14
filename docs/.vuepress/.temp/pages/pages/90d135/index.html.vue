<template><div><h1 id="babel-调研报告" tabindex="-1"><a class="header-anchor" href="#babel-调研报告" aria-hidden="true">#</a> Babel 调研报告</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Babel 是一个 JavaScript 语法转换工具</p>
<p><a href="https://www.babeljs.cn/docs/" target="_blank" rel="noopener noreferrer">Babel 官网<ExternalLinkIcon/></a></p>
</div>
<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2>
<ul>
<li>
<p>1.采用 ECMAScript 2015+ 语法编写的代码可能无法在旧版本的浏览器或其他环境正常运行，怎么样才能让 ECMAScript 2015+ 高阶语法代码在旧版本浏览器中正常运行呢？</p>
</li>
<li>
<p>2.某些 JS 框架自定义的语法，例如 Vue 里面的指令、插值表达式、React 里面 JSX 模板语法，JS 引擎是不认识的，怎么样才能让 JS 引擎识别 JSX 语法呢？</p>
</li>
<li>
<p>3.某些 JS 预编译工具里面的某些自创语法，例如 TypeScript，JS 引擎是不认识的，怎么样才能让 JS 引擎识别 TypeScript 语法呢？</p>
</li>
</ul>
<h2 id="解决方案-use-babel" tabindex="-1"><a class="header-anchor" href="#解决方案-use-babel" aria-hidden="true">#</a> 解决方案 &amp;&amp; Use Babel</h2>
<p>Babel 工具链就能帮助我们解决上述问题以及类似的 JS 语法转换的问题。</p>
<p>而 Babel 的使用也十分简单，只要安装一个主包<code v-pre>npm i -D @babel/core</code>，然后根据自己实际的需求安装对应的辅助包，babel 辅助包的类型有以下两个：</p>
<ul>
<li>1.plugins 类型: 每一个 plugin 包对应着一个功能，解决某个特定的问题。</li>
<li>2.presets 类型: 一个 preset 包相当于多个 plugin 的集合，解决某一类问题。</li>
</ul>
<p>知道这些之后，再将我们用到的配置选项(Babel Options)，放到一个名为<code v-pre>.babelrc.js</code>的文件中，即可。测试代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .babelrc.js</span>

<span class="token punctuation">{</span>
    <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span> <span class="token comment">// npm i -S @babel/preset-env，支持最新的ECMAScript语法</span>
        <span class="token string">"@babel/preset-react"</span><span class="token punctuation">,</span> <span class="token comment">// 支持react.js框架</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
