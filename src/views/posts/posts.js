import postSummary from '../../resources/components/post/post-summary/post-summary.vue'
import headerNav from '../../resources/components/header/header-nav/header-nav.vue'
import axios from 'axios'

export default {
    name: 'posts-summary',
    data(){
        return {
            myQuery: 1234,
            summary: true,
            isPublic: false,
            posts: Array
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
              const response = await this.$http.get(
                "http://localhost:8000/api/v2/posts"
              );
              this.posts = response.data;
            } catch (error) {
              console.log(error);
            }
        },
        onClickNav(data){
            this.summary = !this.summary;
            console.log(data);
        }
    }
}