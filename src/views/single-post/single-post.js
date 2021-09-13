import postFullContent from '../../resources/components/post/post-full-content/post-full-content.vue';
import postComment from '../../resources/components/post/post-comment/post-comment.vue';
import postThisAuthor from '../../resources/components/post/post-this-author/post-this-author.vue';
import postNewComment from '../../resources/components/post/post-new-comment/post-new-comment.vue';
import axios from 'axios'

export default {
    name: 'posts-summary',
    data(){
        return {
            items: [1,2,3],
            load : false,
            comments : [
                {
                    name: "سروش صفایی زاده",
                    date: "۲۸ تیر ۱۴۰۰",
                    time: "۷ دقیقه مطالعه",
                    text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،`,
                    commentsReply: [
                        {
                            name: "سروش صفایی زاده",
                            date: "۲۸ تیر ۱۴۰۰",
                            time: "۷ دقیقه مطالعه",
                            text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،`,
                        }
                    ]
                },
                {
                    name: "سروش صفایی زاده",
                    date: "۲۸ تیر ۱۴۰۰",
                    time: "۷ دقیقه مطالعه",
                    text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،`,
                }
            ],
            comment: [],
            post: {},
            otherPosts: [
                {
                    img: 'Capture1.png',
                    header: 'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.',
                },
                {
                    img: 'Capture2.png',
                    header: 'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.',
                },
                {
                    img: 'Capture3.png',
                    header: 'کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.',
                }
            ]
        }
    },
    components: {
        postFullContent,
        postComment,
        postThisAuthor,
        postNewComment
    },
    created() {
        this.getPosts();
        //this.getComments();
    },
    methods: {
        async getPosts() {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/v2/posts/${this.$route.params.id}`
                ).then((res) => {
                    return res.data;
                }).catch((err) => {
                    console.error(err);
                });

                let post = response;
                this.post = Object.assign(post["0"]);
                this.load = true;
            } catch (error) {
                console.log(error);
            }
        },
        // async getComments() {
        //     try {
        //         const response = await this.$http.get(
        //             `http://localhost:8000/api/v2/comments/${this.$route.params.id}`
        //         );
        //         this.comment = response.data;
        //         console.log(this.comment);
        //         console.log(response.data)
        //     } catch (error) {
        //         console.log('error');
        //         console.log(error);
        //     }
        // },
    }

}