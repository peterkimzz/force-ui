<template>
  <f-tab :items="items" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Components',
          href: '/'
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