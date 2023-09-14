// import user from '../../../../services/user'
import { blockUser, unblockUser } from '@/services/admin.js'

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
      userphoto: '',
      userBlocked: false
    }
  },
  watch: {
    user: {
      deep: true,
      handler () {
        this.myMount()
      }
    }
  },
  beforeMount () {
    this.myMount()
  },
  mounted () {

  },
  methods: {
    ModalTrue () {
      this.$emit('ModalTrue')
    },
    myMount () {
      if (this.$store.state.user.profileUser.about['0'].username === this.user.username) {
        this.not_user = false
      } else {
        this.not_user = true
      }
      if (this.user.userphoto == null) {
        this.userphoto = 'http://localhost:8000/api/images/authors/default-profile-pic.jpg'
      } else {
        this.userphoto = this.user.userphoto
      }
      this.userBlocked = this.user.blocked
    },
    async blockUser (id) {
      const data = {
        userId: id
      }
      try {
        await blockUser(data)
        this.userBlocked = true
      } catch (error) {
        console.log(error)
      }
    },
    async unblockUser (id) {
      const data = {
        userId: id
      }
      try {
        await unblockUser(data)
        this.userBlocked = false
      } catch (error) {
        console.log(error)
      }
    },
    followUser () {
      this.follow = !this.follow
      const statusFollow = this.follow ? 1 : 0
      const data = {
        operation: 'follow',
        followingId: this.user.userid,
        status: statusFollow
      }
      // JSON.stringify(data)
      this.endAction2(JSON.stringify(data))
    },
    async endAction2 (data) {
      try {
        await this.$store.dispatch('user/requestfollow', data)
      } catch {
        console.log('error')
      }
    }
  }
}
