import Button from "./Button.vue";
import Link from "./Link.vue";

const install = (Vue) => {
  if (install.installed) return;

  Vue.component(Button.name, Button);
  Vue.component(Link.name, Link);
};

// auto install if used in browser
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { Button, Link };

export default install;
