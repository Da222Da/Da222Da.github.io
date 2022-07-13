<template><h1 id="lerna-调研报告" tabindex="-1"><a class="header-anchor" href="#lerna-调研报告" aria-hidden="true">#</a> Lerna 调研报告</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code>1.Lerna 调研方向：</code> 熟悉 lerna 的使用</p>
<p><code>2.内容目录：</code></p>
<nav class="table-of-contents"><ul><li><RouterLink to="#一、快速上手">一、快速上手</RouterLink><ul><li><RouterLink to="#_1-lerna-is-a-tool-that-managing-multi-package-repositories">1. Lerna is a tool that managing multi-package repositories</RouterLink></li><li><RouterLink to="#_2-lerna-如何在指定目录下创建一个新的-npm-package">2. lerna 如何在指定目录下创建一个新的 npm-package</RouterLink></li></ul></li><li><RouterLink to="#附录-a">附录 A</RouterLink><ul><li><RouterLink to="#_1-lerna-源码">1.lerna 源码</RouterLink></li><li><RouterLink to="#_2-lerna-经典项目之-babel">2.lerna 经典项目之 babel</RouterLink></li><li><RouterLink to="#_3-lerna-经典项目之-vue-cli">3.lerna 经典项目之 vue-cli</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="一、快速上手" tabindex="-1"><a class="header-anchor" href="#一、快速上手" aria-hidden="true">#</a> 一、快速上手</h2>
<h3 id="_1-lerna-is-a-tool-that-managing-multi-package-repositories" tabindex="-1"><a class="header-anchor" href="#_1-lerna-is-a-tool-that-managing-multi-package-repositories" aria-hidden="true">#</a> 1. Lerna is a tool that managing multi-package repositories</h3>
<p>Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.</p>
<p>lerna 是一个优化&quot;multi-package repositories&quot;的管理工具，帮助我们大幅度减少重复性操作、标准化工作流程，从而达到提升开发效能的目的。</p>
<p>注意！lerna 管理的代码仓库必须是基于 git 的、lerna 管理的 package 必须是 npm package。</p>
<h3 id="_2-lerna-如何在指定目录下创建一个新的-npm-package" tabindex="-1"><a class="header-anchor" href="#_2-lerna-如何在指定目录下创建一个新的-npm-package" aria-hidden="true">#</a> 2. lerna 如何在指定目录下创建一个新的 npm-package</h3>
<ul>
<li>
<p>1.语法<code>lerna create &lt;name&gt; [loc]</code>，其中；</p>
<ul>
<li>1-1.<code>参数&lt;name&gt;</code>表示要创建的文件名称</li>
<li>1-2.<code>参数[loc]</code>自定义地址，默认值是<code>lerna.json -&gt; packages[0]</code></li>
</ul>
</li>
<li>
<p>2.参数用例：<code>lerna create @zhangxianjue-cli-dev/init &quot;./commands&quot;</code></p>
</li>
</ul>
<h2 id="附录-a" tabindex="-1"><a class="header-anchor" href="#附录-a" aria-hidden="true">#</a> 附录 A</h2>
<h3 id="_1-lerna-源码" tabindex="-1"><a class="header-anchor" href="#_1-lerna-源码" aria-hidden="true">#</a> 1.<a href="https://github.com/lerna/lerna" target="_blank" rel="noopener noreferrer">lerna 源码<OutboundLink/></a></h3>
<h3 id="_2-lerna-经典项目之-babel" tabindex="-1"><a class="header-anchor" href="#_2-lerna-经典项目之-babel" aria-hidden="true">#</a> 2.<a href="https://github.com/babel/babel" target="_blank" rel="noopener noreferrer">lerna 经典项目之 babel<OutboundLink/></a></h3>
<h3 id="_3-lerna-经典项目之-vue-cli" tabindex="-1"><a class="header-anchor" href="#_3-lerna-经典项目之-vue-cli" aria-hidden="true">#</a> 3.<a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">lerna 经典项目之 vue-cli<OutboundLink/></a></h3>
</template>
