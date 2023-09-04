<template>
  <div id="app">
    <header-page :showheader="showheader" :login="login" :photo="photo"></header-page>
    <router-view />
    <footer-page></footer-page>
  </div>
</template>

<script>
import footerPage from '@/resources/components/footer/footer-page/footer-page.vue'
import headerPage from '@/resources/components/header/header-page/header-page.vue'

import { getCookieByName } from '@/resources/utilities.js'

export default {
  name: 'app',
  components: {
    footerPage,
    headerPage
  },
  data () {
    return {
      showheader: true,
      login: false,
      profile: [],
      photo: ''
    }
  },
  beforeMount: async function () {
    const c = getCookieByName('token')
    console.log('getCookieByName', c)
    if (c) {
      this.$store.state.login = true
    } else {
      this.$store.state.login = false
    }
  }
}
</script>
