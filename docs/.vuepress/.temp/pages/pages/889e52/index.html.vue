<template><h1 id="typescript-调研报告" tabindex="-1"><a class="header-anchor" href="#typescript-调研报告" aria-hidden="true">#</a> Typescript 调研报告</h1>
<div class="custom-container tip"><p class="custom-container-title">typescript 能将 JavaScript 从动态弱类型语言变成动态强类型语言。</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#笔记"># 笔记</RouterLink><ul><li><RouterLink to="#_1-typescript-能帮我们的-javascript-代码代码哪些改变">1.typescript 能帮我们的 JavaScript 代码代码哪些改变？</RouterLink></li><li><RouterLink to="#_2-typescript-为什么要新增数据类型-void">2.typescript 为什么要新增数据类型 void？</RouterLink></li></ul></li><li><RouterLink to="#附录-a-typescript-tree"># 附录 A：TypeScript Tree</RouterLink><ul><li><RouterLink to="#一、tsconfig-json-配置文件">一、tsconfig.json 配置文件</RouterLink></li><li><RouterLink to="#二、类型注解">二、类型注解</RouterLink></li></ul></li><li><RouterLink to="#附录-b-参考链接"># 附录 B：参考链接</RouterLink><ul><li><RouterLink to="#_1-typescript-官网文档">1.TypeScript 官网文档</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记" aria-hidden="true">#</a> # 笔记</h2>
<h3 id="_1-typescript-能帮我们的-javascript-代码代码哪些改变" tabindex="-1"><a class="header-anchor" href="#_1-typescript-能帮我们的-javascript-代码代码哪些改变" aria-hidden="true">#</a> 1.typescript 能帮我们的 JavaScript 代码代码哪些改变？</h3>
<details class="custom-container details"><summary>答：typescript 能将 JavaScript 变成动态强类型语言。</summary>
<ul>
<li>
<p>#众所众知，JavaScript 是一门动态弱类型编程语言，这种设计的好处就是编写代码的时候足够的灵活。</p>
</li>
<li>
<p>#但相较于 C++这种静态强类型语言而言，缺点也很明显：</p>
<ul>
<li>1.JS 是弱类型，不会强制程序员预设数据类型，从而，导致了代码中可能存在大量潜在 Bug</li>
<li>2.JS 是动态类型，所以 JS 代码在执行阶段才去确定变量的数据类型，无疑会增加 JS 引擎的工作量，降低执行性能。</li>
</ul>
</li>
<li>
<p>#所以，我们可以使用 typescript 帮助我们做以下事情： - 1.TS 给我们提供了一套数据类型系统，让我们在编码时，能够预设数据类型，更清晰地描述和约束变量值，减少潜在 Bug，写出更健壮的代码。</p>
</li>
</ul>
</details>
<h3 id="_2-typescript-为什么要新增数据类型-void" tabindex="-1"><a class="header-anchor" href="#_2-typescript-为什么要新增数据类型-void" aria-hidden="true">#</a> 2.typescript 为什么要新增数据类型 void？</h3>
<details class="custom-container details"><summary>答：void 数据类型为了描述返回值为 undefined 的函数</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num1</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">num2</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// JavaScript函数默认返回undefined</span>
  <span class="token comment">// return undefined</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<h2 id="附录-a-typescript-tree" tabindex="-1"><a class="header-anchor" href="#附录-a-typescript-tree" aria-hidden="true">#</a> # 附录 A：TypeScript Tree</h2>
<h3 id="一、tsconfig-json-配置文件" tabindex="-1"><a class="header-anchor" href="#一、tsconfig-json-配置文件" aria-hidden="true">#</a> 一、tsconfig.json 配置文件</h3>
<ul>
<li>
<ol>
<li><code>tsc --init</code> 初始化 tsconfig.json</li>
</ol>
</li>
</ul>
<h3 id="二、类型注解" tabindex="-1"><a class="header-anchor" href="#二、类型注解" aria-hidden="true">#</a> 二、类型注解</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> 1.类型声明语法<span class="token code-snippet code keyword">`(变量/函数): type`</span>
<span class="token list punctuation">-</span> 2.类型分类：
  <span class="token list punctuation">-</span> 2-1.描述不可改变的原始值：boolean | string | number | undefined | null | symbol
  <span class="token list punctuation">-</span> 2-2.描述数组值：
    <span class="token list punctuation">-</span> 2-2-1.单一类型 <span class="token code-snippet code keyword">`例如,let arr:number[] = [1, 2]`</span>
    <span class="token list punctuation">-</span> 2-2-2.泛型 api <span class="token code-snippet code keyword">`例如,let arr:Array&lt;number | string> = [1, 2, '3']`</span>
    <span class="token list punctuation">-</span> 2-2-2.元组 <span class="token code-snippet code keyword">`例如,let arr: [number, string] = [1, '2']`</span>
  <span class="token list punctuation">-</span> 2-3.描述函数表示式
    <span class="token list punctuation">-</span> 2-3-1. 普通函数<span class="token code-snippet code keyword">`例如，function func(x:number, y:number):number { return x + y }`</span>
    <span class="token list punctuation">-</span> 2-3-2. void 没有返回值的函数
    <span class="token list punctuation">-</span> 2-3-3. nerve 永远不可能有返回值的函数<span class="token code-snippet code keyword">`例如，let error = () => { throw new Error('error') } || let endless = () => { while(true) {} }`</span>
  <span class="token list punctuation">-</span> 2-4.描述对象值 <span class="token code-snippet code keyword">`例如，let obj: {x: number, y: number} = { x: 1, y: 2}`</span>
  <span class="token list punctuation">-</span> 2-5.any 任意类型
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="附录-b-参考链接" tabindex="-1"><a class="header-anchor" href="#附录-b-参考链接" aria-hidden="true">#</a> # 附录 B：参考链接</h2>
<h3 id="_1-typescript-官网文档" tabindex="-1"><a class="header-anchor" href="#_1-typescript-官网文档" aria-hidden="true">#</a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">1.TypeScript 官网文档<OutboundLink/></a></h3>
</template>
