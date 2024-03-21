
import { routes } from "./routes.js";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-project',
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
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',z
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // router: {routes
  //   extendRoutes(nuxtRoutes) {
  //     nuxtRoutes.push(...routes);
  //   }
  // }
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'contact',
  //       path: '/contact',
  //       component: resolve(__dirname, 'components/contact.vue')
  //     })
  //   }
  // }
  
  router: {
    extendRoutes(nuxtRoutes, resolve) {
        // Make sure routes is defined and not empty
        if (Array.isArray(routes) && routes.length > 0) {
            routes.forEach(route => {
                // Check if route with the same name already exists
                if (!nuxtRoutes.some(existingRoute => existingRoute.name === route.name)) {
                    nuxtRoutes.push({
                        name: route.name,
                        path: route.path,
                        component: route.component
                    });
                }
            });
        }
    }
},
app: {
  pageTransition: { name: 'about', mode: 'out-in' }
}
}
