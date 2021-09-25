import postSummary from '../../resources/components/post/post-summary/post-summary.vue'
import headerNav from '../../resources/components/header/header-nav/header-nav.vue'
// import mapGetters from 'vuex'
// import axios from 'axios'
// import { useStore } from 'vuex';
import { getCookieByName } from '@/resources/utilities.js';

export default {
    name: 'posts-summary',
    data(){
        return {
            myQuery: 1234,
            summary: true,
            isPublic: false,
            load: false,
            connection: true,
            posts: [],
        }
    },
    components: {
        postSummary,
        headerNav
    },
    computed: {
        
    },
    created() {
        //this.getPosts();
        this.testtt()
    },
    beforeMount() {
        
    },
    methods: {
        async testtt(){
            try {
                let cookie = getCookieByName('token');
                let response
                if(cookie.token){ ////// ??
                    await this.$store.dispatch('article/requestArticleUser');
                    response = this.$store.state.article.articleUser;
                } else {
                    await this.$store.dispatch('article/requestArticle');
                    response = this.$store.state.article.article;
                }
                
                console.log('test')
                console.log(response);
                this.posts = response;
                this.connection = true;
                this.load = true;
            } catch (error) {
                this.connection = false;
                this.load = true;
                console.log(error);
            }
            
        },
        async getPosts() {
            // try {
            //     const response = await this.axios.get(
            //         "http://localhost:8000/api/posts"
            //     ).then((res) => {
            //         return res.data;
            //     });
            //     this.posts = response;
            //     this.connection = true;
            //     this.load = true;
            // } catch (error) {
            //     this.connection = false;
            //     this.load = true;
            //     console.log(error);
            // }
        },
        onClickNav(data){
            this.summary = !this.summary;
            //console.log(data);
        }
    },
}