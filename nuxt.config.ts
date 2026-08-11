import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css', '~/assets/css/path.css'],
  content: {
    experimental: { sqliteConnector: 'native' },
  },
  vite: {
    plugins: [tailwindcss()],
    worker: {
      format: 'es',
    },
  },
  app: {
    head: {
      title: 'Education',
      meta: [{ name: 'description', content: 'Personal progressive coding learner' }],
    },
  },
})
