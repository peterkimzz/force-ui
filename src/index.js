import vClickOutside from 'v-click-outside'

import FContainer from './components/Container'
import FFormContainer from './components/Container/Form'
import FFormFlexContainer from './components/Container/FormFlex'
import FInputContainer from './components/Container/Input'

import FIcon from './components/Icon'
import FTitle from './components/Title'
import FImage from './components/Image'
import FButton from './components/Button'
import FTag from './components/Tag'
import FLink from './components/Link'
import FInput from './components/Input'
import FHeading from './components/Heading'
import FDivider from './components/Divider'
import FCheckbox from './components/Checkbox'
import FRadio from './components/Radio'
import FCopyright from './components/Copyright'

import FSlide from './components/Slide'
import FModal from './components/Modal'
import FDialog from './components/Dialog'

import FNavigationBar from './components/NavigationBar'
import FNavigationBarItem from './components/NavigationBar/Item'

const install = (Vue, options) => {
  if (install.installed) return

  Vue.component(FContainer.name, FContainer)
  Vue.component(FFormContainer.name, FFormContainer)
  Vue.component(FFormFlexContainer.name, FFormFlexContainer)
  Vue.component(FInputContainer.name, FInputContainer)

  Vue.component(FTitle.name, FTitle)
  Vue.component(FImage.name, FImage)
  Vue.component(FButton.name, FButton)
  Vue.component(FTag.name, FTag)
  Vue.component(FLink.name, FLink)
  Vue.component(FInput.name, FInput)
  Vue.component(FHeading.name, FHeading)
  Vue.component(FDivider.name, FDivider)
  Vue.component(FCheckbox.name, FCheckbox)
  Vue.component(FRadio.name, FRadio)
  Vue.component(FCopyright.name, FCopyright)

  Vue.component(FIcon.name, FIcon)

  Vue.component(FSlide.name, FSlide)
  Vue.component(FModal.name, FModal)
  Vue.component(FDialog.name, FDialog)

  Vue.component(FNavigationBar.name, FNavigationBar)
  Vue.component(FNavigationBarItem.name, FNavigationBarItem)

  Vue.use(vClickOutside)
}

export {
  FContainer,
  FFormContainer,
  FFormFlexContainer,
  FInputContainer,

  FTitle,
  FImage,
  FButton,
  FTag,
  FLink,
  FInput,
  FHeading,
  FDivider,
  FCheckbox,
  FRadio,
  FCopyright,

  FSlide,
  FDialog,
  FModal,

  FNavigationBar,
  FNavigationBarItem
}

export default install
