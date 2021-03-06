import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-cb09a37a","/laboratory/","实验室",["/laboratory/index.html","/laboratory/README.md"]],
  ["v-434f4180","/pages/53c0aa/","README",["/pages/53c0aa/index.html","/packages/","/packages/README.md"]],
  ["v-5af44f27","/pages/1bc413/","README",["/pages/1bc413/index.html","/technology/browser/","/technology/browser/README.md"]],
  ["v-fdf28302","/technology/code-manager/git.html","Git",["/technology/code-manager/git","/technology/code-manager/git.md"]],
  ["v-0658559e","/technology/code-manager/github.html","GitHub",["/technology/code-manager/github","/technology/code-manager/github.md"]],
  ["v-99a49b90","/technology/code-manager/","代码管理解决方案",["/technology/code-manager/index.html","/technology/code-manager/README.md"]],
  ["v-2b888618","/technology/javascript/","JavaScript 语言简介",["/technology/javascript/index.html","/technology/javascript/README.md"]],
  ["v-7dd47377","/pages/8539c4/","README",["/pages/8539c4/index.html","/technology/nodejs/","/technology/nodejs/README.md"]],
  ["v-139066ba","/technology/web-runtime/","Web-Runtime 工程化--概述",["/technology/web-runtime/index.html","/technology/web-runtime/README.md"]],
  ["v-a63ec776","/pages/90d135/","README",["/pages/90d135/index.html","/packages/@npm/babel/","/packages/@npm/babel/README.md"]],
  ["v-7bff29c0","/pages/84117f/","README",["/pages/84117f/index.html","/packages/@npm/commander/","/packages/@npm/commander/README.md"]],
  ["v-e5e6aece","/pages/2b04fd/","README",["/pages/2b04fd/index.html","/packages/@npm/eslint/","/packages/@npm/eslint/README.md"]],
  ["v-2a347d0d","/pages/5a353c/","README",["/pages/5a353c/index.html","/packages/@npm/lerna/","/packages/@npm/lerna/README.md"]],
  ["v-07d4eaaa","/pages/f37f48/","README",["/pages/f37f48/index.html","/packages/@npm/npminstall/","/packages/@npm/npminstall/README.md"]],
  ["v-f94a447c","/pages/889e52/","README",["/pages/889e52/index.html","/packages/@npm/typescript/","/packages/@npm/typescript/README.md"]],
  ["v-0d89a0d9","/pages/167ddd/","README",["/pages/167ddd/index.html","/packages/@npm/webpack/","/packages/@npm/webpack/README.md"]],
  ["v-72317153","/pages/338990/","file",["/pages/338990/index.html","/technology/browser/data/file.html","/technology/browser/data/file.md"]],
  ["v-6a1f30b2","/pages/8b93ee/","image",["/pages/8b93ee/index.html","/technology/browser/data/image.html","/technology/browser/data/image.md"]],
  ["v-4dc46b4b","/pages/fc3c2e/","README",["/pages/fc3c2e/index.html","/technology/browser/data/","/technology/browser/data/README.md"]],
  ["v-00f3f79b","/pages/f64631/","README",["/pages/f64631/index.html","/technology/browser/event/","/technology/browser/event/README.md"]],
  ["v-46d577ba","/pages/52b184/","canvas",["/pages/52b184/index.html","/technology/browser/graph/canvas.html","/technology/browser/graph/canvas.md"]],
  ["v-0b09d19a","/pages/f29b69/","html",["/pages/f29b69/index.html","/technology/browser/graph/html.html","/technology/browser/graph/html.md"]],
  ["v-003a0c12","/pages/f4e033/","README",["/pages/f4e033/index.html","/technology/browser/graph/","/technology/browser/graph/README.md"]],
  ["v-a5499f64","/technology/javascript/command/functional-programming.html","函数式编程",["/technology/javascript/command/functional-programming","/technology/javascript/command/functional-programming.md"]],
  ["v-19d2b1f7","/technology/javascript/command/object-oriented-programming.html","JavaScript 面向对象编程",["/technology/javascript/command/object-oriented-programming","/technology/javascript/command/object-oriented-programming.md"]],
  ["v-8fba0f48","/technology/javascript/command/","JavaScript 给我们提供的指令",["/technology/javascript/command/index.html","/technology/javascript/command/README.md"]],
  ["v-5ba9e674","/technology/javascript/data/function.html","Function 函数",["/technology/javascript/data/function","/technology/javascript/data/function.md"]],
  ["v-bd02e2a6","/technology/javascript/data/","JavaScript 给我们提供的数据类型",["/technology/javascript/data/index.html","/technology/javascript/data/README.md"]],
  ["v-6baa0518","/technology/javascript/data/symbol.html","Symbol 唯一值",["/technology/javascript/data/symbol","/technology/javascript/data/symbol.md"]],
  ["v-42df6519","/technology/javascript/design/","JavaScript 程序设计",["/technology/javascript/design/index.html","/technology/javascript/design/README.md"]],
  ["v-0e927210","/technology/web-runtime/team/","团队协作规范与实践",["/technology/web-runtime/team/index.html","/technology/web-runtime/team/README.md"]],
  ["v-af2109f2","/pages/440cb3/","jest",["/pages/440cb3/index.html","/technology/web-runtime/tools/jest.html","/technology/web-runtime/tools/jest.md"]],
  ["v-20b90135","/pages/eff9ac/","less",["/pages/eff9ac/index.html","/technology/web-runtime/tools/less.html","/technology/web-runtime/tools/less.md"]],
  ["v-3706649a","/404.html","",["/404"]],
  ["v-366757ca","/technology/web-runtime/tools/code-manager/git.html","Git",["/technology/web-runtime/tools/code-manager/git","/technology/web-runtime/tools/code-manager/git.md"]],
  ["v-02c0a3d4","/technology/web-runtime/tools/code-manager/","代码管理解决方案",["/technology/web-runtime/tools/code-manager/index.html","/technology/web-runtime/tools/code-manager/README.md"]],
  ["v-d714eafc","/technology/web-runtime/tools/code-manager/github.html","GitHub",["/technology/web-runtime/tools/code-manager/github","/technology/web-runtime/tools/code-manager/github.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
