/* eslint-env node */
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  /**
   * TailwindCSS v2 now supports 'jit' mode
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
     * TailwindCSS v2 now supports `layers` purge mode
     * recommended to purge 'utilities', but not 'base' & 'components'
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
     * ===== Preserve classes in TailwindCSS v1.9.x =====
     * TailwindCSS v1.9.x allows passing `options` object
     * that will pass to PurgeCSS. It follows PurgeCSS v1 options:
     * https://v1.purgecss.com/configuration#options
     *
     * For examples:
     */
    options: {
      whitelist: ["bg-red-500", "w-1/2"],
      whitelistPatterns: [/^text-/],
      whitelistPatternsChildren: [],
    },

    /**
     * ===== Preserve classes in TailwindCSS v2.x =====
     * TailwindCSS v2 uses Purgecss v4.
     * PurgeCSS v4 combined `whitelist`, `whitelistPatterns`,
     * `whitelistPatternsChildren` into `options.safelist`.
     * See all options: https://purgecss.com/configuration.html#options
     *
     * TailwindCSS v2 introduces its own top-level option `safelist` that will
     * be passed to PurgeCSS when compiling.
     * https://tailwindcss.com/docs/optimizing-for-production#safelisting-specific-classes
     *
     * When in 'jit' mode, only TailwindCSS `safelist` is in effect and
     * PurgeCSS `options` will not; and it only supports an Array of classes
     * at the moment. Read more at
     * https://github.com/tailwindlabs/tailwindcss/blob/master/src/jit/lib/setupWatchingContext.js#L197-L214.
     * For example:
     */
    // safelist: ["bg-red-500", "w-1/2"],

    /**
     * When NOT using 'jit' mode, `safelist` can take the same format as
     * PurgeCSS `options.safelist` object.
     * For example:
     */
    // safelist: {
    //   standard: ["bg-red-500", "w-1/2", /^text-/],
    //   deep: [],
    //   greedy: [],
    // },

    /**
     * Otherwise, can still use PurgeCSS `options` object to safelist and
     * blocklist classes. It will override TailwindCSS `safelist` if use at
     * the same time. It will not have any effects when in 'jit' mode.
     * For example:
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
