---
title: html
date: 2022-06-20 16:56:00
permalink: /pages/f29b69/
categories:
  - technology
  - browser
  - graph
tags:
  - 
---
# HTML:

::: tip
[[toc]]
:::

## 简介: 从整体角度认识 HTML

- HTML: Hypertext Markup Language
- HTML 标签
  - `<select> && (<option> || <optgroup>)` HTML 提供的选项菜单控件

## Use

### 01.如何给 select 标签设置默认选中项？

::: details 使用 option[selected]属性给 select 标签设置默认选中项

```html
<select id="select">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
```

:::

::: danger
注意！默认情况下，默认项的 selected 属性是不会随着选择项的变化而变化。
:::
