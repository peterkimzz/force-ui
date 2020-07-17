import FButton from './components/Button.vue'
import FLink from './components/Link.vue'
import FContainer from './components/Container.vue'

import './index.css'

const install = (Vue, options) => {
  if (install.installed) return

  Vue.component(FButton.name, FButton)
  Vue.component(FLink.name, FLink)
  Vue.component(FContainer.name, FContainer)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { FButton, FLink, FContainer }

export default install
