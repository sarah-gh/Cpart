import profileHeader from '@/resources/components/profile/profile-header/profile-header.vue'
import profileNav from '@/resources/components/profile/profile-nav/profile-nav.vue'
import profilePost from '@/resources/components/profile/profile-post/profile-post.vue'
import profileFollower from '@/resources/components/profile/profile-follower/profile-follower.vue'
import profileAbout from '@/resources/components/profile/profile-about/profile-about.vue'
import { getCookieByName } from '@/resources/utilities.js'

export default {
  name: 'profile',
  data () {
    return {
      navigate: [false, true, false],
      profile: {},
      about: {},
      userposts: [],
      userProfile: {},
      follows: [],
      load: false,
      connection: true
    }
  },
  components: {
    profileHeader,
    profileNav,
    profilePost,
    profileFollower,
    profileAbout
  },
  created () {
    console.log(this.$route.params.id)
    if (this.$route.params.id !== 0) {
      this.getProfile()
    } else {
      this.getUserProfile()
    }
  },
  // computed: {
  //     changedRoute() {
  //         if(this.$route.params.id != 0 ){
  //             this.getProfile();
  //         } else {
  //             this.getUserProfile()
  //         }
  //     }
  // },
  methods: {
    onClickNav (data) {
      this.navigate.forEach((value, index) => {
        if (index === data) {
          this.navigate[index] = true
        } else {
          this.navigate[index] = false
        }
      })
    },
    async getUserProfile () {
      try {
        const accessToken = getCookieByName('token')
        const response = await this.axios.get(
          'http://localhost:8000/api/users/profile', {
            headers: {
              token: `${accessToken}`
            }
          }
        ).then((res) => {
          return res.data
        }).catch((err) => {
          console.error(err)
        })
        this.profile = response
        this.about = this.profile.about['0']
        this.follows = [...this.profile.follows]
        this.userposts = this.profile.posts
        this.userProfile = {
          userphoto: this.about.userphoto,
          shortdescription: this.about.shortdescription,
          name: this.about.fname + ' ' + this.about.lname,
          followers: this.about.followers,
          username: this.about.username
        }
        // console.log(this.follows)
        this.load = true
        this.connection = true
      } catch (error) {
        console.log(error)
        this.connection = false
        this.load = true
      }
    },
    clickProfile () {
      console.log('emit')
      this.$forceUpdate()
    },
    async getProfile () {
      try {
        const accessToken = getCookieByName('token')
        const response = await this.axios.get(
                    `http://localhost:8000/api/users/profile/${this.$route.params.id}`, {
                      headers: {
                        token: `${accessToken}`
                      }
                    }
        ).then((res) => {
          return res.data
        }).catch((err) => {
          console.error(err)
        })
        this.profile = response
        this.about = this.profile.about['0']
        this.follows = [...this.profile.follows]
        this.userposts = this.profile.posts
        this.userProfile = {
          userphoto: this.about.userphoto,
          shortdescription: this.about.shortdescription,
          name: this.about.fname + ' ' + this.about.lname,
          followers: this.about.followers,
          username: this.about.username,
          userid: this.about.userid
        }
        // console.log(this.follows)
        this.load = true
        this.connection = true
      } catch (error) {
        console.log(error)
        this.connection = false
        this.load = true
      }
    }
  },
  watch: {
    $route (to, from) {
      console.log(to.path)
      console.log(from.path)
      // location.reload();
    }
  }
}
