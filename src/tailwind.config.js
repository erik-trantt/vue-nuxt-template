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
     * tailwindcss v2 now supports `layers` purge mode
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
     * ===== TailwindCSS v1.9.x =====
     * TailwindCSS v1.9.x allows passing `options` object
     * that will pass to PurgeCSS. It follows PurgeCSS v1 options:
     * https://v1.purgecss.com/configuration#options
     *
     * For examples:
     */
    // options: {
    //   whitelist: ["bg-red-500", "w-1/2"],
    //   whitelistPatterns: [/^text-/],
    //   whitelistPatternsChildren: [],
    // },

    /**
     * ===== TailwindCSS v2.x =====
     * TailwindCSS v2 uses Purgecss v4.
     * Purgecss v4 changes from `whitelist` to `safelist`.
     * See all options: https://purgecss.com/configuration.html#options
     * TailwindCSS v2 introduces its own `safelist` object, instead of passing
     * `options` object to PurgeCSS like in v1.9.x.
     *
     * When in 'jit' mode, `safelist` only supports an Array of
     * classes at the moment. For examples:
     */
    // safelist: ["bg-red-500", "w-1/2"],

    /**
     * When not using 'jit' mode, can use TailwindCSS `safelist` object or
     * PurgeCSS `options` object to safelist and blocklist classes.
     * TailwindCSS `safelist` object can take the same format as PurgeCSS
     * `options` object.
     *
     * For examples:
     */
    // options: {
    //   safelist: {
    //     standard: ["bg-red-500", "w-1/2", /^text-/],
    //     deep: [],
    //     greedy: [],
    //   },
    //   blocklist: [/^bg-green-/],
    // },
  },
};
