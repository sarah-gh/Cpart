<template>
  <div class="home">
    <header-published></header-published>
    <router-view></router-view>
    <footer-page></footer-page>
  </div>
</template>

<script>
import footerPage from '@/resources/components/footer/footer-page/footer-page.vue'
import headerPublished from '@/resources/components/header/header-published/header-published.vue'

export default {
  name: 'Home',
  components: {
    footerPage,
    headerPublished
  }
}
</script>
