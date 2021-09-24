import profileHeader from '@/resources/components/profile/profile-header/profile-header.vue'
import profileNav from '@/resources/components/profile/profile-nav/profile-nav.vue'
import profilePost from '@/resources/components/profile/profile-post/profile-post.vue'
import profileFollower from '@/resources/components/profile/profile-follower/profile-follower.vue'
import profileAbout from '@/resources/components/profile/profile-about/profile-about.vue'
import { getCookieByName } from '@/resources/utilities.js';

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
            ],
            profile: {},
            about: {},
            userposts: [],
            userProfile: {},
            follows : [],
            load: false,
            connection: true,
        }
    },
    components:{
        profileHeader,
        profileNav,
        profilePost,
        profileFollower,
        profileAbout
    },
    created() {
        console.log(this.$route.params.id);
        if(this.$route.params.id != 0 ){
            this.getProfile();
        } else {
            this.getUserProfile()
        }
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
        },
        async getUserProfile() {
                try {
                    const access_token = getCookieByName('token');
                    const response = await this.axios.get(
                        `http://localhost:8000/api/users/profile` , {
                            headers:{
                                'token': `${access_token}`
                            }
                        }
                    ).then((res) => {
                        return res.data; 
                    }).catch((err) => {
                        console.error(err);
                    });
                    this.profile = response;
                    this.about = this.profile.about["0"];
                    this.follows = [...this.profile.follows];
                    this.userposts = this.profile.posts;
                    this.userProfile = {
                        userphoto: this.about.userphoto,
                        shortdescription: this.about.shortdescription,
                        name : this.about.fname + " " + this.about.lname,
                        followers: this.about.followers
                    }
                    console.log(this.follows)
                    this.load = true;
                    this.connection = true;
                } catch (error) {
                    console.log(error);
                    this.connection = false;
                    this.load = true;
                }
            
        },
        async getProfile() {
            try {
                const response = await this.axios.get(
                    `http://localhost:8000/api/users/profile/${this.$route.params.id}`
                ).then((res) => {
                    return res.data; 
                }).catch((err) => {
                    console.error(err);
                });
                this.profile = response;
                this.about = this.profile.about["0"];
                this.follows = [...this.profile.follows];
                this.userposts = this.profile.posts;
                this.userProfile = {
                    userphoto: this.about.userphoto,
                    shortdescription: this.about.shortdescription,
                    name : this.about.fname + " " + this.about.lname,
                    followers: this.about.followers
                }
                console.log(this.follows)
                this.load = true;
                this.connection = true;
            } catch (error) {
                console.log(error);
                this.connection = false;
                this.load = true;
            }
        }
    },
    beforeMount() {
        //console.log(this.$route.params.id);
    }
}