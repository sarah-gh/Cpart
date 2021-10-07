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
            hoverPost: false,
            title_route: '',
            text : '',
            save: true
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
    methods: {
        routeName(item){
            return `/panel/profile/${item.userid}`
        },
        routeTitle(item){
            return `/post/${item.articleid}`
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
        async getData(data){
            try {
                let test = await this.$store.dispatch('user/requestPostBookmark', data);
            } catch (error) {
                console.log(error);
            }
        },
    },
}