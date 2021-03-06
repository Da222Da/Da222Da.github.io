module.exports = [
    ["/technology/browser/", "简介"],
    {
        title: "JS 数据拓展",
        children: [
            {
                path: "/technology/browser/data/",
                title: "简介：JS 数据拓展"
            },
            {
                path: "/technology/browser/data/image.md",
                title: "Image:图片数据对象"
            },
            {
                path: "/technology/browser/data/file.md",
                title: "File:文件数据对象"
            },
        ],
        collapsable: false,
    },
    {
        title: "Browser 图形API",
        children: [
            {
                path: "/technology/browser/graph/",
                title: "简介：Browser 图形API"
            },
            {
                path: "/technology/browser/graph/html.md",
                title: "HTML: 超文本标记语言"
            },
            {
                path: "/technology/browser/graph/canvas.md",
                title: "Canvas: 浏览器2D绘图方案"
            },

        ],
        collapsable: false,
    },
    ["/technology/browser/event/", "Browser 事件机制"]
]