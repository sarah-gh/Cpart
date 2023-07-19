// import { getCookieByName } from '@/resources/utilities.js'

export default {
  name: 'posts-summary',
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      hoverPost: false,
      title_route: '',
      text: '',
      save: true
    }
  },
  beforeMount () {
    console.log(this.post)
    this.text = this.post.articletext
    if (this.text.length > 180) {
      this.text = this.text.substring(0, 175) + '...'
    }
  },
  mounted () {
    console.log(this.post)
  },
  methods: {
    routeName (item) {
      return `/panel/profile/${item.userid}`
    },
    routeTitle (item) {
      return `/post/${item.articleid}`
    },
    saveItem () {
      this.save = !this.save
      const statusSave = this.save ? 1 : 0
      const data = {
        operation: 'save',
        // csrfToken: this.$store.state.user.csrfToken,
        articleId: this.post.articleid,
        status: statusSave
      }
      this.endAction(data)
    },
    async endAction (data) {
      try {
        await this.$store.dispatch('user/requestPostBookmark', data)
        // console.log(test);
      } catch (error) {
        console.log(error)
      }
    }
  }
}
