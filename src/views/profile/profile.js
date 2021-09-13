import profileHeader from '@/resources/components/profile/profile-header/profile-header.vue'
import profileNav from '@/resources/components/profile/profile-nav/profile-nav.vue'
import profilePost from '@/resources/components/profile/profile-post/profile-post.vue'
import profileFollower from '@/resources/components/profile/profile-follower/profile-follower.vue'
import profileAbout from '@/resources/components/profile/profile-about/profile-about.vue'

export default {
    name: "profile",
    data(){
        return {
            navigate: [false, true, false],
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
        profilePost,
        profileFollower,
        profileAbout
    },
    methods: {
        onClickNav(data){
            this.navigate.forEach((value,index) => {
                if(index == data) {
                    this.navigate[index] = true;
                } else {
                    this.navigate[index] = false;
                }
            })
        }
    },
    beforeMount() {
        console.log(this.$route.params.id);
    },
}