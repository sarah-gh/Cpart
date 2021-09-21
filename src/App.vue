<template>
  <div id="app">
    <header-page :showheader="showheader" :login="login" :photo="photo" @loginprofile="onclickLogin"></header-page>
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
          localStorage.id = 4;
      } catch (error) {
          console.log(error);
      }
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
  beforeMount(){
    
  }
}
</script>