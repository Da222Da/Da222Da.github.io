<template><div><h1 id="file-文件对象" tabindex="-1"><a class="header-anchor" href="#file-文件对象" aria-hidden="true">#</a> File 文件对象</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><router-link to="#overall">Overall</router-link><ul><li><router-link to="#_01-web-应用程序操作文件的方式">01.Web 应用程序操作文件的方式</router-link></li><li><router-link to="#_02-file-api">02.File API</router-link></li><li><router-link to="#_03-为什么会有-blob-数据类型">03.为什么会有 Blob 数据类型？</router-link></li></ul></li><li><router-link to="#use">Use</router-link><ul><li><router-link to="#_01-使用-input-元素选取文件时-那些文件信息会被绑定到-input-元素之上">01. 使用 input 元素选取文件时，那些文件信息会被绑定到 input 元素之上？</router-link></li><li><router-link to="#_02-上传一张名为-image-png-的图片时-input-value">02. 上传一张名为 image.png 的图片时，input.value = ?</router-link></li><li><router-link to="#_03-例子-如何从文件系统中读取图片数据-并在网页向用户展示">03. (例子)如何从文件系统中读取图片数据，并在网页向用户展示？</router-link></li><li><router-link to="#_04-如何声明一个-blob-对象">04.如何声明一个 Blob 对象？</router-link></li><li><router-link to="#_05-例子-截取纯文本内容的前-20-个字节-并打印">05.(例子) 截取纯文本内容的前 20 个字节, 并打印？</router-link></li></ul></li></ul></nav>
</div>
<h2 id="overall" tabindex="-1"><a class="header-anchor" href="#overall" aria-hidden="true">#</a> Overall</h2>
<h3 id="_01-web-应用程序操作文件的方式" tabindex="-1"><a class="header-anchor" href="#_01-web-应用程序操作文件的方式" aria-hidden="true">#</a> 01.Web 应用程序操作文件的方式</h3>
<p>Web 应用程序是无法操作用户计算机上的文件，在 web 中操作文件的方式如下：</p>
<ul>
<li>用户手动将文件提交到<code v-pre>&lt;input type='file' /&gt;</code>，然后借助 File API 读取文件信息。</li>
<li>借助 XMLHttpRequest，从远程服务器上读取数据。</li>
</ul>
<h3 id="_02-file-api" tabindex="-1"><a class="header-anchor" href="#_02-file-api" aria-hidden="true">#</a> 02.File API</h3>
<ul>
<li>
<p>FileReader 数据类型<code v-pre>一种异步文件读取机制，从文件系统读取文件</code></p>
<ul>
<li>FileReader 对象上的异步方法：
<ul>
<li><code v-pre>readAsText(file, encoding)</code> 从文件中读取纯文本内容并保存在 result 属性中。</li>
<li><code v-pre>readAsDataURL(file)</code> 读取文件并将内容的数据 URI 保存在 result 属性中。</li>
<li><code v-pre>readAsBinaryString(file)</code>读取文件并将每个字符的二进制数据保存在 result 属性中。</li>
<li><code v-pre>readAsArrayBuffer(file)</code>读取文件并将文件内容以 ArrayBuffer 形式保存在 result 属性。</li>
</ul>
</li>
<li>因为这些读取方法是异步的，所以每个 FileReader 会发布几个事件，最常见的有:
<ul>
<li><code v-pre>progress 事件</code>每 50 毫秒就会触发一次，其与 XHR 的 progress 事件具有相同的信息：</li>
<li><code v-pre>error 事件</code>会在由于某种原因无法读取文件时触发。</li>
<li><code v-pre>load 事件</code>会在文件成功加载后触发。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>FileReaderSync 数据类型<code v-pre>与FileReader相似，只是读取文件的机制是同步</code></p>
</li>
</ul>
<h3 id="_03-为什么会有-blob-数据类型" tabindex="-1"><a class="header-anchor" href="#_03-为什么会有-blob-数据类型" aria-hidden="true">#</a> 03.为什么会有 Blob 数据类型？</h3>
<p>某些情况下，可能需要读取部分文件而不是整个文件。为此，File 对象提供了一个名为 slice()的方法。</p>
<p>slice()方法接收两个参数：起始字节和要读取的字节数。</p>
<p>这个方法返回一个 Blob 的实例，而 Blob 实际上是 File 的超类。</p>
<p>blob 表示二进制大对象（binary larget object），是 JavaScript 对不可修改二进制数据的封装类型。</p>
<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<h3 id="_01-使用-input-元素选取文件时-那些文件信息会被绑定到-input-元素之上" tabindex="-1"><a class="header-anchor" href="#_01-使用-input-元素选取文件时-那些文件信息会被绑定到-input-元素之上" aria-hidden="true">#</a> 01. 使用 input 元素选取文件时，那些文件信息会被绑定到 input 元素之上？</h3>
<p>input 元素 =&gt; <code v-pre>&lt;input type='file' /&gt;</code></p>
<p>当用户选择一个或多个文件时，<code v-pre>e.target.files = [] &amp;&amp; e.target.files.push(File对象)</code></p>
<p>每一个 File 对象都存了一些选中文件的信息，例如<code v-pre>文件名name、文件类型type、文件大小size</code></p>
<p>但是，注意！File 对象是不存在文件数据属性的。</p>
<details class="custom-container details"><summary>例子</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#file"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filelist <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件名称</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件类型</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件大小</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="_02-上传一张名为-image-png-的图片时-input-value" tabindex="-1"><a class="header-anchor" href="#_02-上传一张名为-image-png-的图片时-input-value" aria-hidden="true">#</a> 02. 上传一张名为 image.png 的图片时，input.value = ?</h3>
<p>当我们上传一个名为 image.png 的图片时，打印时会发现<code v-pre>input.value='C:\fakepath\image.png'</code></p>
<p>这里的<code v-pre>fakepath</code>表示伪路径。</p>
<h3 id="_03-例子-如何从文件系统中读取图片数据-并在网页向用户展示" tabindex="-1"><a class="header-anchor" href="#_03-例子-如何从文件系统中读取图片数据-并在网页向用户展示" aria-hidden="true">#</a> 03. (例子)如何从文件系统中读取图片数据，并在网页向用户展示？</h3>
<details class="custom-container details"><summary>源码</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"file"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"change"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filelist <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> filetype <span class="token punctuation">}</span> <span class="token operator">=</span> filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">image</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>filetype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fileReader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>filelist<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 文件读取完成</span>
    fileReader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      image<span class="token punctuation">.</span>src <span class="token operator">=</span> fileReader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 文件读取失败</span>
    fileReader<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"文件读取失败了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="_04-如何声明一个-blob-对象" tabindex="-1"><a class="header-anchor" href="#_04-如何声明一个-blob-对象" aria-hidden="true">#</a> 04.如何声明一个 Blob 对象？</h3>
<details class="custom-container details"><summary>声明 Blob 对象 => new Blob(array[string], type)</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"foo"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Blob {size: 3, type: ""}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'{"a": "b"}'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"application/json"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {size: 10, type: "application/json"}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"&lt;p>Foo&lt;/p>"</span><span class="token punctuation">,</span> <span class="token string">"&lt;p>Bar&lt;/p>"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"text/html"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {size: 20, type: "text/html"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="_05-例子-截取纯文本内容的前-20-个字节-并打印" tabindex="-1"><a class="header-anchor" href="#_05-例子-截取纯文本内容的前-20-个字节-并打印" aria-hidden="true">#</a> 05.(例子) 截取纯文本内容的前 20 个字节, 并打印？</h3>
<details class="custom-container details"><summary>源码</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>files-list<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> filesList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"files-list"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  filesList<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"change"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> files <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">,</span>
      reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 将文件读取到纯文本内容转成Blob对象</span>
      <span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 截取blod对象的前二十个字节</span>
      <span class="token keyword">let</span> datas <span class="token operator">=</span> blob<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 打印最终的结果</span>
      datas<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>
