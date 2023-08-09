import { defineConfig } from 'vitepress'
import fs from 'fs'

const books = fs
  .readdirSync('book')
  .map(n => n.slice(0, -3))
  .map(n => ({ link: n, text: n.replace(/\-/g, ' ') }))

export default defineConfig({
  lang: 'en-US',
  title: 'Sentence Bank',
  description: "Kyrie890514's Sentence Bank",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Book', link: '/book/' + books[0].link, activeMatch: '/book/' }
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
