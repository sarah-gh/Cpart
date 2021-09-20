<template>
  <div id="app">
    <header-page :showheader="showheader"></header-page>
    <router-view />
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
  },
  data() {
    return {
      showheader: false,
    }
  },
  watch:{
    $route (to, from){
      if(to.path.indexOf('register') !== -1){
        this.showheader = false;
      }
      else{
        this.showheader = true;
      }
    }
  },
  methods: {
    
  }
}
</script>