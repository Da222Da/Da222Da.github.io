module.exports = {
    // 实验室
    '/laboratory/': [
        {
            text: '实验--概述',
            link: '/laboratory/README.md'
        },
    ],

    // JavaScript
    '/technology/javascript/': [
        "/technology/javascript/",
        {
            text: "JavaScript 代码组织",
            children: [
                { text: "JavaScript 数据类型与指令", link: "/technology/javascript/organization/" },
            ],
        },
    ],

    // web runtime 工程化建设
    '/technology/web-runtime/': [
        "/technology/web-runtime/",
        "/technology/web-runtime/team/",
    ],
}