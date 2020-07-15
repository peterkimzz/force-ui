import FButton from "./components/Button.vue";
import FLink from "./components/Link.vue";
import "./index.css";

const install = (Vue) => {
  if (install.installed) return;

  Vue.component(FButton.name, FButton);
  Vue.component(FLink.name, FLink);
};

// auto install if used in browser
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { FButton, FLink };

export default install;
