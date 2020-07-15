import Vue from "vue";
import App from "./App.vue";

import ForceUI from "../dist/force-ui.common.js";
import "../dist/force-ui.css";

Vue.use(ForceUI);

new Vue({
  render: (createElement) => createElement(App),
}).$mount("#app");
