# Git

::: tip
[[toc]]
:::

## Overall

Git 分布式、开源、文件版本管理工具。

[Git 练习网站](https://backlog.com/git-tutorial/cn/contents/)

## Use

### 01.当我们安装 Git 时，如何检测是否已经安装成功了呢？

答：当我们想要安装 Git 时，可直接前往官网[https://git-scm.com/](https://git-scm.com/), 找到适合自己电脑操作系统的安装方式。
随后，便可以使用`git --version`指令检测 Git 是否安装成功了。

### 02.Git 配置文件作用域选项 local、global 以及 system 三者的区别？

::: details 使用`git config --edit`来区分配置文件作用域
| 选项名称 | 优先级 | 测试用例 |
| :------- | :----------: | :--------------------------: |
| local | 最高 | `git config --edit --local` |
| global | 仅次于 local | `git config --edit --global` |
| system | 最低 | `git config --edit --system` |

我们可以使用`git config --edit`来查看它们分别对应的配置文件`.gitconfig`
:::
