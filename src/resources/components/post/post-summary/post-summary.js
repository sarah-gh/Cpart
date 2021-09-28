import { getCookieByName } from '@/resources/utilities.js';

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
    created() {
        this.save = this.post.issaved == '1' ? true : false;
        // console.log(this.save)
        // console.log(this.post.issaved)
        // console.log("///////")
    },
    beforeMount(){
        this.text = this.post.artcletext;
        if (this.post.artcletext.length > 180) {
            this.text = this.text.substring(0, 175) + "...";
        }
        // this.save = this.post.issaved == '1' ? "true" : "false";
        // console.log(this.save)
        // console.log(this.post.issaved)
        // console.log("///////")
    },
    mounted() {
        // console.log(this.post)
    },
    methods: {
        async testtt(data){
            try {
                let test = await this.$store.dispatch('user/requestPostBookmark', data);
                // console.log(test);
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
            const token = getCookieByName('token');
            if(token){
                return `/panel/post/${item.articleid}`
            }
            else {
                return `/public/post/${item.articleid}`
            }
            
        }
      }
}