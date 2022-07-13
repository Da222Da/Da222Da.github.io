module.exports = [
    {
        path: "/packages/",
        title: "简介"
    },
    {
        title: "NPM 第三方包",
        collapsable: false,
        children: [
            {
                title: "Webpack:JS构建工具.",
                path: "/packages/@npm/webpack/",
                collapsable: false
            },
            {
                title: "ESLint:JS代码检测工具.",
                path: "/packages/@npm/eslint/",
                collapsable: false
            },
            {
                title: "Babel:JS语法转换编译器.",
                path: "/packages/@npm/babel/",
                collapsable: false
            },
            {
                title: "Typescript:JS静态类型检查器.",
                path: "/packages/@npm/typescript/",
                collapsable: false
            },
            {
                title: "Commander:nodeJS命令行解决方案.",
                path: "/packages/@npm/commander/",
                collapsable: false
            },
            {
                title: "Lerna:多包代码仓库管理工具",
                path: "/packages/@npm/lerna/",
                collapsable: false
            },
            {
                title: "npminstall:以代码形式安装npm包",
                path: "/packages/@npm/npminstall/",
                collapsable: false
            }
        ],
    },

]