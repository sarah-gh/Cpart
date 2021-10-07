
import headerSearch from '../header-search/header-search.vue'
import { delete_cookie } from '@/resources/utilities.js';
import { locale } from 'core-js';

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
    computed: {
        isLogin(){
            if(this.$store.state.login){
                this.getData();
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
            this.$router.replace({ path: '/panel/profile/0' });
        },
        async getData(){
            try{
                await this.$store.dispatch('user/requestProfileUser');
                this.userLogin = this.$store.state.user.profileUser.about["0"];
                if(this.userLogin.userphoto == null){
                    this.userLogin.userphoto = 'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg';
                }
            } catch {
                console.log(error);
            }
        },
        async exit(){
            await this.$cookies.remove("token");
            location.reload();
            
        }
    },
    components:{
        headerSearch
    },
    watch: { 
        login: function(newVal, oldVal) { // watch it
            this.local_login = newVal;
        },
        showheader: function(newVal, oldVal) { // watch it
            this.show_header = newVal;
        },
    }
}

