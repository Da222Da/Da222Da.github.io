<template><div><h1 id="npminstall-调研报告" tabindex="-1"><a class="header-anchor" href="#npminstall-调研报告" aria-hidden="true">#</a> npminstall 调研报告</h1>
<div class="custom-container tip"><p class="custom-container-title">npminstall 给我们带来了什么？</p>
<p>使用 npminstall 能让我们以 js 代码的方式来安装 npm 包</p>
</div>
<h2 id="npminstall-测试用例" tabindex="-1"><a class="header-anchor" href="#npminstall-测试用例" aria-hidden="true">#</a> npminstall 测试用例</h2>
<h3 id="_1-需求" tabindex="-1"><a class="header-anchor" href="#_1-需求" aria-hidden="true">#</a> 1.需求：</h3>
<ul>
<li>执行 index.js 文件，安装 vue@2</li>
<li>将 vue@2 安装到指定目录<code v-pre>path.resolve(homedir(), &quot;.zhangxianjie-cli-dev&quot;, &quot;node_modules&quot;)</code></li>
</ul>
<h3 id="_2-代码如下" tabindex="-1"><a class="header-anchor" href="#_2-代码如下" aria-hidden="true">#</a> 2.代码如下：</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> npminstall <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"npminstall"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> homedir <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"os"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">npminstall</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// root：指定根目录</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">homedir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">".zhangxianjue-cli-dev"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// storeDir: 使用npminstall安装npm包的实际存储路径</span>
    <span class="token literal-property property">storeDir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">homedir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">".zhangxianjue-cli-dev"</span><span class="token punctuation">,</span> <span class="token string">"node_modules"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// pkgs: 配置需要下载的npm包信息, default is package.json's dependencies and devDependencies</span>
    <span class="token literal-property property">pkgs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">"~2.0.0"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// registry, 指定npm包的下载源，默认 https://registry.npmjs.org</span>
    <span class="token literal-property property">registry</span><span class="token operator">:</span> <span class="token string">"https://registry.npmjs.org"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
