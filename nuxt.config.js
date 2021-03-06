export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:1337',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'catguild_frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: { dirs: ['~/components', '~/components/icons'] },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://tailwindcss.com/docs
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
    '@nuxtjs/apollo',
  ],

  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://catguild.herokuapp.com/graphql',
        // httpEndpoint: 'http://localhost:1337/graphql',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // https://www.npmjs.com/package/@nuxtjs/markdownit
  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
