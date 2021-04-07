const path = require('path');
module.exports = {
    base: '/react-source-read/',
    title: 'Hello VuePress',
    description: 'This is a vueprees page',
    // dest: './dist',
    configureWebpack: {
        resolve: {
            alias: {
                '@img': path.resolve(__dirname, 'public/img')
            }
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
                ],
                sidebar: {
                    '/': [/* ... */],
                    '/nested/': [/* ... */]
                }
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: '嵌套', link: '/zh/nested/' }
                ],
                sidebar: {
                    '/zh/': [/* ... */],
                    '/zh/nested/': [/* ... */]
                }
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        // '/': {
        //     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        //     title: 'VuePress',
        //     description: 'Vue-powered Static Site Generator'
        // },
        // '/zh/': {
        //     lang: 'zh-CN',
        //     title: 'VuePress',
        //     description: 'Vue 驱动的静态网站生成器'
        // }
    }
};