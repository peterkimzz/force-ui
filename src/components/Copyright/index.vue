<template>
  <span>© {{ GetYear }} {{ title }}. All right reserved.</span>
</template>

<script>
export default {
  name: 'FCopyright',
  props: {
    title: {
      type: String,
      default: null,
      required: true
    }
  },
  computed: {
    GetYear() {
      return new Date().getFullYear()
    }
  }
}
</script>