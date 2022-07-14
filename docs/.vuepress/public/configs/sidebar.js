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
            text: "JavaScript 数据类型与指令",
            children: [
                "/technology/javascript/base/datas.md"
            ],
        },
        {
            text: "JavaScript 编程方式",
            children: [
                "/technology/javascript/organization/object-oriented-programming.md"
            ],
        },
    ],

    // web runtime 工程化建设
    '/technology/web-runtime/': [
        "/technology/web-runtime/",
        "/technology/web-runtime/team/",
    ],
}