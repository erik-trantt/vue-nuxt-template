/* eslint-env node */
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  /**
   * tailwindcss v2 now supports 'jit' mode
   */
  mode: ["stg", "prd"].includes(process.env.APP_ENV) ? "jit" : "",
  theme: {
    extend: {
      colors: {
        primary: defaultConfig.theme.colors.green["500"],
      },
      spacing: {
        "1/2": "50%",
        "1/4": "25%",
        "3/4": "75%",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: ["stg", "prd"].includes(process.env.APP_ENV),
    /**
     * tailwindcss v2 now supports 'layers' purge mode
     * recommended to purge utilities, but not base & components
     */
    layers: ["utilities"],
    content: [
      "components/**/*.{vue,js}",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.{js,ts}",
      "nuxt.config.{js,ts}",
    ],
    /**
     * for tailwind v1.9.x, purgecss v2 whitelisting options,
     * example below:
     */
    // options: {
    //   whitelist: ["bg-red-500", "w-1/2"],
    //   whitelistPatterns: [],
    //   whitelistPatternsChildren: [],
    // },

    /**
     * for tailwind v2, purgecss v4 changed from 'whitelist'
     * to 'safelist'.
     * when in 'jit' mode, safelist only supports as an Array of
     * classes at the moment, for examples:
     */
    // safelist: ["bg-red-500", "w-1/2", "text-2xl"],

    /**
     * when not using 'jit' mode, can use PurgeCSS 'options' object
     * to safelist and blocklist classes, see examples below.
     * for all options: https://purgecss.com/configuration.html#configuration-file
     */
    // options: {
    //   safelist: {
    //     standard: ["bg-red-500", "w-1/2", /^text-/],
    //     deep: [/^text-/],
    //     greedy: [],
    //   },
    //   blocklist: ["bg-green-700"],
    // },
  },
};
