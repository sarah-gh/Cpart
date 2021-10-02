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
                let test = await this.$store.dispatch('article/requestSingleArticle', `${this.$route.params.id}`);
                let response = this.$store.state.article.singleArticle;
                // console.log('test')
                // console.log(test);
                let post = response[0];
                this.post = Object.assign(post["0"]);
                this.comment = response[2];
                console.log(this.comment);
                // this.comment = Object.assign(comment["0"]);
                // this.comment = Object.assign(response[2]["0"]);
                this.otherPosts = response[1]
                console.log(this.otherPosts)
                // this.otherPosts = Object.assign(other["0"]);
                // this.posts = response;
                // this.connection = true;
                this.load = true;
            } catch (error) {
                // this.connection = false;
                this.load = true;
                console.log(error);
            }
            
        },
        
        reply(data){
            this.replyto = data;
        },
        cancel(){
            this.replyto = null
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