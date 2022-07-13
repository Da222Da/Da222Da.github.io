export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Program to better yourself",
  "description": "Program to better yourself",
  "head": [
    [
      "meta",
      {
        "charset": "UTF-8"
      }
    ],
    [
      "link",
      {
        "rel": "shortcut icon",
        "href": "./favicon.png",
        "type": "image/x-icon"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
