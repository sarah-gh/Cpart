import user from "../../../../services/user";

export default {
    name: 'profile-header',
    props: {
        user: {
            type: Object,
            required: false
        }
    },
    data(){
        return {
            not_user : true,
            follow: false,
            userphoto : ''
        }
    },
    beforeMount(){
        this.follow = this.user.isfollowing == '1' ? true : false;
        if(this.$store.state.user.profileUser.about["0"].username == this.user.username ){
            this.not_user = false;
        } else {
            this.not_user = true;
        }
        if(this.user.userphoto == null){
            this.userphoto = 'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg';
        } else {
            this.userphoto = this.user.userphoto
        }
    },
    mounted() {

    },
    computed: {
        getImg(){
            this.userphoto = this.user.userphoto;
            return ""
        }
    },
    methods: {
        followUser() {
            this.follow = !this.follow;
            let status_follow = this.follow ? 1 : 0;
            const data = {
                operation: "follow",
                csrfToken: this.$store.state.user.csrfToken,
                followingId: this.user.userid,
                status: status_follow
            }
            // JSON.stringify(data)
            this.getData2(JSON.stringify(data))
        },
        async getData2(data){
            try{
                await this.$store.dispatch('user/requestfollow', data);
            } catch {
                console.log('error');
            }
        },
    }
}