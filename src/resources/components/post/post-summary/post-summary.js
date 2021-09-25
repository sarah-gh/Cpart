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
            text : '',
            save : false,
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
        async testtt(data){
            try {
                let test = await this.$store.dispatch('user/requestPostBookmark', data);
                console.log(test);
            } catch (error) {
                console.log(error);
            }
        },
        saveItem(){
            this.save = !this.save;
            let status_save = this.save ? 1 : 0;
            const data = {
                operation: "save" ,
                articleId: this.post.articleid,
                status: status_save
            }
            // JSON.stringify(data)
            this.testtt(JSON.stringify(data))
            //this.$emit('save_item', 'donbalkonande')
        },
        routeName(item){
            return `/panel/profile/${item.userid}`
        },
        routeTitle(item){
            return `/post/${item.articleid}`
        }
      }
}