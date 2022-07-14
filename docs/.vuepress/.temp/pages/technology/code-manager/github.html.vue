<template><div><h1 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h1>
<nav class="table-of-contents"><ul><li><router-link to="#overall">Overall</router-link></li><li><router-link to="#usage">Usage</router-link><ul><li><router-link to="#_01-如何在-github-上配置-ssh-免密登录">01.如何在 GitHub 上配置 SSH 免密登录？</router-link></li></ul></li></ul></nav>
<h2 id="overall" tabindex="-1"><a class="header-anchor" href="#overall" aria-hidden="true">#</a> Overall</h2>
<p>Github 全球性、代码开源、代码托管平台。</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="_01-如何在-github-上配置-ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#_01-如何在-github-上配置-ssh-免密登录" aria-hidden="true">#</a> 01.如何在 GitHub 上配置 SSH 免密登录？</h3>
<p>SSH(Secure Shell，安全外壳协议)，该协议能够为远程登录会话提供安全保障。</p>
<p>当我们需要在本地登录远程服务器时，使用 ssh 密钥<code v-pre>id_rsa &amp;&amp; id_rsa.pub</code>来替代常规的账号登录。</p>
<p>最终效果，只需配置一次密钥，下次提交代码的时候，就不用输入账号密码了。</p>
<p>具体配置如下：</p>
<details class="custom-container details">
<ul>
<li>
<p>第一步(Generate)：生成 SSH 密钥对<code v-pre>ssh-keygen -t 加密算法类型(例如，rsa)</code>.</p>
</li>
<li>
<p>第二步(Check)：检验 SSH 密钥对是否已经生成了<code v-pre>cd ~/.ssh &amp;&amp; ls</code>.</p>
</li>
<li>
<p>第三步(Config)：查看公钥内容<code v-pre>cat ~/.ssh/.id_rsa.pub</code>，并在 GitHub 配置中 &quot;New SSH Key&quot;.</p>
</li>
<li>
<p>第四步(Telnet)：链接 GitHub 远程服务器，测试 SSH 是否配置成功<code v-pre>ssh -T git@github.com</code>. 若是链接成功后，我们将会看到提示信息 You've successfully authenticated, but GitHub does not provide shell access.</p>
</li>
</ul>
</details>
</div></template>
