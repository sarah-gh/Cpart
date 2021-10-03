import postFullContent from '../../resources/components/post/post-full-content/post-full-content.vue';
import postComment from '../../resources/components/post/post-comment/post-comment.vue';
import postThisAuthor from '../../resources/components/post/post-this-author/post-this-author.vue';
import postNewComment from '../../resources/components/post/post-new-comment/post-new-comment.vue';
import { getCookieByName } from '@/resources/utilities.js';

export default {
    name: 'posts-summary',
    data(){
        return {
            items: [1,2,3],
            load : false,
            comment: [],
            post: {},
            otherPosts: [],
            replyto : null
        }
    },
    components: {
        postFullContent,
        postComment,
        postThisAuthor,
        postNewComment
    },
    created() {
        this.getPosts();
        const token = getCookieByName('token');
        if(token) {

        }
        else {
            
        }
    },
    // beforeMount() {
        
    // },
    methods: {
        async getPosts(){
            try {
                const token = getCookieByName('token');
                if(token){
                    console.log()
                    await this.$store.dispatch('article/requestSingleArticleUser' , `${this.$route.params.id}`);
                } else {
                    await this.$store.dispatch('article/requestSingleArticle', `${this.$route.params.id}`);
                }
                // let test = await this.$store.dispatch('article/requestSingleArticle', `${this.$route.params.id}`);
                let response = this.$store.state.article.singleArticle;
                let post = response[0];
                this.post = Object.assign(post["0"]);
                this.comment = this.$store.state.article.comment;
                console.log(this.comment);
                this.otherPosts = this.$store.state.article.otherPosts;
                console.log(this.otherPosts)
                this.load = true;
            } catch (error) {
                this.load = true;
                console.log(error);
            }
            
        },
        
        reply(data){
            this.replyto = data;
        },
        cancel(){
            this.replyto = null
        },
        async addComment(){
            this.getPosts()
            // const access_token = getCookieByName('token');
            // if(access_token) {
            //     const response = await axios.get(`${http}/comments/${this.post.postid}`, {
            //         headers:{
            //             'token': `${access_token}`
            //         }
            //     })
            //         .catch((err) => {
            //         console.error(1,err);
            //     })
            // }
            // return response.data;
        }
        // async getComments() {
        //     try {
        //         const response = await this.$http.get(
        //             `http://localhost:8000/api/v2/comments/${this.$route.params.id}`
        //         );
        //         this.comment = response.data;
        //         console.log(this.comment);
        //         console.log(response.data)
        //     } catch (error) {
        //         console.log('error');
        //         console.log(error);
        //     }
        // },
    }

}