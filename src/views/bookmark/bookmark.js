import postSummary from '../../resources/components/post/post-summary-bookmark/post-summary.vue'

export default {
    name: 'posts-summary',
    data() {
        return {
            posts: []
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            try {
                const response = await this.axios.get(
                    `http://localhost:8000/api/users/savedMessages/${this.$route.params.id}`
                ).then((res) => {
                    return res.data;
                });
                console.log(response);
                this.posts = response;
            } catch (error) {
                console.log(error);
            }
        }
    },
    components: {
        postSummary
    }
}