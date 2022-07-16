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
      showheader: true,
    }
  },
  watch:{
    $route (to, from){
        this.update();
    }
  },
  methods: {
    update(){
      let url = window.location.href;
      console.log(url);
      if(url.indexOf('register') !== -1){
        this.showheader = false;
      }
      else{
        this.showheader = true;
      }
    }
  }
}
</script>