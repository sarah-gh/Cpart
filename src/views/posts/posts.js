import postSummary from '../../resources/components/post/post-summary/post-summary.vue'
import headerNav from '../../resources/components/header/header-nav/header-nav.vue'

export default {
    name: 'posts-summary',
    data(){
        return {
            myQuery: 1234,
            summary: true,
            isPublic: false,
            posts: [
                {
                    id: 10001,
                    imgPost : 'Capture1.png',
                    imgAvatar : '6893547.png"',
                    authorName : 'محمد محمدی',
                    title : `کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.`,
                    text: ` کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.`,
                    date: '۲۸ تیر ۱۴۰۰',
                    time: '۷ دقیقه مطالعه',
                    tags: ['تکنولوژی']
                },
                {
                    id: 10002,
                    imgPost : 'Capture2.png',
                    imgAvatar : '6893547.png"',
                    authorName : 'محمد محمدی',
                    title : `کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.`,
                    text: ` کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.`,
                    date: '۲۸ تیر ۱۴۰۰',
                    time: '۷ دقیقه مطالعه',
                    tags: ['تکنولوژی']
                },
                {
                    id: 10003,
                    imgPost : 'Capture3.png',
                    imgAvatar : '6893547.png"',
                    authorName : 'محمد محمدی',
                    title : `کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.`,
                    text: ` کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.`,
                    date: '۲۸ تیر ۱۴۰۰',
                    time: '۷ دقیقه مطالعه',
                    tags: ['تکنولوژی']
                }
            ]
        }
    },
    components: {
        postSummary,
        headerNav
    },
    computed: {
        
    },
    beforeMount() {
        let url = window.location.href;
        if(url.indexOf('public') !== -1) {
            this.isPublic = true;
        }
        else{
            this.isPublic = false;
        }
    },
    methods: {
        onClickNav(data){
            this.summary = !this.summary;
            console.log(data);
        }
    }
}