/* eslint-env node */
import { NuxtConfig } from "@nuxt/types";

const nuxtConfig: NuxtConfig = {
  /**
   * Headers of the page
   * Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        // Firefox browser uses a different way to detect favicon
        hid: "shortcut icon",
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  srcDir: "src/",

  build: {
    transpile: [],
    postcss: {
      order: "presetEnvAndCssnanoLast",
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  /**
   * Nuxt.js modules
   * Doc: https://modules.nuxtjs.org
   */
  modules: [],

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/eslint-module",
    "@nuxtjs/pwa",
    "@nuxtjs/tailwindcss",
  ],

  /**
   * Global CSS
   * Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /**
   * TailwindCSS paths are auto-detected using default paths:
   * - cssPath: assets/css/tailwind.css
   * - configPath: tailwind.config.js
   * Because `srcDir: "src/"`, "~/assets/css/tailwind.css" will be parsed to
   * "src/assets/css/tailwind.css". That fits current folder structure.
   */
  // tailwindcss: {
  //   cssPath: "~/assets/css/tailwind.css",
  //   configPath: "~/tailwind.config.js",
  // exposeConfig: true,
  // config: {}, // extend tailwind config here
  // },

  pwa: {
    icon: false,
  },

  /**
   * Module options for @nuxtjs/eslint-config-typescript.
   * Enable linting during runtime.
   * https://typescript.nuxtjs.org/guide/lint/#runtime-lint
   */
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },

  /**
   * Plugins to load before mounting the App
   * Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: ["~/plugins/vue-mq", "~/plugins/pwa-refresh.client"],
};

export default nuxtConfig;
