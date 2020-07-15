# Force UI

Web UI framework with `tailwindcss`

## Installation

```zsh
$ yarn add force-ui # or npm add force-ui
```

```js
import Vue from "vue";
import App from "./App.vue";

import ForceUI from "force-ui";
import "force-ui/dist/index.css";

Vue.use(ForceUI);
```

```vue
<template>
  <div>
    <div>Hello, {{ ui }}</div>
    <f-button>Press me</f-button>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      ui: "Force UI",
    };
  },
};
</script>

<style scoped>
.container {
  color: green;
}
</style>
```
