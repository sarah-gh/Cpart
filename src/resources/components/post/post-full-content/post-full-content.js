export default {
    name: 'post-full',
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
    mounted() {
        console.log(this.post)
    },
}