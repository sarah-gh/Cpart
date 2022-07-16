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
            hoverPost: false,
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
        
    },
}