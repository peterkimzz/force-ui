# Force UI

Web UI framework with `tailwindcss`

## Installation

```zsh
$ yarn add force-ui # or npm add force-ui
```

## Prerequisite

Below tailwind configuration is **required**!

```js
// tailwind.config.js

module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: '#CC4D29'
      }
    }
  }
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

in `.vue` file

```vue
<template>
  <div>
    <div>Hello, {{ ui }}</div>
    <f-button>Press me</f-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ui: 'Force UI'
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  color: green;
}
</style>
```
