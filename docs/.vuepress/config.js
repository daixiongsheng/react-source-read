const { resolve } = require('path')

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
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          '@img': resolve(__dirname, 'public/img')
        }
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
