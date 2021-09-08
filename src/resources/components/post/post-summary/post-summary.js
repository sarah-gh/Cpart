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
        this.text = this.post.artcletext;
        if (this.post.artcletext.length > 180) {
            this.text = this.text.substring(0, 175) + "...";
        }
        
    },
    mounted() {
        //console.log(this.post)
    },
    methods: {
        routeQuery(item) {
            this.$router.push({ path: `/single-post/${item.articleid}`})
        },
        routeQueryName(item){
            this.$router.push({ path: `/profile/${item.articleid}`}) /// الان ای دی پست رو میفرسته و باید عوض بشه
        }
      }
}