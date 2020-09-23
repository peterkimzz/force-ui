import vClickOutside from 'v-click-outside'

import FContainer from './components/Container'
import FFormContainer from './components/Container/Form'
import FButton from './components/Button'
import FLink from './components/Link'
import FInput from './components/Input'
import FHeading from './components/Heading'
import FDivider from './components/Divider'
import FCheckbox from './components/Checkbox'
import FRadio from './components/Radio'

import FSlide from './components/Slide'
import FModal from './components/Modal'
import FDialog from './components/Dialog'

const install = (Vue, options) => {
  if (install.installed) return

  Vue.component(FContainer.name, FContainer)
  Vue.component(FFormContainer.name, FFormContainer)

  Vue.component(FButton.name, FButton)
  Vue.component(FLink.name, FLink)
  Vue.component(FInput.name, FInput)
  Vue.component(FHeading.name, FHeading)
  Vue.component(FDivider.name, FDivider)
  Vue.component(FCheckbox.name, FCheckbox)
  Vue.component(FRadio.name, FRadio)

  Vue.component(FSlide.name, FSlide)
  Vue.component(FModal.name, FModal)
  Vue.component(FDialog.name, FDialog)

  Vue.use(vClickOutside)
}

export {
  FContainer,
  FFormContainer,
  FButton,
  FLink,
  FInput,
  FHeading,
  FDivider,
  FCheckbox,
  FRadio,
  FSlide,
  FDialog,
  FModal
}

export default install
