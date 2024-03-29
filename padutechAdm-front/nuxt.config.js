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
    '@tabler/core/dist/css/tabler-vendors.min.css',
    'assets/css/treeflex.css'
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
      '~/components/general',
      '~/components/system',
      '~/components/tickets',
      '~/components/users',
      '~/components/clients'

    ]
  },

  toast: {
    position: 'top-right',
    duration: 3000
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
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: {
            url: '/auth/realms/PadutechAdm/protocol/openid-connect/token',
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          },
          user: {
            url: '/auth/realms/PadutechAdm/protocol/openid-connect/userinfo',
            method: 'get'
          },
          logout: false,
        }
      }
    },
    redirect: {
      home: '/',
      logout: '/login'
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

    '/api/users/status': {
      target: 'http://localhost:8000',
      pathRewrite: {'^/api/users/status': '/api/status'}
    },
    '/api/tickets/status': {
      target: 'http://localhost:8001',
      pathRewrite: {'^/api/tickets/status': '/api/status'}
    },


    '/auth': {
      target: 'https://oauth.padutech.ml',
      secure: false
    },
    '/api/users': {
      target: 'http://localhost:8000',
      secure: false
    },
    '/api/clients': {
      target: 'http://localhost:8000',
      secure: false
    },
    '/api/tickets': {
      target: 'http://localhost:8001'
    }
  },
   

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
