# 团队协作规范与实践

[[toc]]

## Usage

### 1.如何规范团队 Commit Message 代码提交信息？

:::: code-group

::: code-group-item 1.如何规范 Commit Message 提交信息？

```md
# 安装规范工具 commitizen && cz-conventional-changelog

- `npm i -g commitizen` commitizen cli，用于规范化 git commit 提交信息。

- `commitizen init cz-conventional-changelog --save-dev --save-exact`
  - `cz-conventional-changelog`的作用：让 commitizen 具备友好地选择提示功能
  - 该指令会自动帮我们安装并配置 cz-conventional-changelog
  - `--save-exact`的作用：固定 cz-conventional-changelog 依赖包的版本，避免出现小版本

之后,`git cz`替代`git commit` => commitizen CLI 便会帮我们自动完成 commit 规范化。

了解更多，[约定式提交规范官网](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
```

:::

::: code-group-item 2.如何检查团队成员每次的 commit 信息是否符合规范？

```bash
# 安装校验工具@commitlint/cli、以及校验规则@commitlint/config-conventional
npm install -D @commitlint/cli @commitlint/config-conventional

# 配置校验规则
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# 安装 husky git hooks
# husky 让 Git Hook 变得更加简单。
npm install husky --save-dev
npm set-script prepare "husky install"
npm run prepare

# Add a hook
# commit-msg Hook => Git 编辑Commit Message之时触发
# --edit => 该参数 Commitlint 从何处获取 Commit Message
# $1 表示脚本的第一个参数 => .git/COMMIT_EDITMSG
npx husky add .husky/commit-msg 'npx commitlint --edit "$1"'


# 测试
git add .
git cz
```

:::

::::
