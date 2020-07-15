import Vue from "vue";
import App from "./App.vue";

// import ForceUI from "../src/index.js";

import ForceUI from "../dist/force-ui.js";
import "../dist/force-ui.css";

Vue.use(ForceUI);

new Vue({
  render: (createElement) => createElement(App),
}).$mount("#app");
