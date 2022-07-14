<template><div><h1 id="npm-package-commander-调研报告" tabindex="-1"><a class="header-anchor" href="#npm-package-commander-调研报告" aria-hidden="true">#</a> NPM Package Commander 调研报告</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>1.Target：调研目标</code> <br></p>
<ul>
<li>熟悉 Commander 的使用</li>
</ul>
<p><code v-pre>2.Title：调研目录</code></p>
<nav class="table-of-contents"><ul><li><router-link to="#一、快速上手">一、快速上手</router-link><ul><li><router-link to="#_1-commander-the-complete-solution-for-node-js-command-line-interfaces">1. Commander: The complete solution for node.js command-line interfaces.</router-link></li><li><router-link to="#_3-program-name-修改帮助信息中程序名称">3. program.name()修改帮助信息中程序名称</router-link></li><li><router-link to="#_4-program-usage-自定义帮助信息里面的使用描述信息">4. program.usage()自定义帮助信息里面的使用描述信息</router-link></li><li><router-link to="#_5-自定义-version-选项的两种方式">5. 自定义 version 选项的两种方式</router-link></li><li><router-link to="#_6-program-opts-能够拿到-program-parse-arguments-解析后的-options-参数">6. program.opts() 能够拿到 program.parse(arguments)解析后的 options 参数</router-link></li><li><router-link to="#_7-program-outputhelp-使用代码的形式展示帮助信息-不退出程序。">7. program.outputHelp() 使用代码的形式展示帮助信息，不退出程序。</router-link></li><li><router-link to="#_8-program-showhelpaftererror-在出错后展示帮助信息">8. program.showHelpAfterError() 在出错后展示帮助信息</router-link></li><li><router-link to="#_9-如何利用-program-args-的特性-监听未知命令">9. 如何利用 program.args 的特性，监听未知命令？</router-link></li><li><router-link to="#_10-命令处理函数-action-的参数含义是什么-以及它该怎么用">10. 命令处理函数 action()的参数含义是什么？以及它该怎么用？</router-link></li></ul></li><li><router-link to="#附录-a">附录 A:</router-link><ul><li><router-link to="#commander-官方文档">commander 官方文档</router-link></li></ul></li></ul></nav>
</div>
<h2 id="一、快速上手" tabindex="-1"><a class="header-anchor" href="#一、快速上手" aria-hidden="true">#</a> 一、快速上手</h2>
<h3 id="_1-commander-the-complete-solution-for-node-js-command-line-interfaces" tabindex="-1"><a class="header-anchor" href="#_1-commander-the-complete-solution-for-node-js-command-line-interfaces" aria-hidden="true">#</a> 1. Commander: The complete solution for node.js command-line interfaces.</h3>
<h3 id="_3-program-name-修改帮助信息中程序名称" tabindex="-1"><a class="header-anchor" href="#_3-program-name-修改帮助信息中程序名称" aria-hidden="true">#</a> 3. program.name()修改帮助信息中程序名称</h3>
<ul>
<li><code v-pre>program.name()</code>，程序名称，即主命令名称。默认值是 index。</li>
<li>参数用例，<code v-pre>例如，program.name(Object.keys(pkg.bin)[0])</code></li>
</ul>
<h3 id="_4-program-usage-自定义帮助信息里面的使用描述信息" tabindex="-1"><a class="header-anchor" href="#_4-program-usage-自定义帮助信息里面的使用描述信息" aria-hidden="true">#</a> 4. program.usage()自定义帮助信息里面的使用描述信息</h3>
<ul>
<li>参数用例，<code v-pre>例如，program.usage('[option] [command]')</code></li>
</ul>
<h3 id="_5-自定义-version-选项的两种方式" tabindex="-1"><a class="header-anchor" href="#_5-自定义-version-选项的两种方式" aria-hidden="true">#</a> 5. 自定义 version 选项的两种方式</h3>
<ul>
<li>1.方式 1：version api<code v-pre>例如，program.version(pkg.version)</code></li>
<li>2.方式 2：option api</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>program
  <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>pkg<span class="token punctuation">.</span>bin<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">usage</span><span class="token punctuation">(</span><span class="token string">"[options] [command]"</span><span class="token punctuation">)</span>
  <span class="token comment">// true 是 [version] 参数的默认值</span>
  <span class="token comment">// [] 表示可选 || &lt;> 表示必传</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">"-v, --version [version]"</span><span class="token punctuation">,</span> <span class="token string">"output the version number"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"option:version"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  program<span class="token punctuation">.</span><span class="token function">opts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>version <span class="token operator">?</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pkg<span class="token punctuation">.</span>version<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-program-opts-能够拿到-program-parse-arguments-解析后的-options-参数" tabindex="-1"><a class="header-anchor" href="#_6-program-opts-能够拿到-program-parse-arguments-解析后的-options-参数" aria-hidden="true">#</a> 6. program.opts() 能够拿到 program.parse(arguments)解析后的 options 参数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"commander"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">"-d, --debug"</span><span class="token punctuation">,</span> <span class="token string">"output extra debugging"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">"-s, --small"</span><span class="token punctuation">,</span> <span class="token string">"small pizza size"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">"-p, --pizza-type &lt;type>"</span><span class="token punctuation">,</span> <span class="token string">"flavour of pizza"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> program<span class="token punctuation">.</span><span class="token function">opts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cli-name -d -s -> { debug: true, small: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-program-outputhelp-使用代码的形式展示帮助信息-不退出程序。" tabindex="-1"><a class="header-anchor" href="#_7-program-outputhelp-使用代码的形式展示帮助信息-不退出程序。" aria-hidden="true">#</a> 7. program.outputHelp() 使用代码的形式展示帮助信息，不退出程序。</h3>
