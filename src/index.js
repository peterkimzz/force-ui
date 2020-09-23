import FContainer from './components/Container'
import FFormContainer from './components/Container/Form'
import FButton from './components/Button'
import FLink from './components/Link'
import FInput from './components/Input'
import FHeading from './components/Heading'
import FDivider from './components/Divider'
import FCheckbox from './components/Checkbox'
import FRadio from './components/Radio'

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
}

export { FContainer, FFormContainer, FButton, FLink, FInput, FHeading, FDivider, FCheckbox, FRadio }

export default install
