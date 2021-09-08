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
        }
    },
    mounted() {
        
    },
}