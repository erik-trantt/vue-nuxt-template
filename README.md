# codesandbox-nuxt

> Nuxt starter for CodeSandBox (used for https://template.nuxtjs.org)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## For ESLint config

https://typescript.nuxtjs.org/guide/lint/

https://www.npmjs.com/package/eslint-plugin-prettier

https://eslint.vuejs.org/rules/

```jsonc
{
  # ...
  "plugins": [
    "eslint-plugin-prettier",
    "prettier"
  ],
  "extends": [
    # 1st set
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/recommended",
    "plugin:prettier/recommended"

    # or 2nd set
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  "rules": {}
}
```

```json
{
  "root": true,
  "parserOptions": {
    "parser": "@babel/eslint-parser",
    "requireConfigFile": false,
    "sourceType": "module",
    "tsconfigRootDir": "./",
    "project": {
      "extends": "./tsconfig.json",
      "include": ["src/**/*.{js, ts, vue}"]
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "amd": true,
    "es6": true
  },
  "extends": [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "plugins": [],
  "rules": {}
}
```

```json
{
  "root": true,
  "parserOptions": {
    "requireConfigFile": false,
    "sourceType": "module",
    "tsconfigRootDir": "./",
    "project": {
      "extends": "./tsconfig.json",
      "include": ["src/**/*.{js, ts, vue}"]
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "amd": true,
    "es6": true
  },
  "extends": [
    "@nuxtjs/eslint-config-typescript",
    "eslint:recommended",
    "plugin:vue/strongly-recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```


```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": ".",
    "requireConfigFile": false,
    "sourceType": "module",
    "project": {
      "extends": "./tsconfig.json"
    },
    "extraFileExtensions": [".vue"],
    "allowImportExportEverywhere": true
  },
  "env": {
    "browser": true,
    "node": true,
    "amd": true,
    "es6": true
  },
  "plugins": ["@typescript-eslint", "vue", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@nuxtjs/eslint-config-typescript", // will enable this parser: @typescript-eslint/parser
    "plugin:vue/recommended", //https://eslint.vuejs.org/user-guide/#usage -- not supporting @Decorators
    "plugin:prettier/recommended",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```



```json
{
  "name": "vue-nuxt-typescript-decorators",
  "version": "1.0.0",
  "description": "vue/nuxt + typescript + decorators",
  "author": "Nuxt.js Team",
  "private": true,
  "scripts": {
    "dev": "MINIMAL=1 nuxt-ts",
    "build": "nuxt-ts build",
    "lint": "eslint --ext .ts,.js,.vue --ignore-path .gitignore .",
    "lint-fix": "eslint --fix --ext .ts,.js,.vue --ignore-path .gitignore .",
    "lint-soft-fix": "eslint --fix-dry-run --ext .ts,.js,.vue --ignore-path .gitignore .",
    "start": "nuxt-start",
    "generate": "nuxt-ts generate",
    "post-update": "yarn upgrade --latest"
  },
  "eslintConfig": ".eslintrc",
  "dependencies": {
    "@babel/core": "^7.14.3",
    "@babel/eslint-parser": "^7.14.3",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/plugin-proposal-decorators": "^7.14.2",
    "@nuxt/babel-preset-app": "2.15.6",
    "@nuxt/types": "^2.15.0",
    "@nuxt/typescript-build": "^2.1.0",
    "@nuxt/typescript-runtime": "^2.1.0",
    "@nuxtjs/eslint-config-typescript": "^6.0.0",
    "@nuxtjs/eslint-module": "3.0.2",
    "@nuxtjs/tailwindcss": "^3.4.0",
    "@typescript-eslint/eslint-plugin": "4.24.0",
    "@typescript-eslint/parser": "4.24.0",
    "autoprefixer": "^9.0.0",
    "eslint": "^7.27.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-vue": "^7.9.0",
    "nuxt": "^2.15.0",
    "nuxt-mq": "^2.0.2",
    "nuxt-property-decorator": "^2.9.1",
    "nuxt-start": "^2.15.6",
    "postcss": "^7.0.35",
    "prettier": "^2.3.0",
    "vue-class-component": "^7.2.0",
    "vue-property-decorator": "^9.1.0"
  },
  "devDependencies": {},
  "keywords": [
    "vue",
    "nuxt",
    "typescript"
  ]
}
```


```json
// .babelrc
{
  "presets": [],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ]
}
```