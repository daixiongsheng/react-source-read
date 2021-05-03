---
title: ReactElement
search: true
---

### React Core

React “Core” 中包含所有[全局 `React` API](https://zh-hans.reactjs.org/docs/top-level-api.html#react)，比如：

- `React.createElement()`
- `React.Component`
- `React.Children`

**React 核心只包含定义组件必要的 API**。它不包含[协调](https://zh-hans.reactjs.org/docs/reconciliation.html)算法或者其他平台特定的代码。它同时适用于 React DOM 和 React Native 组件。

React 核心代码在源码的 [`packages/react`](https://github.com/facebook/react/tree/master/packages/react) 目录中。在 npm 上发布为 [`react`](https://www.npmjs.com/package/react) 包。相应的独立浏览器构建版本称为 `react.js`，它会导出一个称为 `React` 的全局对象。

###

### 渲染器

React 最初只是服务于 DOM，但是这之后被改编成也能同时支持原生平台的 [React Native](https://reactnative.dev/)。因此，在 React 内部机制中引入了“渲染器”这个概念。

**渲染器用于管理一棵 React 树，使其根据底层平台进行不同的调用。**

渲染器同样位于 [`packages/`](https://github.com/facebook/react/tree/master/packages/) 目录下：

- [React DOM Renderer](https://github.com/facebook/react/tree/master/packages/react-dom) 将 React 组件渲染成 DOM。它实现了全局 [`ReactDOM`API](https://zh-hans.reactjs.org/docs/react-dom.html)，这在 npm 上作为 [`react-dom`](https://www.npmjs.com/package/react-dom) 包。这也可以作为单独浏览器版本使用，称为 `react-dom.js`，导出一个 `ReactDOM` 的全局对象.
- [React Native Renderer](https://github.com/facebook/react/tree/master/packages/react-native-renderer) 将 React 组件渲染为 Native 视图。此渲染器在 React Native 内部使用。
- [React Test Renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer) 将 React 组件渲染为 JSON 树。这用于 [Jest](https://facebook.github.io/jest) 的[快照测试](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html)特性。在 npm 上作为 [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) 包发布。

另外一个官方支持的渲染器的是 [`react-art`](https://github.com/facebook/react/tree/master/packages/react-art)。它曾经是一个独立的 [GitHub 仓库](https://github.com/reactjs/react-art)，但是现在我们将此加入了主源代码树。

### reconcilers

即便 React DOM 和 React Native 渲染器的区别很大，但也需要共享一些逻辑。特别是[协调](https://zh-hans.reactjs.org/docs/reconciliation.html)算法需要尽可能相似，这样可以让声明式渲染，自定义组件，state，生命周期方法和 refs 等特性，保持跨平台工作一致。

为了解决这个问题，不同的渲染器彼此共享一些代码。我们称 React 的这一部分为 “reconciler”。当处理类似于 `setState()` 这样的更新时，reconciler 会调用树中组件上的 `render()`，然后决定是否进行挂载，更新或是卸载操作。

Reconciler 没有单独的包，因为他们暂时没有公共 API。相反，它们被如 React DOM 和 React Native 的渲染器排除在外。

### Fiber reconciler

“fiber” reconciler 是一个新尝试，致力于解决 stack reconciler 中固有的问题，同时解决一些历史遗留问题。Fiber 从 React 16 开始变成了默认的 reconciler。

它的主要目标是：

- 能够把可中断的任务切片处理。
- 能够调整优先级，重置并复用任务。
- 能够在父元素与子元素之间交错处理，以支持 React 中的布局。
- 能够在 `render()` 中返回多个元素。
- 更好地支持错误边界。

###

### 挂载是递归过程

reconciler 检查 `App` 是一个类还是一个函数。

如果 `App` 是函数，那么 reconciler 会调用 `App(props)` 来获取渲染的元素。

如果 `App` 是类，那么 reconciler 会通过 `new App(props)` 来实例化 `App`，并调用生命周期方法 `componentWillMount()`，之后调用 `render()` 方法来获取渲染的元素。

无论哪种方式，reconciler 都会探悉 `App` 的内容并渲染。

这个过程是递归的。`App` 可能会渲染某个 `<Greeting />`，`Greeting` 可能会渲染某个 `<Button />`，以此类推。当它探悉各个组件渲染的元素时，reconciler 会通过用户定义的组件递归地 “向下探索”。

**注意：**

reconciler 本身不与 DOM 绑定。挂载的确切结果（在源代码中有时叫做 “挂载映像”）取决于 renderer，可以是一个 DOM 节点（React DOM），一个字符串（React DOM Server），或是一个表示原生视图的数字（React Native）。

### 事件系统

React 在原生事件基础上进行了封装，以抹平浏览器间差异。其源码在 [`packages/react-dom/src/events`](https://github.com/facebook/react/tree/master/packages/react-dom/src/events) 目录下。

###
