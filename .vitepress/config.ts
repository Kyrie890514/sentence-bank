import { defineConfig } from 'vitepress'
import fs from 'fs'

const books = fs
  .readdirSync('book')
  .map(n => n.slice(0, -3))
  .map(n => ({ link: n, text: n.replace(/\-/g, ' ') }))

export default defineConfig({
  title: 'Sentence Bank',
  themeConfig: {
    nav: [{ text: 'Book', link: '/book/' + books[0].link }],
    sidebar: [
      {
        text: 'Book',
        base: '/book/',
        items: books
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kyrie890514/sentence-bank' }
    ]
  }
})
