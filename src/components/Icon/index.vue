<template>
  <component :is="GetIcon" class="icon" />
</template>

<script>
import './Alert.vue'
import './ArrowDown.vue'
import './Close.vue'
import './Facebook.vue'
import './Github.vue'
import './Google.vue'
import './Instagram.vue'
import './Pinterest.vue'
import './Plus.vue'
import './Trash.vue'
import './Twitter.vue'
import './User.vue'
import './Selector.vue'
import './Mail.vue'
import './Lock.vue'
import './Search.vue'

export default {
  name: 'FIcon',
  props: {
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    GetIcon() {
      try {
        return () => import(`./${this.icon}.vue`)
      } catch (err) {
        return ''
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.icon {
  @apply w-5 h-5;
}
</style>