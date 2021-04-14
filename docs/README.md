---
title: 介绍
---

# 深入理解 React 源码

> 文档内容持续完善中...

---

此文档主要是关于 `React 16.8` 的版本

---

文档主要写了作者阅读的一些关键源码，刚开始读的时候可以就想搞清楚这个库写了些什么，怎么写的，他的整个架构是怎样的。
第一次读的时候可能不会在意一些很深的细节，主要还是关注生产环境中运行的状况。

阅完下来后给我的感觉就是 `React` 相比 `Vue` 的源码体量上还是有很大区别的，以前简单了解过 `Vue` 的源码，第一次读 `Vue` 源码的时候还知道某一步在干嘛，读 `React` 源码就不一样了，第一次读都不知道写这些在干嘛，等到全部读完后可能才明白前面是在干嘛，所以要理解 `React` 如何设计我觉得读一遍是远远不够的。

阅读完之后，也捡起了很多我以前丢下的东西。特别是数据结构这块，以前一直以为能运用各种数据结构只有在打 ACM 的时候，日常业务迭代中大部分数据都是后端生成好的，也不会涉及手写一些数据结构。

比如`React` 内部的 **`Effect链表`** **`对象池`** **`位运算`** `事件代理`

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

<!-- <<< @/docs/.vuepress/config.js{12-20} -->
<!--
<ClientOnly>
  <HelloWorld />
</ClientOnly> -->
<!--


::: v-pre
`{{ This will be displayed as-is }}`
::: -->

<!-- tip  error warn  -->

tip top <Badge type="tip" text="hello world" vertical="top" />

error bottom <Badge type="error" text="hello world" vertical="bottom" />

warn baseline <Badge type="warn" text="hello world" vertical="baseline" />

warn center <badge type="warn" text="hello world" vertical="center" />
