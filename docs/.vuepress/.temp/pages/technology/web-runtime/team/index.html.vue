<template><div><h1 id="团队协作规范与实践" tabindex="-1"><a class="header-anchor" href="#团队协作规范与实践" aria-hidden="true">#</a> 团队协作规范与实践</h1>
<nav class="table-of-contents"><ul><li><router-link to="#usage">Usage</router-link><ul><li><router-link to="#_1-如何规范团队-commit-message-代码提交信息">1.如何规范团队 Commit Message 代码提交信息？</router-link></li></ul></li></ul></nav>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="_1-如何规范团队-commit-message-代码提交信息" tabindex="-1"><a class="header-anchor" href="#_1-如何规范团队-commit-message-代码提交信息" aria-hidden="true">#</a> 1.如何规范团队 Commit Message 代码提交信息？</h3>
<CodeGroup>
<CodeGroupItem title="1.如何规范 Commit Message 提交信息？">
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 安装规范工具 commitizen &amp;&amp; cz-conventional-changelog</span>

<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`npm i -g commitizen`</span> commitizen cli，用于规范化 git commit 提交信息。

<span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`commitizen init cz-conventional-changelog --save-dev --save-exact`</span>
  <span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`cz-conventional-changelog`</span>的作用：让 commitizen 具备友好地选择提示功能
  <span class="token list punctuation">-</span> 该指令会自动帮我们安装并配置 cz-conventional-changelog
  <span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`--save-exact`</span>的作用：固定 cz-conventional-changelog 依赖包的版本，避免出现小版本

之后,<span class="token code-snippet code keyword">`git cz`</span>替代<span class="token code-snippet code keyword">`git commit`</span> => commitizen CLI 便会帮我们自动完成 commit 规范化。

了解更多，<span class="token url">[<span class="token content">约定式提交规范官网</span>](<span class="token url">https://www.conventionalcommits.org/zh-hans/v1.0.0/</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="2.如何检查团队成员每次的 commit 信息是否符合规范？">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装校验工具@commitlint/cli、以及校验规则@commitlint/config-conventional</span>
<span class="token function">npm</span> <span class="token function">install</span> -D @commitlint/cli @commitlint/config-conventional

<span class="token comment"># 配置校验规则</span>
<span class="token builtin class-name">echo</span> <span class="token string">"module.exports = {extends: ['@commitlint/config-conventional']}"</span> <span class="token operator">></span> commitlint.config.js

<span class="token comment"># 安装 husky git hooks</span>
<span class="token comment"># husky 让 Git Hook 变得更加简单。</span>
<span class="token function">npm</span> <span class="token function">install</span> husky --save-dev
<span class="token function">npm</span> set-script prepare <span class="token string">"husky install"</span>
<span class="token function">npm</span> run prepare

<span class="token comment"># Add a hook</span>
<span class="token comment"># commit-msg Hook => Git 编辑Commit Message之时触发</span>
<span class="token comment"># --edit => 该参数 Commitlint 从何处获取 Commit Message</span>
<span class="token comment"># $1 表示脚本的第一个参数 => .git/COMMIT_EDITMSG</span>
npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">'npx commitlint --edit "$1"'</span>


<span class="token comment"># 测试</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> cz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
</div></template>
