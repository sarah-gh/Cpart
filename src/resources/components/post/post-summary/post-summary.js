export default {
    name: 'posts-summary',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            title_route: '',
            text : ''
        }
    },
    beforeMount(){
        //console.log(this.post.text.length);
        this.text = this.post.text;
        if (this.post.text.length > 187) {
            this.text = this.text.substring(0, 184) + "...";
        }
        
    },
    mounted() {

    },
    methods: {
        routeQuery(item) {
            this.$router.push({ path: `/single-post/${item.id}`})
        },
      }
}