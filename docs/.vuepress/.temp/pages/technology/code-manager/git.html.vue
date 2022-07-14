<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><router-link to="#overall">Overall</router-link></li><li><router-link to="#use">Use</router-link><ul><li><router-link to="#_01-当我们安装-git-时-如何检测是否已经安装成功了呢">01.当我们安装 Git 时，如何检测是否已经安装成功了呢？</router-link></li><li><router-link to="#_02-git-配置文件作用域选项-local、global-以及-system-三者的区别">02.Git 配置文件作用域选项 local、global 以及 system 三者的区别？</router-link></li></ul></li></ul></nav>
</div>
<h2 id="overall" tabindex="-1"><a class="header-anchor" href="#overall" aria-hidden="true">#</a> Overall</h2>
<p>Git 分布式、开源、文件版本管理工具。</p>
<p><a href="https://backlog.com/git-tutorial/cn/contents/" target="_blank" rel="noopener noreferrer">Git 练习网站<ExternalLinkIcon/></a></p>
<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<h3 id="_01-当我们安装-git-时-如何检测是否已经安装成功了呢" tabindex="-1"><a class="header-anchor" href="#_01-当我们安装-git-时-如何检测是否已经安装成功了呢" aria-hidden="true">#</a> 01.当我们安装 Git 时，如何检测是否已经安装成功了呢？</h3>
<p>答：当我们想要安装 Git 时，可直接前往官网<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">https://git-scm.com/<ExternalLinkIcon/></a>, 找到适合自己电脑操作系统的安装方式。
随后，便可以使用<code v-pre>git --version</code>指令检测 Git 是否安装成功了。</p>
<h3 id="_02-git-配置文件作用域选项-local、global-以及-system-三者的区别" tabindex="-1"><a class="header-anchor" href="#_02-git-配置文件作用域选项-local、global-以及-system-三者的区别" aria-hidden="true">#</a> 02.Git 配置文件作用域选项 local、global 以及 system 三者的区别？</h3>
<details class="custom-container details"><summary>使用`git config --edit`来区分配置文件作用域</summary>
<table>
<thead>
<tr>
<th style="text-align:left">选项名称</th>
<th style="text-align:center">优先级</th>
<th style="text-align:center">测试用例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">local</td>
<td style="text-align:center">最高</td>
<td style="text-align:center"><code v-pre>git config --edit --local</code></td>
</tr>
<tr>
<td style="text-align:left">global</td>
<td style="text-align:center">仅次于 local</td>
<td style="text-align:center"><code v-pre>git config --edit --global</code></td>
</tr>
<tr>
<td style="text-align:left">system</td>
<td style="text-align:center">最低</td>
<td style="text-align:center"><code v-pre>git config --edit --system</code></td>
</tr>
</tbody>
</table>
<p>我们可以使用<code v-pre>git config --edit</code>来查看它们分别对应的配置文件<code v-pre>.gitconfig</code></p>
</details>
</div></template>
