# GitHub

[[toc]]

## Overall

Github 全球性、代码开源、代码托管平台。

## Usage

### 01.如何在 GitHub 上配置 SSH 免密登录？

SSH(Secure Shell，安全外壳协议)，该协议能够为远程登录会话提供安全保障。

当我们需要在本地登录远程服务器时，使用 ssh 密钥`id_rsa && id_rsa.pub`来替代常规的账号登录。

最终效果，只需配置一次密钥，下次提交代码的时候，就不用输入账号密码了。

具体配置如下：

::: details

- 第一步(Generate)：生成 SSH 密钥对`ssh-keygen -t 加密算法类型(例如，rsa)`.

- 第二步(Check)：检验 SSH 密钥对是否已经生成了`cd ~/.ssh && ls`.

- 第三步(Config)：查看公钥内容`cat ~/.ssh/.id_rsa.pub`，并在 GitHub 配置中 "New SSH Key".

- 第四步(Telnet)：链接 GitHub 远程服务器，测试 SSH 是否配置成功`ssh -T git@github.com`. 若是链接成功后，我们将会看到提示信息 You've successfully authenticated, but GitHub does not provide shell access.

:::
