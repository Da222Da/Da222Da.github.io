export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/favicon.png",
    "actions": [
      {
        "text": "Get Started →",
        "link": "/laboratory/"
      }
    ],
    "features": [
      {
        "title": "Target",
        "details": "Use computer science computing to solve real needs of people.  Thus, allow yourself to become better."
      },
      {
        "title": "What is an experiment?",
        "details": "The so-called experiment is to unite the technical means that we can unite to solve real problems for users."
      },
      {
        "title": "What is technology?",
        "details": "As the saying goes, \"To do a good job, you must first sharpen your tools.\"  Technology is our tool to solve problems."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1656929062000,
    "contributors": [
      {
        "name": "yunchao.mei",
        "email": "",
        "commits": 5
      },
      {
        "name": "金石流遇上土山焦",
        "email": "15826653490@163.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
