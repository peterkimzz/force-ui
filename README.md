# Force UI

Don't customize theme, just use it.

**Force UI** is vue css framework. Now supports Vue 2.0, but Vue 3.0 soon.

Inspired by **Tailwind CSS**.

## Installation

```zsh
$ yarn add force-ui # or npm add force-ui
$ yarn add @tailwindcss/ui # dependency
```

## Prerequisite

This package depends on **@tailwindcss/ui** package. That supports powerful extenstions and features of **Tailwind CSS** like more specific colors and detail spacing.

So we have to import both **@tailwindcss/ui** and **force-ui/plugin** in order.

```js
// tailwind.config.js

module.exports = {
  // ...
  plugins: [require('@tailwindcss/ui'), require('force-ui/plugin')]
  // ...
}
```

```js
import Vue from 'vue'
import App from './App.vue'

import ForceUI from 'force-ui'
import 'force-ui/dist/force-ui.css'

Vue.use(ForceUI)
```

for `Nuxt.js`

```zsh
$ yarn add -D @nuxtjs/tailwindcss # or npm i -D @nuxtjs/tailwindcss
```

```js
// nuxt.config.js

module.exports {
  // ...
  buildModules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/force-ui' }
  ]
}
```

## Usage

```vue
<template>
  <div>
    <f-button>Hello, Force UI!</f-button>
  </div>
</template>
```
