const nav_datas = require("./public/configs/navs.js")
const sidebar_datas = require('./public/configs/sidebar.js')

module.exports = {
    title: 'Program to better yourself',
    description: 'Program to better yourself',
    head: [
        ["meta", { charset: "UTF-8" }],
        ['link', { rel: 'shortcut icon', href: `./favicon.png`, type: "image/x-icon" }]
    ],
    base: "/",
    themeConfig: {
        docsDir: "docs",
        sidebarDepth: 0, // 侧边栏默认深度
        lastUpdated: "最后更新时间", // 显示最后更新时间
        // repo: "Snippetors/snippetors.github.io",
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

