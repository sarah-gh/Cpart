
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
        }
    },
    beforeMount(){
        console.log(this.user)
        if(this.$store.state.user.profileUser.about["0"].username == this.user.username ){
            this.not_user = false;
        } else {
            this.not_user = true;
        }
    },
    mounted() {

    },
    methods: {
        followUser() {
            this.follow = !this.follow;
            let status_follow = this.follow ? 1 : 0;
            const data = {
                operation: "follow",
                followingId: this.user.userid,
                status: status_follow
            }
            // JSON.stringify(data)
            this.testtt2(JSON.stringify(data))
        },
        async testtt2(data){
            try{
                await this.$store.dispatch('user/requestfollow', data);
            } catch {
                console.log('error');
            }
        },
    }
}