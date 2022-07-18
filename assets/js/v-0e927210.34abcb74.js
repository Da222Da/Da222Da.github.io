"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[359],{5529:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-0e927210",path:"/technology/web-runtime/team/",title:"团队协作规范与实践",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"1.如何规范团队 Commit Message 代码提交信息？",slug:"_1-如何规范团队-commit-message-代码提交信息",children:[]}]}],filePathRelative:"technology/web-runtime/team/README.md",git:{updatedTime:1657677456e3,contributors:[{name:"yunchao.mei",email:"",commits:1}]}}},3800:(n,s,e)=>{e.r(s),e.d(s,{default:()=>u});var a=e(6252);const t=(0,a._)("h1",{id:"团队协作规范与实践",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#团队协作规范与实践","aria-hidden":"true"},"#"),(0,a.Uk)(" 团队协作规范与实践")],-1),l={class:"table-of-contents"},c=(0,a.Uk)("Usage"),i=(0,a.Uk)("1.如何规范团队 Commit Message 代码提交信息？"),o=(0,a._)("h2",{id:"usage",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),(0,a.Uk)(" Usage")],-1),m=(0,a._)("h3",{id:"_1-如何规范团队-commit-message-代码提交信息",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_1-如何规范团队-commit-message-代码提交信息","aria-hidden":"true"},"#"),(0,a.Uk)(" 1.如何规范团队 Commit Message 代码提交信息？")],-1),_=(0,a._)("div",{class:"language-markdown ext-md line-numbers-mode"},[(0,a._)("pre",{class:"language-markdown"},[(0,a._)("code",null,[(0,a._)("span",{class:"token title important"},[(0,a._)("span",{class:"token punctuation"},"#"),(0,a.Uk)(" 安装规范工具 commitizen && cz-conventional-changelog")]),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token list punctuation"},"-"),(0,a.Uk)(),(0,a._)("span",{class:"token code-snippet code keyword"},"`npm i -g commitizen`"),(0,a.Uk)(" commitizen cli，用于规范化 git commit 提交信息。\n\n"),(0,a._)("span",{class:"token list punctuation"},"-"),(0,a.Uk)(),(0,a._)("span",{class:"token code-snippet code keyword"},"`commitizen init cz-conventional-changelog --save-dev --save-exact`"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token list punctuation"},"-"),(0,a.Uk)(),(0,a._)("span",{class:"token code-snippet code keyword"},"`cz-conventional-changelog`"),(0,a.Uk)("的作用：让 commitizen 具备友好地选择提示功能\n  "),(0,a._)("span",{class:"token list punctuation"},"-"),(0,a.Uk)(" 该指令会自动帮我们安装并配置 cz-conventional-changelog\n  "),(0,a._)("span",{class:"token list punctuation"},"-"),(0,a.Uk)(),(0,a._)("span",{class:"token code-snippet code keyword"},"`--save-exact`"),(0,a.Uk)("的作用：固定 cz-conventional-changelog 依赖包的版本，避免出现小版本\n\n之后,"),(0,a._)("span",{class:"token code-snippet code keyword"},"`git cz`"),(0,a.Uk)("替代"),(0,a._)("span",{class:"token code-snippet code keyword"},"`git commit`"),(0,a.Uk)(" => commitizen CLI 便会帮我们自动完成 commit 规范化。\n\n了解更多，"),(0,a._)("span",{class:"token url"},[(0,a.Uk)("["),(0,a._)("span",{class:"token content"},"约定式提交规范官网"),(0,a.Uk)("]("),(0,a._)("span",{class:"token url"},"https://www.conventionalcommits.org/zh-hans/v1.0.0/"),(0,a.Uk)(")")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br")])],-1),r=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token comment"},"# 安装校验工具@commitlint/cli、以及校验规则@commitlint/config-conventional"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)(" -D @commitlint/cli @commitlint/config-conventional\n\n"),(0,a._)("span",{class:"token comment"},"# 配置校验规则"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token builtin class-name"},"echo"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"\"module.exports = {extends: ['@commitlint/config-conventional']}\""),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},">"),(0,a.Uk)(" commitlint.config.js\n\n"),(0,a._)("span",{class:"token comment"},"# 安装 husky git hooks"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"# husky 让 Git Hook 变得更加简单。"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)(" husky --save-dev\n"),(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(" set-script prepare "),(0,a._)("span",{class:"token string"},'"husky install"'),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(" run prepare\n\n"),(0,a._)("span",{class:"token comment"},"# Add a hook"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"# commit-msg Hook => Git 编辑Commit Message之时触发"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"# --edit => 该参数 Commitlint 从何处获取 Commit Message"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"# $1 表示脚本的第一个参数 => .git/COMMIT_EDITMSG"),(0,a.Uk)("\nnpx husky "),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(" .husky/commit-msg "),(0,a._)("span",{class:"token string"},"'npx commitlint --edit \"$1\"'"),(0,a.Uk)("\n\n\n"),(0,a._)("span",{class:"token comment"},"# 测试"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"git"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"add"),(0,a.Uk)(),(0,a._)("span",{class:"token builtin class-name"},"."),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"git"),(0,a.Uk)(" cz\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"16"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"17"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"18"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"19"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"20"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"21"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"22"),(0,a._)("br")])],-1),p={},u=(0,e(3744).Z)(p,[["render",function(n,s){const e=(0,a.up)("RouterLink"),p=(0,a.up)("CodeGroupItem"),u=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("nav",l,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(e,{to:"#usage"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(e,{to:"#_1-如何规范团队-commit-message-代码提交信息"},{default:(0,a.w5)((()=>[i])),_:1})])])])])]),o,m,(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{title:"1.如何规范 Commit Message 提交信息？"},{default:(0,a.w5)((()=>[_])),_:1}),(0,a.Wm)(p,{title:"2.如何检查团队成员每次的 commit 信息是否符合规范？"},{default:(0,a.w5)((()=>[r])),_:1})])),_:1})],64)}]])}}]);