"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[310],{8416:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-f94a447c",path:"/pages/889e52/",title:"README",lang:"en-US",frontmatter:{title:"README",date:"2022-06-06T09:09:08.000Z",permalink:"/pages/889e52/",categories:["packages","npm","typescript"],tags:[null]},excerpt:"",headers:[{level:2,title:"# 笔记",slug:"笔记",children:[{level:3,title:"1.typescript 能帮我们的 JavaScript 代码代码哪些改变？",slug:"_1-typescript-能帮我们的-javascript-代码代码哪些改变",children:[]},{level:3,title:"2.typescript 为什么要新增数据类型 void？",slug:"_2-typescript-为什么要新增数据类型-void",children:[]}]},{level:2,title:"# 附录 A：TypeScript Tree",slug:"附录-a-typescript-tree",children:[{level:3,title:"一、tsconfig.json 配置文件",slug:"一、tsconfig-json-配置文件",children:[]},{level:3,title:"二、类型注解",slug:"二、类型注解",children:[]}]},{level:2,title:"# 附录 B：参考链接",slug:"附录-b-参考链接",children:[{level:3,title:"1.TypeScript 官网文档",slug:"_1-typescript-官网文档",children:[]}]}],filePathRelative:"packages/@npm/typescript/README.md",git:{updatedTime:1657677456e3,contributors:[{name:"yunchao.mei",email:"",commits:1}]}}},2848:(n,s,a)=>{a.r(s),a.d(s,{default:()=>S});var e=a(6252);const t=(0,e._)("h1",{id:"typescript-调研报告",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#typescript-调研报告","aria-hidden":"true"},"#"),(0,e.Uk)(" Typescript 调研报告")],-1),p={class:"custom-container tip"},l=(0,e._)("p",{class:"custom-container-title"},"typescript 能将 JavaScript 从动态弱类型语言变成动态强类型语言。",-1),i={class:"table-of-contents"},r=(0,e.Uk)("# 笔记"),c=(0,e.Uk)("1.typescript 能帮我们的 JavaScript 代码代码哪些改变？"),o=(0,e.Uk)("2.typescript 为什么要新增数据类型 void？"),u=(0,e.Uk)("# 附录 A：TypeScript Tree"),d=(0,e.Uk)("一、tsconfig.json 配置文件"),m=(0,e.Uk)("二、类型注解"),k=(0,e.Uk)("# 附录 B：参考链接"),b=(0,e.Uk)("1.TypeScript 官网文档"),h=(0,e.uE)('<h2 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记" aria-hidden="true">#</a> # 笔记</h2><h3 id="_1-typescript-能帮我们的-javascript-代码代码哪些改变" tabindex="-1"><a class="header-anchor" href="#_1-typescript-能帮我们的-javascript-代码代码哪些改变" aria-hidden="true">#</a> 1.typescript 能帮我们的 JavaScript 代码代码哪些改变？</h3><details class="custom-container details"><summary>答：typescript 能将 JavaScript 变成动态强类型语言。</summary><ul><li><p>#众所众知，JavaScript 是一门动态弱类型编程语言，这种设计的好处就是编写代码的时候足够的灵活。</p></li><li><p>#但相较于 C++这种静态强类型语言而言，缺点也很明显：</p><ul><li>1.JS 是弱类型，不会强制程序员预设数据类型，从而，导致了代码中可能存在大量潜在 Bug</li><li>2.JS 是动态类型，所以 JS 代码在执行阶段才去确定变量的数据类型，无疑会增加 JS 引擎的工作量，降低执行性能。</li></ul></li><li><p>#所以，我们可以使用 typescript 帮助我们做以下事情： - 1.TS 给我们提供了一套数据类型系统，让我们在编码时，能够预设数据类型，更清晰地描述和约束变量值，减少潜在 Bug，写出更健壮的代码。</p></li></ul></details><h3 id="_2-typescript-为什么要新增数据类型-void" tabindex="-1"><a class="header-anchor" href="#_2-typescript-为什么要新增数据类型-void" aria-hidden="true">#</a> 2.typescript 为什么要新增数据类型 void？</h3><details class="custom-container details"><summary>答：void 数据类型为了描述返回值为 undefined 的函数</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num1</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">num2</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// JavaScript函数默认返回undefined</span>\n  <span class="token comment">// return undefined</span>\n<span class="token punctuation">}</span>\n<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details><h2 id="附录-a-typescript-tree" tabindex="-1"><a class="header-anchor" href="#附录-a-typescript-tree" aria-hidden="true">#</a> # 附录 A：TypeScript Tree</h2><h3 id="一、tsconfig-json-配置文件" tabindex="-1"><a class="header-anchor" href="#一、tsconfig-json-配置文件" aria-hidden="true">#</a> 一、tsconfig.json 配置文件</h3><ul><li><ol><li><code>tsc --init</code> 初始化 tsconfig.json</li></ol></li></ul><h3 id="二、类型注解" tabindex="-1"><a class="header-anchor" href="#二、类型注解" aria-hidden="true">#</a> 二、类型注解</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 1.类型声明语法<span class="token code-snippet code keyword">`(变量/函数): type`</span>\n<span class="token list punctuation">-</span> 2.类型分类：\n  <span class="token list punctuation">-</span> 2-1.描述不可改变的原始值：boolean | string | number | undefined | null | symbol\n  <span class="token list punctuation">-</span> 2-2.描述数组值：\n    <span class="token list punctuation">-</span> 2-2-1.单一类型 <span class="token code-snippet code keyword">`例如,let arr:number[] = [1, 2]`</span>\n    <span class="token list punctuation">-</span> 2-2-2.泛型 api <span class="token code-snippet code keyword">`例如,let arr:Array&lt;number | string&gt; = [1, 2, &#39;3&#39;]`</span>\n    <span class="token list punctuation">-</span> 2-2-2.元组 <span class="token code-snippet code keyword">`例如,let arr: [number, string] = [1, &#39;2&#39;]`</span>\n  <span class="token list punctuation">-</span> 2-3.描述函数表示式\n    <span class="token list punctuation">-</span> 2-3-1. 普通函数<span class="token code-snippet code keyword">`例如，function func(x:number, y:number):number { return x + y }`</span>\n    <span class="token list punctuation">-</span> 2-3-2. void 没有返回值的函数\n    <span class="token list punctuation">-</span> 2-3-3. nerve 永远不可能有返回值的函数<span class="token code-snippet code keyword">`例如，let error = () =&gt; { throw new Error(&#39;error&#39;) } || let endless = () =&gt; { while(true) {} }`</span>\n  <span class="token list punctuation">-</span> 2-4.描述对象值 <span class="token code-snippet code keyword">`例如，let obj: {x: number, y: number} = { x: 1, y: 2}`</span>\n  <span class="token list punctuation">-</span> 2-5.any 任意类型\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="附录-b-参考链接" tabindex="-1"><a class="header-anchor" href="#附录-b-参考链接" aria-hidden="true">#</a> # 附录 B：参考链接</h2>',11),y={id:"_1-typescript-官网文档",tabindex:"-1"},f=(0,e._)("a",{class:"header-anchor",href:"#_1-typescript-官网文档","aria-hidden":"true"},"#",-1),g=(0,e.Uk)(),v={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("1.TypeScript 官网文档"),w={},S=(0,a(3744).Z)(w,[["render",function(n,s){const a=(0,e.up)("RouterLink"),w=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("div",p,[l,(0,e._)("nav",i,[(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(a,{to:"#笔记"},{default:(0,e.w5)((()=>[r])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(a,{to:"#_1-typescript-能帮我们的-javascript-代码代码哪些改变"},{default:(0,e.w5)((()=>[c])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#_2-typescript-为什么要新增数据类型-void"},{default:(0,e.w5)((()=>[o])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#附录-a-typescript-tree"},{default:(0,e.w5)((()=>[u])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(a,{to:"#一、tsconfig-json-配置文件"},{default:(0,e.w5)((()=>[d])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#二、类型注解"},{default:(0,e.w5)((()=>[m])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#附录-b-参考链接"},{default:(0,e.w5)((()=>[k])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(a,{to:"#_1-typescript-官网文档"},{default:(0,e.w5)((()=>[b])),_:1})])])])])])]),h,(0,e._)("h3",y,[f,g,(0,e._)("a",v,[_,(0,e.Wm)(w)])])],64)}]])}}]);