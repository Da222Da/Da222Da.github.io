"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[56],{9168:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l={key:"v-d714eafc",path:"/technology/web-runtime/tools/code-manager/github.html",title:"GitHub",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Overall",slug:"overall",children:[]},{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"01.如何在 GitHub 上配置 SSH 免密登录？",slug:"_01-如何在-github-上配置-ssh-免密登录",children:[]}]}],filePathRelative:"technology/web-runtime/tools/code-manager/github.md",git:{updatedTime:165812478e4,contributors:[{name:"yunchao.mei",email:"",commits:1}]}}},3979:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(6252);const i=(0,l._)("h1",{id:"github",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),(0,l.Uk)(" GitHub")],-1),s={class:"table-of-contents"},u=(0,l.Uk)("Overall"),h=(0,l.Uk)("Usage"),d=(0,l.Uk)("01.如何在 GitHub 上配置 SSH 免密登录？"),r=(0,l.uE)('<h2 id="overall" tabindex="-1"><a class="header-anchor" href="#overall" aria-hidden="true">#</a> Overall</h2><p>Github 全球性、代码开源、代码托管平台。</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="_01-如何在-github-上配置-ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#_01-如何在-github-上配置-ssh-免密登录" aria-hidden="true">#</a> 01.如何在 GitHub 上配置 SSH 免密登录？</h3><p>SSH(Secure Shell，安全外壳协议)，该协议能够为远程登录会话提供安全保障。</p><p>当我们需要在本地登录远程服务器时，使用 ssh 密钥<code>id_rsa &amp;&amp; id_rsa.pub</code>来替代常规的账号登录。</p><p>最终效果，只需配置一次密钥，下次提交代码的时候，就不用输入账号密码了。</p><p>具体配置如下：</p><details class="custom-container details"><ul><li><p>第一步(Generate)：生成 SSH 密钥对<code>ssh-keygen -t 加密算法类型(例如，rsa)</code>.</p></li><li><p>第二步(Check)：检验 SSH 密钥对是否已经生成了<code>cd ~/.ssh &amp;&amp; ls</code>.</p></li><li><p>第三步(Config)：查看公钥内容<code>cat ~/.ssh/.id_rsa.pub</code>，并在 GitHub 配置中 &quot;New SSH Key&quot;.</p></li><li><p>第四步(Telnet)：链接 GitHub 远程服务器，测试 SSH 是否配置成功<code>ssh -T git@github.com</code>. 若是链接成功后，我们将会看到提示信息 You&#39;ve successfully authenticated, but GitHub does not provide shell access.</p></li></ul></details>',9),n={},o=(0,a(3744).Z)(n,[["render",function(e,t){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("nav",s,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:"#overall"},{default:(0,l.w5)((()=>[u])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#usage"},{default:(0,l.w5)((()=>[h])),_:1}),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:"#_01-如何在-github-上配置-ssh-免密登录"},{default:(0,l.w5)((()=>[d])),_:1})])])])])]),r],64)}]])}}]);