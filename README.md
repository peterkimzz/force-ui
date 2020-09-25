# Force UI

Don't customize theme, just use it.

The goal of Force UI is supporting 100% designed component for responsive UI without any complex customization.

**Force UI** is CSS framework for Vue. Now supported in Vue 2.0, but Vue 3.0 soon.

Made by **Tailwind CSS** for styling, **Heroicons** for vector icons.

## Live demo

Please check this [link](https://force-ui.vercel.app/).

## Installation

```zsh
$ yarn add force-ui
$ yarn add tailwindcss @tailwindcss/ui # required dependencies
```

## Prerequisite

This package depends on **tailwindcss** and **@tailwindcss/ui** packages.

`tailwind.config.js` file has to be located in your project root directory, and imports the plugins.

If you are not friendly to Tailwind, read official [documenation](https://tailwindcss.com/docs/installation) first.

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

for `Nuxt.js` (Recommended)

```zsh
$ yarn add force-ui
$ yarn add @nuxtjs/tailwindcss @tailwindcss/ui
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

## Documentation

Coming soon.
