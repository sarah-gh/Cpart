<template>
  <div class="home">
    <!-- <header-page></header-page> -->
    <router-view></router-view>
    <!-- <footer-page></footer-page> -->
  </div>
</template>

<script>
import footerPage from '@/resources/components/footer/footer-page/footer-page.vue'
import headerPage from '@/resources/components/header/header-page/header-page.vue'

export default {
  name: 'Home',
  components: {
    footerPage,
    headerPage
  }
}
</script>
