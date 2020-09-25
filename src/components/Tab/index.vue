<template>
  <div class="f-tab">
    <f-tab-item
      v-for="item in items"
      :key="item.title"
      :active="selected === item.title"
      @click="OnItem"
      >{{ item.title }}</f-tab-item
    >
  </div>
</template>

<script>
export default {
  name: 'FTab',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'route'
    }
  },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    OnItem(tabText) {
      this.selected = tabText

      if (this.type === 'route') {
        const item = this.items.find((item) => item.title === tabText)
        return this.$router.push(item.href)
      }

      this.$emit('on-click', tabText)
    }
  },
  mounted() {
    if (this.items.length) {
      this.selected = this.items[0].title
    }

    if (this.type === 'route') {
      const item = this.items.find((item) => item.href === this.$route.path)
      this.selected = item.title
    }
  }
}
</script>