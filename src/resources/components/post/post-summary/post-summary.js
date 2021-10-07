import { getCookieByName } from '@/resources/utilities.js';

export default {
    name: 'posts-summary',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            title_route: '',
            text : '',
            save : false,
            follow: false,
            not_user: true,
        }
    },
    created() {
        this.save = this.post.issaved == '0' ? false : true;
        this.follow = this.post.isfollowing == '1' ? true : false;
    },
    beforeMount(){
        this.text = this.post.artcletext;
        if (this.post.artcletext.length > 180) {
            this.text = this.text.substring(0, 175) + "...";
        }
        if(this.$store.state.login){
            if(this.$store.state.user.profileUser.about["0"].userid == this.post.userid ){
                this.not_user = false;
            } else {
                this.not_user = true;
            }
        }
    },
    mounted() {
    },
    methods: {
        async testtt(data){
            try {
                let test = await this.$store.dispatch('user/requestPostBookmark', data);
            } catch (error) {
                console.log(error);
            }
        },
        async testtt2(data){
            try{
                await this.$store.dispatch('user/requestfollow', data);
            } catch {
                console.log('error');
            }
        },
        saveItem(){
            this.save = !this.save;
            let status_save = this.save ? 1 : 0;
            const data = {
                operation: "save" ,
                csrfToken: this.$store.state.user.csrfToken,
                articleId: this.post.articleid,
                status: status_save
            }
            console.log(data);
            this.testtt(JSON.stringify(data))
        },
        followUser() {
            this.follow = !this.follow;
            let status_follow = this.follow ? 1 : 0;
            const data = {
                operation: "follow",
                csrfToken: this.$store.state.user.csrfToken,
                followingId: this.post.userid,
                status: status_follow
            }
            this.testtt2(JSON.stringify(data))
        },
        routeName(item){
            return `/panel/profile/${item.userid}`
        },
        routeTitle(item){
            const token = getCookieByName('token');
            if(token){
                return `/post/${item.articleid}`
            }
            else {
                return `/post/${item.articleid}`
            }
        }
      }
}