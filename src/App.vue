<template>
  <header-nav />
    <router-view />
  <pie />
</template>

<script>
// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue'
import Pie from '@/components/Pie.vue'

export default {
  name: 'HeadeNav',
  components: {
    HeaderNav,
    Pie
  }
}

</script>

<style lang="scss">

</style>
