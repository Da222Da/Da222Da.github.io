<template><h1 id="image-图片对象" tabindex="-1"><a class="header-anchor" href="#image-图片对象" aria-hidden="true">#</a> Image 图片对象</h1>
<p>Image()函数将会创建一个新的 HTMLImageElement 实例。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等价于 let img = document.createElement("img")</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"logo.png"</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
