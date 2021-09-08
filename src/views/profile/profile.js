import profileHeader from '@/resources/components/profile/profile-header/profile-header.vue'
import profileNav from '@/resources/components/profile/profile-nav/profile-nav.vue'
import profilePost from '@/resources/components/profile/profile-post/profile-post.vue'

export default {
    name: "profile",
    data(){
        return {
            posts: [
                {
                    id: 10001,
                    imgPost : 'Capture1.png',
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
    components:{
        profileHeader,
        profileNav,
        profilePost
    },
    methods: {
        onClickNav(data){
            console.log(data);
        }
    },
    beforeMount() {
        console.log(this.$route.params.id);
    },
}