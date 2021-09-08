import postSummary from '../../resources/components/post/post-summary-bookmark/post-summary.vue'

export default {
    name: 'posts-summary',
    data(){
        return {
            items: [1,2,3],
            posts: [
                {
                    imgPost : 'Capture1.png',
                    imgAvatar : '6893547.png"',
                    authorName : 'محمد محمدی',
                    title : `کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.
                    `,
                    text: ` کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.
                    `,
                    date: '۲۸ تیر ۱۴۰۰',
                    time: '۷ دقیقه مطالعه',
                    tags: ['تکنولوژی']
                },
                {
                    imgPost : 'Capture2.png',
                    imgAvatar : '6893547.png"',
                    authorName : 'محمد محمدی',
                    title : `کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.
                    `,
                    text: ` کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.
                    `,
                    date: '۲۸ تیر ۱۴۰۰',
                    time: '۷ دقیقه مطالعه',
                    tags: ['تکنولوژی']
                },
                {
                    imgPost : 'Capture3.png',
                    imgAvatar : '6893547.png"',
                    authorName : 'محمد محمدی',
                    title : `کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.
                    `,
                    text: ` کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف
                    برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.
                    `,
                    date: '۲۸ تیر ۱۴۰۰',
                    time: '۷ دقیقه مطالعه',
                    tags: ['تکنولوژی']
                }
            ]
        }
    },
    components: {
        postSummary
    }
}