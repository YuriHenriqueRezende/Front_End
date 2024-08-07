// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript:{
    typeCheck: true
  },
  modules: [
    'nuxt-primevue'
  ],
  primevue:{
    components:{
      include:: ['button', 'Avatar']
    }
  }
})