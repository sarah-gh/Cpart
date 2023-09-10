import profileHeader from '@/resources/components/profile/profile-header/profile-header.vue'
import profileNav from '@/resources/components/profile/profile-nav/profile-nav.vue'
import profilePost from '@/resources/components/profile/profile-post/profile-post.vue'
import profileFollower from '@/resources/components/profile/profile-follower/profile-follower.vue'
import profileAbout from '@/resources/components/profile/profile-about/profile-about.vue'
import { getCookieByName } from '@/resources/utilities.js'
import ModalDialog from '@/resources/components/custom/modal-dialog/dialog.vue'

export default {
  name: 'profile',
  data () {
    return {
      navigate: [false, true, false],
      profile: {},
      showModal: false,
      about: {},
      credit: 0,
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
    ModalDialog,
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
    validatePrice () {
      this.credit = this.credit.replace(/[^0-9]/g, '')
    },
    async increaseCredit () {
      try {
        this.showModal = false
        const data = {
          operation: 'increaseCredit',
          creditAmount: +this.credit
        }
        await this.endAction(data)
        await this.getUserProfile()
        this.$swal.fire('انجام شد!', '', 'success')
      } catch (error) {
        this.$swal('error!', '', 'error')
      }
    },
    async endAction (data) {
      try {
        await this.$store.dispatch('user/requestfollow', data)
      } catch {
        console.log('error')
      }
    },
    ModalTrue () {
      console.log('emit modal')
      this.showModal = true
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
          username: this.about.username,
          credit: this.about.credit
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
    async deleteArticle (id) {
      try {
        const data = {
          operation: 'deleteArticle',
          id: id
        }
        const res = await this.$store.dispatch('article/requestPostArticle', data)
        console.log('requestPostArticle: ', res)
        console.log(this.$route.params.id)
        if (this.$route.params.id !== 0) {
          this.getProfile()
        } else {
          this.getUserProfile()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getProfile () {
      try {
        const accessToken = getCookieByName('token')
        const url = `http://localhost:8000/api/users/profile/${this.$route.params.id}`
        const headers = { token: accessToken }

        const response = await this.axios.get(url, { headers })
        const data = response.data

        this.profile = data
        this.about = this.profile.about[0]
        this.follows = [...this.profile.follows]
        this.userposts = this.profile.posts

        this.userProfile = {
          credit: this.about.credit,
          userphoto: this.about.userphoto,
          shortdescription: this.about.shortdescription,
          name: this.about.fname + ' ' + this.about.lname,
          followers: this.about.followers,
          isFollowing: this.about.isFollowing,
          username: this.about.username,
          userid: this.about.userid
        }

        this.load = true
        this.connection = true
      } catch (error) {
        console.error(error)
        this.connection = false
        this.load = true
      }
    }

    // async getProfile () {
    //   try {
    //     const accessToken = getCookieByName('token')
    //     const response = await this.axios.get(
    //                 `http://localhost:8000/api/users/profile/${this.$route.params.id}`, {
    //                   headers: {
    //                     token: `${accessToken}`
    //                   }
    //                 }
    //     ).then((res) => {
    //       return res.data
    //     }).catch((err) => {
    //       console.error(err)
    //     })
    //     this.profile = response
    //     this.about = this.profile.about['0']
    //     this.follows = [...this.profile.follows]
    //     this.userposts = this.profile.posts
    //     this.userProfile = {
    //       credit: this.about.credit,
    //       userphoto: this.about.userphoto,
    //       shortdescription: this.about.shortdescription,
    //       name: this.about.fname + ' ' + this.about.lname,
    //       followers: this.about.followers,
    //       isFollowing: this.about.isFollowing,
    //       username: this.about.username,
    //       userid: this.about.userid
    //     }
    //     // console.log(this.follows)
    //     this.load = true
    //     this.connection = true
    //   } catch (error) {
    //     console.log(error)
    //     this.connection = false
    //     this.load = true
    //   }
    // }
  },
  watch: {
    $route (to, from) {
      if (to.path !== from.path) {
        if (this.$route.params.id !== 0) {
          this.getProfile()
        } else {
          this.getUserProfile()
        }
      }
    }
  }
}
