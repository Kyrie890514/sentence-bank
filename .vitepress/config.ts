import { defineConfig } from 'vitepress'
import fs from 'fs'

const books = fs
  .readdirSync('book')
  .map(n => n.slice(0, -3))
  .map(n => ({ link: n, text: n.replace(/\-/g, ' ') }))

export default defineConfig({
  lang: 'en-US',
  title: 'Sentence Bank',
  base: '/sentence-bank/',
  description: "Kyrie890514's Sentence Bank",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/nana.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: "Kyrie890514's Sentence Bank" }]
  ],
  themeConfig: {
    logo: { src: '/nana.png', width: 24, height: 24 },
    nav: [
      {
        text: 'Book',
        link: '/book/The-Almanack-Of-Naval-Ravikant',
        activeMatch: '/book/'
      }
    ],
    sidebar: [
      {
        text: 'Book',
        base: '/book/',
        items: books
      }
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/Kyrie890514/sentence-bank/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kyrie890514/sentence-bank' }
    ]
  }
})
