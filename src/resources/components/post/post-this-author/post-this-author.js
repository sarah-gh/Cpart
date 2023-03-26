export default {
  name: 'post-this-author',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title_route: '',
      text: '',
      save: false

    }
  },
  mounted () {

  },
  methods: {
    async testtt (data) {
      try {
        await this.$store.dispatch('user/requestPostBookmark', data)
      } catch (error) {
        console.log(error)
      }
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
      this.testtt(data)
    }
  }
}
