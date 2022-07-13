---
title: file
date: 2022-06-27 10:27:07
permalink: /pages/338990/
categories:
  - technology
  - browser
  - data
tags:
  - 
---
# File 文件对象

::: tip

[[toc]]

:::

## Overall

### 01.Web 应用程序操作文件的方式

Web 应用程序是无法操作用户计算机上的文件，在 web 中操作文件的方式如下：

- 用户手动将文件提交到`<input type='file' />`，然后借助 File API 读取文件信息。
- 借助 XMLHttpRequest，从远程服务器上读取数据。

### 02.File API

- FileReader 数据类型`一种异步文件读取机制，从文件系统读取文件`

  - FileReader 对象上的异步方法：
    - `readAsText(file, encoding)` 从文件中读取纯文本内容并保存在 result 属性中。
    - `readAsDataURL(file)` 读取文件并将内容的数据 URI 保存在 result 属性中。
    - `readAsBinaryString(file)`读取文件并将每个字符的二进制数据保存在 result 属性中。
    - `readAsArrayBuffer(file)`读取文件并将文件内容以 ArrayBuffer 形式保存在 result 属性。
  - 因为这些读取方法是异步的，所以每个 FileReader 会发布几个事件，最常见的有:
    - `progress 事件`每 50 毫秒就会触发一次，其与 XHR 的 progress 事件具有相同的信息：
    - `error 事件`会在由于某种原因无法读取文件时触发。
    - `load 事件`会在文件成功加载后触发。

- FileReaderSync 数据类型`与FileReader相似，只是读取文件的机制是同步`

### 03.为什么会有 Blob 数据类型？

某些情况下，可能需要读取部分文件而不是整个文件。为此，File 对象提供了一个名为 slice()的方法。

slice()方法接收两个参数：起始字节和要读取的字节数。

这个方法返回一个 Blob 的实例，而 Blob 实际上是 File 的超类。

blob 表示二进制大对象（binary larget object），是 JavaScript 对不可修改二进制数据的封装类型。

## Use

### 01. 使用 input 元素选取文件时，那些文件信息会被绑定到 input 元素之上？

input 元素 => `<input type='file' />`

当用户选择一个或多个文件时，`e.target.files = [] && e.target.files.push(File对象)`

每一个 File 对象都存了一些选中文件的信息，例如`文件名name、文件类型type、文件大小size`

但是，注意！File 对象是不存在文件数据属性的。

::: details 例子

```html
<input type="file" id="file" />

<script>
  $("#file").change((e) => {
    const filelist = e.target.files;
    console.log(filelist[0].name); // 文件名称
    console.log(filelist[0].type); // 文件类型
    console.log(filelist[0].size); // 文件大小
  });
</script>
```

:::

### 02. 上传一张名为 image.png 的图片时，input.value = ?

当我们上传一个名为 image.png 的图片时，打印时会发现`input.value='C:\fakepath\image.png'`

这里的`fakepath`表示伪路径。

### 03. (例子)如何从文件系统中读取图片数据，并在网页向用户展示？

::: details 源码

```html
<input type="file" id="file" />

<script>
  document.getElementById("file").addEventListener("change", (e) => {
    const filelist = e.target.files;
    const { type: filetype } = filelist[0];
    let fileReader = new FileReader();

    if (/image/.test(filetype)) {
      fileReader.readAsDataURL(filelist[0]);
    }

    // 文件读取完成
    fileReader.onload = () => {
      let image = new Image();
      image.src = fileReader.result;
      document.body.append(image);
    };

    // 文件读取失败
    fileReader.onerror = () => {
      throw new Error("文件读取失败了");
    };
  });
</script>
```

:::

### 04.如何声明一个 Blob 对象？

::: details 声明 Blob 对象 => new Blob(array[string], type)

```js
console.log(new Blob(["foo"]));
// Blob {size: 3, type: ""}

console.log(new Blob(['{"a": "b"}'], { type: "application/json" }));
// {size: 10, type: "application/json"}

console.log(new Blob(["<p>Foo</p>", "<p>Bar</p>"], { type: "text/html" }));
// {size: 20, type: "text/html"}
```

:::

### 05.(例子) 截取纯文本内容的前 20 个字节, 并打印？

::: details 源码

```html
<input type="file" id="files-list" />

<script>
  let filesList = document.getElementById("files-list");
  filesList.addEventListener("change", (event) => {
    let files = event.target.files,
      reader = new FileReader();

    reader.readAsText(files[0]);

    reader.onload = () => {
      // 将文件读取到纯文本内容转成Blob对象
      let blob = new Blob([reader.result]);

      // 截取blod对象的前二十个字节
      let datas = blob.slice(0, 20);

      // 打印最终的结果
      datas.text().then((res) => {
        console.log(res);
      });
    };
  });
</script>
```

:::
