export const themeData = {
  "docsDir": "docs",
  "sidebarDepth": 0,
  "lastUpdated": "最后更新时间",
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "首页",
          "link": "/"
        },
        {
          "text": "实验室",
          "link": "/laboratory/",
          "activeMatch": "^/laboratory/"
        },
        {
          "text": "技术支持",
          "children": [
            {
              "text": "Programming(编程)",
              "children": [
                {
                  "text": "- JavaScript 编程语言设计与规范",
                  "link": "/technology/javascript/"
                }
              ]
            },
            {
              "text": "Web Runtime(前端)",
              "children": [
                {
                  "text": "- 前端工程化建设与实践",
                  "link": "/technology/web-runtime/"
                }
              ]
            }
          ]
        },
        {
          "text": "资源",
          "children": [
            {
              "text": "宝藏资源",
              "children": [
                {
                  "text": "VuePress 主题开源贡献者",
                  "link": "https://doc.xugaoyi.com/"
                },
                {
                  "text": "obj.Tube的前端学习路线",
                  "link": "https://objtube.gitee.io/front-end-roadmap/#/"
                },
                {
                  "text": "前端工程师--谭光志",
                  "link": "https://github.com/woai3c/node-blog"
                },
                {
                  "text": "Computer Science -- 计算机自学指南",
                  "link": "https://github.com/ossu/computer-science"
                },
                {
                  "text": "TeachYourselfCS-CN -- 计算机自学指南",
                  "link": "https://github.com/izackwu/TeachYourselfCS-CN/blob/master/TeachYourselfCS-CN.md"
                },
                {
                  "text": "awesome-courses -- 大学计算机课程指南",
                  "link": "https://github.com/prakhar1989/awesome-courses"
                }
              ]
            },
            {
              "text": "优秀项目",
              "children": [
                {
                  "text": "CSS Flex 小游戏",
                  "link": "https://github.com/thomaspark/flexboxfroggy"
                },
                {
                  "text": "CSS Grid 小游戏",
                  "link": "https://github.com/billfienberg/grid-garden"
                }
              ]
            },
            {
              "text": "项目支持",
              "link": "null",
              "children": [
                {
                  "text": "VuePress",
                  "link": "https://v2.vuepress.vuejs.org/zh/"
                },
                {
                  "text": "vuePress-snippetors系列插件",
                  "link": "https://snippetors.github.io/plugins/vuepress-plugin-code-copy.html"
                },
                {
                  "text": "图标字符库emoji",
                  "link": "https://www.webfx.com/tools/emoji-cheat-sheet/"
                },
                {
                  "text": "markdown-it markdown解析插件",
                  "link": "https://github.com/markdown-it/markdown-it"
                }
              ]
            }
          ]
        }
      ],
      "sidebar": {
        "/laboratory/": [
          {
            "text": "实验--概述",
            "link": "/laboratory/README.md"
          }
        ],
        "/technology/javascript/": [
          "/technology/javascript/",
          {
            "text": "JavaScript 数据类型与指令",
            "children": [
              "/technology/javascript/base/datas.md"
            ]
          },
          {
            "text": "JavaScript 编程方式",
            "children": [
              "/technology/javascript/organization/object-oriented-programming.md"
            ]
          }
        ],
        "/technology/web-runtime/": [
          "/technology/web-runtime/",
          "/technology/web-runtime/team/"
        ]
      },
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
