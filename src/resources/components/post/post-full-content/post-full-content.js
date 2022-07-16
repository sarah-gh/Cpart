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
        }
    },
    mounted() {
        setTimeout(() => {
            console.log(this.post);
        }, 3000);
    },
}