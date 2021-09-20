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
        routeName(item){
            return `/panel/profile/${item.userid}`
        },
        routeTitle(item){
            return `/post/${item.articleid}`
        }
      }
}