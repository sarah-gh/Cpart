<template>
  <div id="app">
    <header-page></header-page>
    <router-view/>
    <footer-page></footer-page>
  </div>
</template>


<script>
import footerPage from '@/resources/components/footer/footer-page/footer-page.vue'
import headerPage from '@/resources/components/header/header-page/header-page.vue'

export default {
  name: 'app',
  components: {
    footerPage,
    headerPage
  }
}
</script>