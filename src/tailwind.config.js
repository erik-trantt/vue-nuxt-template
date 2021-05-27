/* eslint-env node */
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
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
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
};
