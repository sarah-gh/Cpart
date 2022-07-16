import postSummary from '../../resources/components/post/post-summary/post-summary.vue'
import headerNav from '../../resources/components/header/header-nav/header-nav.vue'
// import axios from 'axios'

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
    beforeMount() {
        let url = window.location.href;
        if(url.indexOf('public') !== -1) {
            this.isPublic = true;
        }
        else{
            this.isPublic = false;
        }
        
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