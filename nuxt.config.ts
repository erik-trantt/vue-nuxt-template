/* eslint-env node */

export default {
  dev: process.env.NODE_ENV !== "production",
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  srcDir: "src/",

  build: {
    transpile: [],
  },

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [],

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
  ],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.js",
    exposeConfig: true,
    // config: {}, // extend tailwind config here
  },

  /**
   ** Module options for @nuxtjs/eslint-config-typescript.
   ** Enable linting during runtime.
   ** https://typescript.nuxtjs.org/guide/lint/#runtime-lint
   */
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },

  /**
   ** Module options for @nuxtjs/eslint-module
   ** https://github.com/nuxt-community/eslint-module
   */
  eslint: {},

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [],
};
