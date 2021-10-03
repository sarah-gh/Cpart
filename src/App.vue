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

import { getCookieByName } from '@/resources/utilities.js';

export default {
  name: 'app',
  components: {
    footerPage,
    headerPage,
  },
  data() {
    return {
      showheader: true,
      login: false,
      profile: [],
      photo: ''
    }
  },
  methods: {
    getCsrfToken: async function (){
      const access_token = getCookieByName('token')
      const response = await this.axios.get('http://localhost:8000/api/users/csrf', {
        headers:{
          token: access_token
        }
      }).catch(err => console.log(err))

      this.$store.state.user.csrfToken = response.data.csrfToken;
    }

  },
  mounted: async function(){
    const c = getCookieByName('token');
    if(c){
      this.$store.state.login = true;
      await this.getCsrfToken()
    }
    else {
      this.$store.state.login = false;
    }
  },
  // watch:{
  //   $route (to, from){
  //     console.log(to.path);
  //     let token = getCookieByName('token')
  //     if(to.path.indexOf('authentication') !== -1){
  //       this.login = true;
  //       this.showheader = false;
  //     }
  //     console.log('token-log')
  //     console.log(token);
  //     if(token){
  //       console.log('token')
  //       this.login = true;
  //       this.showheader = true;
  //     } else{
  //       if(to.path.indexOf('authentication') !== -1){
  //         this.login = true;
  //       } else {
  //         console.log('not token')
  //         this.login = false;
  //         this.showheader = false;
  //       }
  //     }
  //   }
  // },
  beforeMount(){
    
  }
}
</script>