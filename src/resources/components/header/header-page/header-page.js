
import headerSearch from '../header-search/header-search.vue'
import { getCookieByName } from '@/resources/utilities.js';

export default {
    name: 'header-page',
    props: {
        showheader: {
            type: Boolean,
            default: false,
        },
        login: {
            type: Boolean,
            default: false,
        },
        photo: {
            type: String,
        },
        user: {
            type: Object
        }
    },
    data(){
        return {
            isVisible : false,
            firstExample: 0,
            secondExample: 0,
            thirdExample: 0,
            fourthExample: 0,
            isVisibleSearch : false,
            local_login: false,
            show_header: false,
            userLogin: {
                userphoto: 'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg',
                fname: '',
                lname: '',
                username : ''
            },
            ppp: '',
            
        }
    },
    // beforeMount(){
    //     this.local_login = this.login;
    //     // console.log('local_login');
    //     // console.log(this.local_login);
    // },
    // mounted () {
    //     console.log('this.user')
    //     console.log(this.user)
    // },
    computed: {
        isLogin(){
            if(this.$store.state.login){
                this.testtt();
                return '';
            }
            return '';
        }
    },
    methods: {
        clickIsVisibleSearch(){
            this.isVisibleSearch = !this.isVisibleSearch;
        },
        profileuser(){
            // this.$router.replace('panel/profile/0')
            // this.$router.replace({ path: '/panel/profile/0' });
            this.$router.replace({ path: '/panel/profile/0' });
        },
        async testtt(){
            try{
                await this.$store.dispatch('user/requestProfileUser');
                this.userLogin = this.$store.state.user.profileUser.about["0"];
                // console.log(this.userLogin);
            } catch {
                console.log(error);
            }
          }
    },
    components:{
        headerSearch
    },
    watch: { 
        login: function(newVal, oldVal) { // watch it
            this.local_login = newVal;
            // console.log('Prop login changed: ', newVal, ' | was: ', oldVal)
        },
        showheader: function(newVal, oldVal) { // watch it
            this.show_header = newVal;
            // console.log('Prop showheader changed: ', newVal, ' | was: ', oldVal)
        },
    }
}

