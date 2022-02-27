export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'padutechAdm-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        // src: '@tabler/core/dist/js/tabler-min.js', "SE A URL ABAIXO DER PAU, COLOCA ESSE ARQUIVO <---- LOCAL"
        src: 'https://unpkg.com/@tabler/core@latest/dist/js/tabler.min.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@tabler/core/dist/css/tabler.min.css',
    '@tabler/core/dist/css/tabler-flags.min.css',
    '@tabler/core/dist/css/tabler-payments.min.css',
    '@tabler/core/dist/css/tabler-vendors.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
