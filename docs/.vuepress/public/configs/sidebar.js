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
            text: "JavaScript 数据类型",
            children: [
                "/technology/javascript/data/"
            ],
        },
        {
            text: "JavaScript 指令",
            children: [
                "/technology/javascript/command/",
                "/technology/javascript/command/object-oriented-programming.md"
            ],
        },
    ],

    // web runtime 工程化建设
    '/technology/web-runtime/': [
        "/technology/web-runtime/",
        "/technology/web-runtime/team/",
    ],
}