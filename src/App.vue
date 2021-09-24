<template>
  <div id="app">
    <header-page v-if="!login" :showheader="showheader" :login="login" :photo="photo"></header-page>
    <header-page-login v-else :showheader="showheader" :login="login" :photo="photo"></header-page-login>

    <router-view />
    <footer-page></footer-page>
  </div>
</template>


<script>
import footerPage from '@/resources/components/footer/footer-page/footer-page.vue'
import headerPage from '@/resources/components/header/header-page/header-page.vue'
import headerPageLogin from '@/resources/components/header/header-page-login/header-page-login.vue'

import { getCookieByName } from '@/resources/utilities.js';

export default {
  name: 'app',
  components: {
    footerPage,
    headerPage,
    headerPageLogin
  },
  data() {
    return {
      showheader: true,
      login: false,
      profile: [],
      photo: ''
    }
  },
  emits: ["loginprofile"],
  methods: {
    onclickLogin(){
      this.login_profile()
    },
    
    async login_profile(){
      this.login = true;
      try {
          const response = await this.axios.get(
              `http://localhost:8000/api/users/profile/4`
          ).then((res) => {
              return res.data; 
          }).catch((err) => {
              console.error(err);
          });
          this.profile = response;
          this.photo = this.profile.about["0"].userphoto;
          console.log(this.profile.about["0"].userphoto);
      } catch (error) {
          console.log(error);
      }
    }
  },
  watch:{
    $route (to, from){
      console.log(to.path);
      let token = getCookieByName('token')
      if(to.path.indexOf('authentication') !== -1){
        this.login = true;
        this.showheader = false;
      }
      console.log('token-log')
      console.log(token);
      if(token){
        console.log('token')
        this.login = true;
        this.showheader = true;
      } else{
        if(to.path.indexOf('authentication') !== -1){
          this.login = true;
        } else {
          console.log('not token')
          this.login = false;
          this.showheader = false;
        }
      }
    }
  },
  beforeMount(){
    
  }
}
</script>