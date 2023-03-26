import postSummary from '../../resources/components/post/post-summary/post-summary.vue'
import headerNav from '../../resources/components/header/header-nav/header-nav.vue'
import { getCookieByName } from '@/resources/utilities.js'

export default {
  name: 'posts-summary',
  data () {
    return {
      myQuery: 1234,
      summary: true,
      isPublic: false,
      load: false,
      connection: true,
      // posts: [],
      msg: ''
    }
  },
  components: {
    postSummary,
    headerNav
  },
  computed: {
    posts () {
      return this.$store.state.article.article
    }
  },
  created () {
    this.getPostsProposed()
  },
  updated () {
    console.log('updated')
  },
  methods: {
    async getPostsProposed () {
      try {
        const token = getCookieByName('token')
        if (token) {
          console.log('\n\n\n is login')
          await this.$store.dispatch('article/requestArticleUser')
        } else {
          console.log("\n\n\n isn't login")
          await this.$store.dispatch('article/requestArticle')
        }
        // const response = this.$store.state.article.article
        // this.posts = response
        this.connection = true
        this.load = true
      } catch (error) {
        this.connection = false
        this.load = true
        console.log(error)
      }
    },
    async getPostsFollowing () {
      try {
        getCookieByName('token')
        await this.$store.dispatch('article/requestArticleUserfollow')
        // const response = this.$store.state.article.article
        // this.posts = response
        this.connection = true
        this.load = true
      } catch (error) {
        this.connection = false
        this.load = true
        console.log(error)
      }
    },
    async onClickNav (data) {
      this.summary = !this.summary
      // console.log(data)
      if (this.summary) {
        await this.getPostsProposed()
        if (this.posts.length === 0) {
          this.msg = 'شما کسی را دنبال نکرده اید'
        } else this.msg = ''
      } else {
        await this.getPostsFollowing()
        if (this.posts.length === 0) {
          this.msg = 'شما کسی را دنبال نکرده اید'
        } else this.msg = ''
      }
      // this.$forceUpdate()
    }
  }
}
