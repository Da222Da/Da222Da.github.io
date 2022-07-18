const nav_datas = require("./public/configs/navs.js")
const sidebar_datas = require('./public/configs/sidebar.js')
// const { defaultTheme } = require('vuepress')

module.exports = {
    title: 'Turing',
    description: '图灵机 —— 无限纸带计算模型实践与应用',
    head: [
        ["meta", { charset: "UTF-8" }],
        ['link', { rel: 'shortcut icon', href: `./favicon.png`, type: "image/x-icon" }]
    ],
    base: "/",
    // theme: defaultTheme({
    //     docsDir: "docs",
    //     sidebarDepth: 0, // 侧边栏默认深度
    //     lastUpdated: "最后更新时间", // 显示最后更新时间
    //     repo: "https://github.com/Da222Da/Da222Da.github.io",
    //     locales: {
    //         "/": {
    //             navbar: nav_datas,
    //             sidebar: sidebar_datas,
    //         },
    //     },
    // }),
    themeConfig: {
        docsDir: "docs",
        sidebarDepth: 0, // 侧边栏默认深度
        lastUpdated: "最后更新时间", // 显示最后更新时间
        repo: "https://github.com/Da222Da/Da222Da.github.io",
        locales: {
            "/": {
                navbar: nav_datas,
                sidebar: sidebar_datas,
            },
        },
    },

    plugins: [
        [
            "@snippetors/vuepress-plugin-code-copy", {
                backgroundTransition: false,
                successText: "代码复制成功!",
                align: 'bottom'
            },
        ],
    ],
}

