import postSummaryBookmark from '../../resources/components/post/post-summary-bookmark/post-summary-bookmark.vue'

export default {
    name: 'posts-summary-bookmark',
    data() {
        return {
            posts: [],
            load: false,
            connection: true,
        }
    },
    created() {
        this.getData();
    },
    methods: {
        async getData(){
            try {
                let test = await this.$store.dispatch('user/requestbookmark');
                let response = this.$store.state.user.bookmark;
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
            try {
                const response = await this.axios.get(
                    `http://localhost:8000/api/users/savedMessages/1`
                ).then((res) => {
                    return res.data;
                });
                this.posts = response;
            } catch (error) {
                console.log(error);
            }
        }
    },
    components: {
        postSummaryBookmark
    }
}