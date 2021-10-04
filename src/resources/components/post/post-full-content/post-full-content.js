
export default {
    name: 'post-full',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            title_route: '',
            like_icon: ['far', 'thumbs-up'],
            save : false,
            follow: false,
        }
    },
    mounted() {
        setTimeout(() => {
            // console.log(this.post);
        }, 3000);
    },
    created() {
        console.log(this.post)
        this.save = this.post.issaved == '0' ? false : true;
        this.follow = this.post.isfollowing == '0' ? false : true;
    },
    computed: {
        is_save(){
            this.save = this.post.issaved == '0' ? false : true;
            this.follow = this.post.isfollowing == '0' ? false : true;
        }
    },
    methods: {
        saveItem(){
            this.save = !this.save;
            let status_save = this.save ? 1 : 0;
            const data = {
                operation: "save" ,
                csrfToken: this.$store.state.user.csrfToken,
                articleId: this.post.articleid,
                status: status_save
            }
            this.testtt(JSON.stringify(data))
        },
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
        followUser() {
            this.follow = !this.follow;
            let status_follow = this.follow ? 1 : 0;
            const data = {
                operation: "follow",
                csrfToken: this.$store.state.user.csrfToken,
                followingId: this.post.userid,
                status: status_follow
            }
            // JSON.stringify(data)
            this.testtt2(JSON.stringify(data))
        },
        clickLike(){
            if(this.like_icon[0] == 'fas'){
                this.like_icon[0] = 'far';
            } else {
                this.like_icon[0] = 'fas';
            }
        }
    },
}