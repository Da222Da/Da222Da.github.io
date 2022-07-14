<template><div><h1 id="eslint-调查报告" tabindex="-1"><a class="header-anchor" href="#eslint-调查报告" aria-hidden="true">#</a> ESLint 调查报告</h1>
<div class="custom-container tip"><p class="custom-container-title">ESlint 一款插件化的 JavaScript 代码检查工具</p>
<nav class="table-of-contents"><ul><li><router-link to="#整体思维模式认识-eslint">#整体思维模式认识 ESLint</router-link><ul><li><router-link to="#_1-eslint-能给我们的-javascript-代码带来什么好处">1.ESLint 能给我们的 JavaScript 代码带来什么好处？</router-link></li><li><router-link to="#_2-eslint-快速上手">2.ESlint 快速上手</router-link></li></ul></li><li><router-link to="#专精思维模式练习-eslint">#专精思维模式练习 ESLint</router-link><ul><li><router-link to="#_1-已经使用了-eslint-的情况下-我们应不应该使用-prettier-呢">1.已经使用了 ESLint 的情况下，我们应不应该使用 Prettier 呢？</router-link></li></ul></li></ul></nav>
<p><a href="https://eslint.bootcss.com/" target="_blank" rel="noopener noreferrer">ESlint 官网<ExternalLinkIcon/></a></p>
</div>
<h2 id="整体思维模式认识-eslint" tabindex="-1"><a class="header-anchor" href="#整体思维模式认识-eslint" aria-hidden="true">#</a> #整体思维模式认识 ESLint</h2>
<h3 id="_1-eslint-能给我们的-javascript-代码带来什么好处" tabindex="-1"><a class="header-anchor" href="#_1-eslint-能给我们的-javascript-代码带来什么好处" aria-hidden="true">#</a> 1.ESLint 能给我们的 JavaScript 代码带来什么好处？</h3>
<ul>
<li>对于个人而言：代码检查可以减少 JS 代码 bug，保证代码质量。</li>
<li>对于团队而言：代码检查可以统一 JS 代码风格，提升多人协同开发的工作效能。</li>
</ul>
<h3 id="_2-eslint-快速上手" tabindex="-1"><a class="header-anchor" href="#_2-eslint-快速上手" aria-hidden="true">#</a> 2.ESlint 快速上手</h3>
<p>首先，我们得初始化源文件 package.json<code v-pre>npm init -y</code>，然后安装 ESLint 包<code v-pre>npm i eslint -D</code>。</p>
<p>之后，我们便可以使用 ESLint 提供的指令<code v-pre>./node_modules/.bin/eslint --init</code>，初始化配置文件<code v-pre>.eslintrc.js</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .eslint.js 配置文件详情</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 表示当前目录即为根目录（ESlint的检查规则只对该目录下的JS文件有效）</span>
  <span class="token comment">// Environments，指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// globals，脚本在执行期间访问的额外的全局变量。</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token string">"readonly"</span><span class="token punctuation">,</span> <span class="token comment">// writable 可写 || readonly 可读</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 直接使用别人的检查配置规则`例如，extends: "eslint:recommended"`</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// parserOptions 指定想要支持的 JavaScript 语言选项</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span> <span class="token comment">// ecmaVersion 你想使用的 ECMAScript 版本</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span> <span class="token comment">// 设置 JavaScript 文件模块类型`script(默认) | module`</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 拓展 ESLint 没有的规则，从而支持一些特定的语法`例如，React、Vue`</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 启用的规则及其各自的错误级别</span>
    <span class="token comment">// off | 0 关闭规则</span>
    <span class="token comment">// warn | 1 开启规则，使用警告级别的检测，但不会终止程序。</span>
    <span class="token comment">// error | 2 开启规则，使用错误级别的检测，一旦触发，终止程序。</span>
    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"single"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"never"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完<code v-pre>.eslintrc.js</code>之后，便能运行 ESLint 来检查我们的代码<code v-pre>例如，./node_modules/.bin/eslint ./src/index.js</code>。</p>
<p>但是，每一次都需要我们手动去运行 ESlint，才能检查我们的代码，未免太麻烦了。</p>
<p>如何在 VSCode 编辑器中自动运行 ESLint 呢？需要我们先安装 VSCode ESlint 插件，并配置 VSCode settings.json 文件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// settings.json</span>

<span class="token punctuation">{</span>
    <span class="token comment">// eslint.probe 规定 ESlint 插件需要校验的语言类型,</span>
    <span class="token comment">// 配置eslint.probe之后，ESlint才能以高亮的实现显示错误语法 &amp;&amp; 在终端输出错误信息</span>
    <span class="token string-property property">"eslint.probe"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"javascript"</span><span class="token punctuation">,</span>
        <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>
        <span class="token string">"typescript"</span><span class="token punctuation">,</span>
        <span class="token string">"typescriptreact"</span><span class="token punctuation">,</span>
        <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// eslint 保存文件时自动修复bug</span>
    <span class="token string-property property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="专精思维模式练习-eslint" tabindex="-1"><a class="header-anchor" href="#专精思维模式练习-eslint" aria-hidden="true">#</a> #专精思维模式练习 ESLint</h2>
<h3 id="_1-已经使用了-eslint-的情况下-我们应不应该使用-prettier-呢" tabindex="-1"><a class="header-anchor" href="#_1-已经使用了-eslint-的情况下-我们应不应该使用-prettier-呢" aria-hidden="true">#</a> 1.已经使用了 ESLint 的情况下，我们应不应该使用 Prettier 呢？</h3>
<ul>
<li>eslint 注重代码质量
<ul>
<li>例如，let a = 1; 当你只声明，但未使用变量 a 时，从而导致代码后期可能报错。ESLint 就会警告了。</li>
</ul>
</li>
<li>prettier 注重代码风格 <code v-pre>prettier关注的是如何让代码更好看</code>
<ul>
<li>例如，一行多少个字符啊！加不加分号啊！诸如此类的问题？</li>
<li>pretter 还有强大的--fix 能力，帮助我们自动格式化。</li>
</ul>
</li>
</ul>
<p>其实，eslint 也能设置代码风格相关的规则，也有--fix 自动格式化能力，只是没有 prettier 那么强大。</p>
<p>如果你十分注重代码风格的话？可以使用 ESLint prettier 相关插件，帮我们做以下两个事</p>
<ul>
<li>第一件事：禁用掉所有与 Prettier 发生冲突的 ESLint 代码格式化规则。</li>
<li>第二件事：将 Prettier 的所有规则导入 ESLint 当中。</li>
</ul>
<p>如此，我们能使用 ESLint 强大的代码质量检测能力，又能享用 prettier 强大的代码风格格式化功能。</p>
<p>不过，配置 prettier 之后，会让 eslint 配置复杂度会变大，如何取舍？全凭个人需求。</p>
</div></template>
