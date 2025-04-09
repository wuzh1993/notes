import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/note/',
  title: '吴自豪的前端博客',
  lang: 'zh-CN',
  description: '吴自豪的前端博客',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '本页目录', // 目录标题
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    search: {
      provider: 'local', // 使用本地搜索
      options: {
        translations: {
          button: {
            buttonText: '搜索文档', // 搜索按钮文本
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '找不到相关结果', // 无结果时的提示
            resetButtonTitle: '清除查询条件', // 清除按钮提示
            footer: {
              selectText: '选择...', // 下拉菜单提示
              navigateText: '使用方向键导航', // 导航提示
            },
          },
        },
      },
    },
    nav: [
      // { text: 'Home', link: '/typescript' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'typescript', link: '/zh/typescript' },
          { text: 'javascript', link: '/zh/javascript' },
          { text: 'NestJS', link: '/zh/nestjs' },
          { text: '为何要使用pnpm', link: '/zh/pnpm' },
          { text: '为何要使用Monorepo', link: '/zh/Monorepo' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
