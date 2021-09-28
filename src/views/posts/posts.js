import postSummary from '../../resources/components/post/post-summary/post-summary.vue'
import headerNav from '../../resources/components/header/header-nav/header-nav.vue'
import { getCookieByName } from '@/resources/utilities.js';

// import mapGetters from 'vuex'
// import axios from 'axios'
// import { useStore } from 'vuex';

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
                const token = getCookieByName('token');
                if(token){
                    await this.$store.dispatch('article/requestArticleUser');
                } else {
                    await this.$store.dispatch('article/requestArticle');
                }
                // if(this.$store.state.article.article.length > 0){ ////// ??
                    // await this.$store.dispatch('article/requestArticle');
                    // console.log(test);
                // } requestArticleUser
                let response = this.$store.state.article.article;
                // console.log('test')
                // console.log(response);
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