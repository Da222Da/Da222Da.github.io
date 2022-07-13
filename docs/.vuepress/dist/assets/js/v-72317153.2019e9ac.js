"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[44],{3965:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-72317153",path:"/pages/338990/",title:"file",lang:"en-US",frontmatter:{title:"file",date:"2022-06-27T10:27:07.000Z",permalink:"/pages/338990/",categories:["technology","browser","data"],tags:[null]},excerpt:"",headers:[{level:2,title:"Overall",slug:"overall",children:[{level:3,title:"01.Web 应用程序操作文件的方式",slug:"_01-web-应用程序操作文件的方式",children:[]},{level:3,title:"02.File API",slug:"_02-file-api",children:[]},{level:3,title:"03.为什么会有 Blob 数据类型？",slug:"_03-为什么会有-blob-数据类型",children:[]}]},{level:2,title:"Use",slug:"use",children:[{level:3,title:"01. 使用 input 元素选取文件时，那些文件信息会被绑定到 input 元素之上？",slug:"_01-使用-input-元素选取文件时-那些文件信息会被绑定到-input-元素之上",children:[]},{level:3,title:"02. 上传一张名为 image.png 的图片时，input.value = ?",slug:"_02-上传一张名为-image-png-的图片时-input-value",children:[]},{level:3,title:"03. (例子)如何从文件系统中读取图片数据，并在网页向用户展示？",slug:"_03-例子-如何从文件系统中读取图片数据-并在网页向用户展示",children:[]},{level:3,title:"04.如何声明一个 Blob 对象？",slug:"_04-如何声明一个-blob-对象",children:[]},{level:3,title:"05.(例子) 截取纯文本内容的前 20 个字节, 并打印？",slug:"_05-例子-截取纯文本内容的前-20-个字节-并打印",children:[]}]}],filePathRelative:"technology/browser/data/file.md",git:{updatedTime:1656670125e3,contributors:[{name:"yunchao.mei",email:"",commits:2}]}}},6465:(n,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(6252);const p=(0,t._)("h1",{id:"file-文件对象",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#file-文件对象","aria-hidden":"true"},"#"),(0,t.Uk)(" File 文件对象")],-1),e={class:"custom-container tip"},l=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),o={class:"table-of-contents"},c=(0,t.Uk)("Overall"),u=(0,t.Uk)("01.Web 应用程序操作文件的方式"),i=(0,t.Uk)("02.File API"),r=(0,t.Uk)("03.为什么会有 Blob 数据类型？"),k=(0,t.Uk)("Use"),b=(0,t.Uk)("01. 使用 input 元素选取文件时，那些文件信息会被绑定到 input 元素之上？"),d=(0,t.Uk)("02. 上传一张名为 image.png 的图片时，input.value = ?"),m=(0,t.Uk)("03. (例子)如何从文件系统中读取图片数据，并在网页向用户展示？"),g=(0,t.Uk)("04.如何声明一个 Blob 对象？"),f=(0,t.Uk)("05.(例子) 截取纯文本内容的前 20 个字节, 并打印？"),h=(0,t.uE)('<h2 id="overall" tabindex="-1"><a class="header-anchor" href="#overall" aria-hidden="true">#</a> Overall</h2><h3 id="_01-web-应用程序操作文件的方式" tabindex="-1"><a class="header-anchor" href="#_01-web-应用程序操作文件的方式" aria-hidden="true">#</a> 01.Web 应用程序操作文件的方式</h3><p>Web 应用程序是无法操作用户计算机上的文件，在 web 中操作文件的方式如下：</p><ul><li>用户手动将文件提交到<code>&lt;input type=&#39;file&#39; /&gt;</code>，然后借助 File API 读取文件信息。</li><li>借助 XMLHttpRequest，从远程服务器上读取数据。</li></ul><h3 id="_02-file-api" tabindex="-1"><a class="header-anchor" href="#_02-file-api" aria-hidden="true">#</a> 02.File API</h3><ul><li><p>FileReader 数据类型<code>一种异步文件读取机制，从文件系统读取文件</code></p><ul><li>FileReader 对象上的异步方法： <ul><li><code>readAsText(file, encoding)</code> 从文件中读取纯文本内容并保存在 result 属性中。</li><li><code>readAsDataURL(file)</code> 读取文件并将内容的数据 URI 保存在 result 属性中。</li><li><code>readAsBinaryString(file)</code>读取文件并将每个字符的二进制数据保存在 result 属性中。</li><li><code>readAsArrayBuffer(file)</code>读取文件并将文件内容以 ArrayBuffer 形式保存在 result 属性。</li></ul></li><li>因为这些读取方法是异步的，所以每个 FileReader 会发布几个事件，最常见的有: <ul><li><code>progress 事件</code>每 50 毫秒就会触发一次，其与 XHR 的 progress 事件具有相同的信息：</li><li><code>error 事件</code>会在由于某种原因无法读取文件时触发。</li><li><code>load 事件</code>会在文件成功加载后触发。</li></ul></li></ul></li><li><p>FileReaderSync 数据类型<code>与FileReader相似，只是读取文件的机制是同步</code></p></li></ul><h3 id="_03-为什么会有-blob-数据类型" tabindex="-1"><a class="header-anchor" href="#_03-为什么会有-blob-数据类型" aria-hidden="true">#</a> 03.为什么会有 Blob 数据类型？</h3><p>某些情况下，可能需要读取部分文件而不是整个文件。为此，File 对象提供了一个名为 slice()的方法。</p><p>slice()方法接收两个参数：起始字节和要读取的字节数。</p><p>这个方法返回一个 Blob 的实例，而 Blob 实际上是 File 的超类。</p><p>blob 表示二进制大对象（binary larget object），是 JavaScript 对不可修改二进制数据的封装类型。</p><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2><h3 id="_01-使用-input-元素选取文件时-那些文件信息会被绑定到-input-元素之上" tabindex="-1"><a class="header-anchor" href="#_01-使用-input-元素选取文件时-那些文件信息会被绑定到-input-元素之上" aria-hidden="true">#</a> 01. 使用 input 元素选取文件时，那些文件信息会被绑定到 input 元素之上？</h3><p>input 元素 =&gt; <code>&lt;input type=&#39;file&#39; /&gt;</code></p><p>当用户选择一个或多个文件时，<code>e.target.files = [] &amp;&amp; e.target.files.push(File对象)</code></p><p>每一个 File 对象都存了一些选中文件的信息，例如<code>文件名name、文件类型type、文件大小size</code></p><p>但是，注意！File 对象是不存在文件数据属性的。</p><details class="custom-container details"><summary>例子</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> filelist <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件名称</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件类型</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件大小</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details><h3 id="_02-上传一张名为-image-png-的图片时-input-value" tabindex="-1"><a class="header-anchor" href="#_02-上传一张名为-image-png-的图片时-input-value" aria-hidden="true">#</a> 02. 上传一张名为 image.png 的图片时，input.value = ?</h3><p>当我们上传一个名为 image.png 的图片时，打印时会发现<code>input.value=&#39;C:\\fakepath\\image.png&#39;</code></p><p>这里的<code>fakepath</code>表示伪路径。</p><h3 id="_03-例子-如何从文件系统中读取图片数据-并在网页向用户展示" tabindex="-1"><a class="header-anchor" href="#_03-例子-如何从文件系统中读取图片数据-并在网页向用户展示" aria-hidden="true">#</a> 03. (例子)如何从文件系统中读取图片数据，并在网页向用户展示？</h3><details class="custom-container details"><summary>源码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> filelist <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> filetype <span class="token punctuation">}</span> <span class="token operator">=</span> filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">image</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>filetype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      fileReader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 文件读取完成</span>\n    fileReader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      image<span class="token punctuation">.</span>src <span class="token operator">=</span> fileReader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>\n      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 文件读取失败</span>\n    fileReader<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;文件读取失败了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></details><h3 id="_04-如何声明一个-blob-对象" tabindex="-1"><a class="header-anchor" href="#_04-如何声明一个-blob-对象" aria-hidden="true">#</a> 04.如何声明一个 Blob 对象？</h3><details class="custom-container details"><summary>声明 Blob 对象 =&gt; new Blob(array[string], type)</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Blob {size: 3, type: &quot;&quot;}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;{&quot;a&quot;: &quot;b&quot;}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// {size: 10, type: &quot;application/json&quot;}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;&lt;p&gt;Foo&lt;/p&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;p&gt;Bar&lt;/p&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text/html&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// {size: 20, type: &quot;text/html&quot;}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details><h3 id="_05-例子-截取纯文本内容的前-20-个字节-并打印" tabindex="-1"><a class="header-anchor" href="#_05-例子-截取纯文本内容的前-20-个字节-并打印" aria-hidden="true">#</a> 05.(例子) 截取纯文本内容的前 20 个字节, 并打印？</h3><details class="custom-container details"><summary>源码</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>files-list<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> filesList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;files-list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  filesList<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> files <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">,</span>\n      reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 将文件读取到纯文本内容转成Blob对象</span>\n      <span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token comment">// 截取blod对象的前二十个字节</span>\n      <span class="token keyword">let</span> datas <span class="token operator">=</span> blob<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token comment">// 打印最终的结果</span>\n      datas<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details>',27),v={},y=(0,a(3744).Z)(v,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("div",e,[l,(0,t._)("nav",o,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#overall"},{default:(0,t.w5)((()=>[c])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_01-web-应用程序操作文件的方式"},{default:(0,t.w5)((()=>[u])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_02-file-api"},{default:(0,t.w5)((()=>[i])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_03-为什么会有-blob-数据类型"},{default:(0,t.w5)((()=>[r])),_:1})])])]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#use"},{default:(0,t.w5)((()=>[k])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_01-使用-input-元素选取文件时-那些文件信息会被绑定到-input-元素之上"},{default:(0,t.w5)((()=>[b])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_02-上传一张名为-image-png-的图片时-input-value"},{default:(0,t.w5)((()=>[d])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_03-例子-如何从文件系统中读取图片数据-并在网页向用户展示"},{default:(0,t.w5)((()=>[m])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_04-如何声明一个-blob-对象"},{default:(0,t.w5)((()=>[g])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_05-例子-截取纯文本内容的前-20-个字节-并打印"},{default:(0,t.w5)((()=>[f])),_:1})])])])])])]),h],64)}]])}}]);