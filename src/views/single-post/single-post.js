import postFullContent from '../../resources/components/post/post-full-content/post-full-content.vue'
import postComment from '../../resources/components/post/post-comment/post-comment.vue'
import postThisAuthor from '../../resources/components/post/post-this-author/post-this-author.vue'
import postNewComment from '../../resources/components/post/post-new-comment/post-new-comment.vue'
import { getCookieByName } from '@/resources/utilities.js'

export default {
  name: 'posts-summary',
  data () {
    return {
      load: false,
      comment: [],
      post: {},
      otherPosts: [],
      replyto: null
    }
  },
  components: {
    postFullContent,
    postComment,
    postThisAuthor,
    postNewComment
  },
  created () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      try {
        const token = getCookieByName('token')
        if (token) {
          console.log()
          await this.$store.dispatch('article/requestSingleArticleUser', `${this.$route.params.id}`)
        } else {
          await this.$store.dispatch('article/requestSingleArticle', `${this.$route.params.id}`)
        }
        const response = this.$store.state.article.singleArticle
        const post = response[0]
        this.post = Object.assign(post['0'])
        this.comment = this.$store.state.article.comment
        console.log(this.comment)
        this.otherPosts = this.$store.state.article.otherPosts
        console.log(this.otherPosts)
        this.load = true
      } catch (error) {
        this.load = true
        console.log(error)
      }
    },

    reply (data) {
      this.replyto = data
    },
    cancel () {
      this.replyto = null
    },
    async addComment () {
      this.getPosts()
    }
  }

}
