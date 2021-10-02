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
        this.follow = this.post.arefollowing == '1' ? true : false;
    },
    beforeMount(){
        this.text = this.post.artcletext;
        if (this.post.artcletext.length > 180) {
            this.text = this.text.substring(0, 175) + "...";
        }

        if(this.$store.state.user.profileUser.about["0"].userid == this.post.userid ){
            this.not_user = false;
        } else {
            this.not_user = true;
        }
    },
    mounted() {
        // console.log(this.post)
    },
    methods: {
        async testtt(data){
            try {
                let test = await this.$store.dispatch('user/requestPostBookmark', data);
                // console.log(test);
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
                articleId: this.post.articleid,
                status: status_save
            }
            // JSON.stringify(data)
            this.testtt(JSON.stringify(data))
            //this.$emit('save_item', 'donbalkonande')
        },
        followUser() {
            this.follow = !this.follow;
            let status_follow = this.follow ? 1 : 0;
            const data = {
                operation: "follow",
                followingId: this.post.userid,
                status: status_follow
            }
            // JSON.stringify(data)
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