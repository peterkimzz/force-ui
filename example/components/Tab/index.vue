<template>
  <f-tab :items="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Installation',
          href: '/'
        },
        {
          title: 'Components',
          href: '/components'
        },
        {
          title: 'Examples',
          href: '/examples'
        }
      ]
    }
  }
}
</script>