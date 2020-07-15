import Button from "./Button.vue";

const install = (Vue) => {
  if (install.installed) return;

  Vue.component(Button.name, Button);
};

// auto install if used in browser
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { Button };

export default install;
