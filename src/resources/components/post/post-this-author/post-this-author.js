export default {
    name: 'post-this-author',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            title_route: '',
            text : '',
            save : false,

        }
    },
    mounted() {
        this.save = this.post.issaved == '0' ? false : true;
    },
    methods: {
        async getData(data){
            try {
                let test = await this.$store.dispatch('user/requestPostBookmark', data);
            } catch (error) {
                console.log(error);
            }
        },
        saveItem(){
            this.save = !this.save;
            let status_save = this.save ? 1 : 0;
            const data = {
                operation: "save" ,
                csrfToken: this.$store.state.user.csrfToken,
                articleId: this.post.articleid,
                status: status_save
            }
            this.getData(JSON.stringify(data))
        },
      }
}