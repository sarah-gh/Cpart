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
            msg: ''
        }
    },
    components: {
        postSummary,
        headerNav
    },
    computed: {
        
    },
    created() {
        // this.getPostsFollowing();
        this.getPostsProposed()
    },
    beforeMount() {
        
    },
    methods: {
        async getPostsProposed(){
            try {
                const token = getCookieByName('token');
                if(token){
                    await this.$store.dispatch('article/requestArticleUser');
                } else {
                    await this.$store.dispatch('article/requestArticle');
                }
                let response = this.$store.state.article.article;
                this.posts = response;
                this.connection = true;
                this.load = true;
            } catch (error) {
                this.connection = false;
                this.load = true;
                console.log(error);
            }  
        },
        async getPostsFollowing(){
            try {
                const token = getCookieByName('token');
                await this.$store.dispatch('article/requestArticleUserfollow');
                let response = this.$store.state.article.article;
                this.posts = response;
                this.connection = true;
                this.load = true;
            } catch (error) {
                this.connection = false;
                this.load = true;
                console.log(error);
            }
        },
        async onClickNav(data){
            this.summary = !this.summary;
            console.log(data);
            if(this.summary){
                await this.getPostsProposed();
                if(this.posts.length === 0){
                    this.msg = 'شما کسی را دنبال نکرده اید';
                } else this.msg = '';
            }
            else {
                await this.getPostsFollowing();
                if(this.posts.length === 0 ){
                    this.msg = 'شما کسی را دنبال نکرده اید';
                } else this.msg = '';
            }
        }
    },
}