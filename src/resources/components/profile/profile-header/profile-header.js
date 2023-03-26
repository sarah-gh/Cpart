// import user from '../../../../services/user'

export default {
  name: 'profile-header',
  props: {
    user: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      not_user: true,
      follow: false,
      userphoto: ''
    }
  },
  beforeMount () {
    console.log(this.user)
    if (this.$store.state.user.profileUser.about['0'].username == this.user.username) {
      this.not_user = false
    } else {
      this.not_user = true
    }
    if (this.user.userphoto == null) {
      this.userphoto = 'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg'
    } else {
      this.userphoto = this.user.userphoto
    }
  },
  mounted () {

  },
  methods: {
    followUser () {
      this.follow = !this.follow
      const statusFollow = this.follow ? 1 : 0
      const data = {
        operation: 'follow',
        // csrfToken: this.$store.state.user.csrfToken,
        followingId: this.user.userid,
        status: statusFollow
      }
      // JSON.stringify(data)
      this.testtt2(JSON.stringify(data))
    },
    async testtt2 (data) {
      try {
        await this.$store.dispatch('user/requestfollow', data)
      } catch {
        console.log('error')
      }
    }
  }
}
