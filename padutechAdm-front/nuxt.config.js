export default {

  server: {
    host: '0'
  },

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
    ],
    bodyAttrs: {
      class: 'layout-fluid'
    }
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
  components: {
    dirs: [
      '~/components',
      '~/components/layout',
      '~/components/profile',
      '~/components/general'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      local: false,
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization: '/auth/realms/PadutechAdm/protocol/openid-connect/auth',
          token: '/auth/realms/PadutechAdm/protocol/openid-connect/token',
          userInfo: '/auth/realms/PadutechAdm/protocol/openid-connect/userinfo',
          logout: '/auth/realms/PadutechAdm/protocol/openid-connect/logout?redirect_uri=' + encodeURIComponent('http://localhost:3000')
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 300
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'padutechAdm-front',
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256'
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    }
  },

  router: {
    middleware: ['auth'],
    linkExactActiveClass: 'active'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxyHeaders: true,
    proxy: true
  },

  proxy: {
    '/auth': {
      target: 'http://localhost:8080'
    },
    '/api/users': {
      target: 'http://localhost:8000'
    },
    '/api/tickets': {
      target: 'http://localhost:8001'
    }
  },
   

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