<h3 id="_8-program-showhelpaftererror-在出错后展示帮助信息" tabindex="-1"><a class="header-anchor" href="#_8-program-showhelpaftererror-在出错后展示帮助信息" aria-hidden="true">#</a> 8. program.showHelpAfterError() 在出错后展示帮助信息</h3>
<ul>
<li>参数用例：
<ul>
<li>
<ol>
<li><code v-pre>program.showHelpAfterError()</code> 展示完整的帮助信息</li>
</ol>
</li>
<li>
<ol start="2">
<li><code v-pre>program.showHelpAfterError('(add --help for additional information)')</code> 自定义帮助信息</li>
</ol>
</li>
</ul>
</li>
</ul>
<h3 id="_9-如何利用-program-args-的特性-监听未知命令" tabindex="-1"><a class="header-anchor" href="#_9-如何利用-program-args-的特性-监听未知命令" aria-hidden="true">#</a> 9. 如何利用 program.args 的特性，监听未知命令？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"commander"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"command:*"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过program.parse(arguments)方法处理参数，没有被使用的选项会存放在program.args数组中。</span>
  <span class="token comment">// 这里的obj === program.args</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"出现未知命令:"</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> availableCommands <span class="token operator">=</span> program<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>availableCommands<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"可用命令有："</span><span class="token punctuation">,</span> availableCommands<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-命令处理函数-action-的参数含义是什么-以及它该怎么用" tabindex="-1"><a class="header-anchor" href="#_10-命令处理函数-action-的参数含义是什么-以及它该怎么用" aria-hidden="true">#</a> 10. 命令处理函数 action()的参数含义是什么？以及它该怎么用？</h3>
<ul>
<li>
<p>1.命令处理函数的参数，为该命令声明的所有参数，除此之外还会附加两个额外参数：一个是解析出的选项，另一个则是该命令对象自身。</p>
</li>
<li>
<p>2.测试用例</p>
<ul>
<li>2-1：在全局命令上使用处理函数<code v-pre>program.action()</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#! /usr/bin/env node</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"commander"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">"commander-cli"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">"1.0.0"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">usage</span><span class="token punctuation">(</span><span class="token string">"[option] [command]"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">"-d, --debug [name]"</span><span class="token punctuation">,</span> <span class="token string">"debug model"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option<span class="token punctuation">,</span> command</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> command<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// commander-cli -d -> { debug: 'true' } commander-cli</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2-2：在普通命令上使用处理函数<code v-pre>program.command().action()</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#! /usr/bin/env node</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"commander"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">"commander-cli"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">"init"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">argument</span><span class="token punctuation">(</span><span class="token string">"&lt;name>"</span><span class="token punctuation">,</span> <span class="token string">"初始化项目的名称，必传"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">argument</span><span class="token punctuation">(</span><span class="token string">"[loc]"</span><span class="token punctuation">,</span> <span class="token string">"自定义初始化路径"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">"-f, --force"</span><span class="token punctuation">,</span> <span class="token string">"强制执行init"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> loc<span class="token punctuation">,</span> options<span class="token punctuation">,</span> command</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> command<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// commander-cli init project-name -f -> project-name { force: true } init</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="附录-a" tabindex="-1"><a class="header-anchor" href="#附录-a" aria-hidden="true">#</a> 附录 A:</h2>
<h3 id="commander-官方文档" tabindex="-1"><a class="header-anchor" href="#commander-官方文档" aria-hidden="true">#</a> <a href="https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md" target="_blank" rel="noopener noreferrer">commander 官方文档<ExternalLinkIcon/></a></h3>
</div></template>
