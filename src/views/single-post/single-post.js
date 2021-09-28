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
            otherPosts: [
                {
                    img: 'Capture1.png',
                    header: 'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.',
                },
                {
                    img: 'Capture2.png',
                    header: 'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.',
                },
                {
                    img: 'Capture3.png',
                    header: 'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.',
                }
            ]
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
        this.testtt();
        //this.getComments();
        const token = getCookieByName('token');
        if(token) {

        }
        else {
            
        }
    },
    // beforeMount() {
        
    // },
    methods: {
        async testtt(){
            try {
                let test = await this.$store.dispatch('article/requestSingleArticle', `${this.$route.params.id}`);
                let response = this.$store.state.article.singleArticle;
                // console.log('test')
                // console.log(test);
                // console.log(response);
                // this.posts = response;
                // this.connection = true;
                // this.load = true;
            } catch (error) {
                // this.connection = false;
                // this.load = true;
                console.log(error);
            }
            
        },
        async getPosts() {
            try {
                const response = await this.axios.get(
                    `http://localhost:8000/api/posts/${this.$route.params.id}`
                ).then((res) => {
                    return res.data; 
                }).catch((err) => {
                    console.error(err);
                });
                const other = await this.axios.get(
                        `http://localhost:8000/api/posts?userid=${response["0"].userid}&limit=3`
                ).then((res) => {
                    return res.data;
                }).catch((err) => {
                    console.error(err);
                });
                const comm = await this.axios.get(
                    `http://localhost:8000/api/comments/${this.$route.params.id}`
                ).then((res) => {
                    return res.data; 
                }).catch((err) => {
                    console.error(err);
                });
                // console.log(other);
                // console.log(comm);
                let post = response;
                this.post = Object.assign(post["0"]);
                this.comment = comm;
                this.load = true;
            } catch (error) {
                console.log(error);
            }
        },
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