import profileHeader from '@/resources/components/profile/profile-header/profile-header.vue'
import profileNav from '@/resources/components/profile/profile-nav/profile-nav.vue'
export default {
    name: "profile",
    data(){
        return {

        }
    },
    components:{
        profileHeader,
        profileNav
    },
    methods: {
        onClickNav(data){
            console.log(data);
        }
    },
    beforeMount() {
        console.log(this.$route.params.id);
    },
}