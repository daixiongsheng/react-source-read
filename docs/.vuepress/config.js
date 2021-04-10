const { resolve, join } = require('path');
const webpack = require('webpack')
const fs = require('fs')
// const sidebar = []
const root = join(__dirname, '../')
function resolveSidebar1(sidebar, path) {
  const files = fs.readdirSync(path)
  for (const file of files) {
    if (!/^\w+/.test(file) || /node_module/.test(file)) {
      continue
    }
    const side = {}
    const name = file.split('.')[0]
    side.title = name
    if (
      name.toLowerCase().includes('readme') ||
      name.toLowerCase().includes('index')
    ) {
      side.path = path.replace(root, '') + '/'
    } else {
      side.path = path.replace(root, '') + '/' + name
    }
    if (fs.lstatSync(path + '/' + file).isDirectory() && /^\w+/.test(file)) {
      resolveSidebar1((side.children = []), path + '/' + file)
    }
    sidebar.push(side)
  }
}

function resolveSidebar(path) {
  const files = fs.readdirSync(path)
  for (const file of files) {
    if (!/^\w+/.test(file) || /node_module/.test(file)) {
      continue
    }
    if (fs.lstatSync(path + '/' + file).isDirectory() && /^\w+/.test(file)) {
      resolveSidebar(path + '/' + file)
    } else {
      const side = {}
      const name = file.split('.')[0]
      side.title = name
      if (
        name.toLowerCase().includes('readme') ||
        name.toLowerCase().includes('index')
      ) {
        sidebar.push(path.replace(root, '') + '/')
      } else {
        sidebar.push(path.replace(root, '') + '/' + name)
      }
      if (fs.lstatSync(path + '/' + file).isDirectory() && /^\w+/.test(file)) {
        resolveSidebar(path + '/' + file)
      }
    }
  }
}

// resolveSidebar(root)

const sidebar = [
  '/',
  '/guide/',
  {
    title: '基础',
    children: [
      '/base/jsx',
      '/base/api',
      '/base/react-element',
      '/base/whole-process'
    ]
  },
  '/dataBase/',
  '/react-dom/',
  '/react-reconciler/'
]

module.exports = {
  base: '/react-source-read/',
  title: 'React 源码阅读',
  description: 'React 源码阅读',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
      const { alias = {} } = config.resolve
      config.resolve.alias = {
        ...alias,
        '@img': resolve(__dirname, 'public/img'),
        '@code': resolve(__dirname, 'public/code')
      }
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/img/logo.png',
    sidebar,
    repo: 'daixiongsheng/react-source-read',
    repoLabel: '查看源码',
    lastUpdated: 'Last Updated',
    smoothScroll: true
  }
}
