import postSummary from '../../resources/components/post/post-summary/post-summary.vue'
import headerNav from '../../resources/components/header/header-nav/header-nav.vue'
// import mapGetters from 'vuex'
// import axios from 'axios'
import { useStore } from 'vuex';

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
        this.getPosts();
    },
    // computed: {
    //     ...mapGetters(['get_posts'])
    // },
    beforeMount() {
        // let url = window.location.href;
        // if(url.indexOf('public') !== -1) {
        //     this.isPublic = true;
        // }
        // else{
        //     this.isPublic = false;
        // }
        // console.log(this.$store.dispatch('actions_posts'))
        // let ppp = this.$store.getters.getPosts
        // console.log(ppp);
        const store = useStore();
        let test = store.dispatch('article/requestArticle', { test: 'test' });
        let test2 = store.state.article.article;
        console.log('test')
        console.log(test);
        console.log(test2);

    },
    methods: {
        async getPosts() {
            try {
                const response = await this.axios.get(
                    "http://localhost:8000/api/posts"
                ).then((res) => {
                    return res.data;
                });
                this.posts = response;
                this.connection = true;
                this.load = true;
            } catch (error) {
                this.connection = false;
                this.load = true;
                console.log(error);
            }
        },
        onClickNav(data){
            this.summary = !this.summary;
            //console.log(data);
        }
    },
}