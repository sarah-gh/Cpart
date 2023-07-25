import { getCookieByName } from '@/resources/utilities.js'

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
      title_route: '',
      text: '',
      save: false,
      follow: false,
      not_user: true,
      like: false,
      like_icon: ['far', 'thumbs-up'],
      likeCount: 0,
      saveCount: 0
    }
  },
  created () {
    this.save = this.post.issaved !== '0'
    this.follow = this.post.isfollowing === '1'
    this.like = this.post.isliked === '1'
    this.likeCount = this.post.liked
    this.saveCount = this.post.saved
  },
  beforeMount () {
    this.text = this.post.articletext
    if (this.post.articletext.length > 180) {
      this.text = this.removeTags(this.text)
      this.text = this.text.substring(0, 175) + '...'
    }
    if (this.$store.state.login) {
      if (this.$store.state.user.profileUser.about['0'].userid === this.post.userid) {
        this.not_user = false
      } else {
        this.not_user = true
      }
    }
  },
  updated () {
    console.log('updated')
  },
  methods: {
    async endAction (data) {
      try {
        await this.$store.dispatch('user/requestPostBookmark', data)
      } catch (error) {
        console.log(error)
      }
    },
    removeTags (str) {
      if ((str === null) || (str === '')) { return false } else { str = str.toString() }
      str = str.replace(/(<([^>]+)>)/ig, '')
      str = str.replaceAll(/&nbsp;/ig, ' ')
      return str
    },
    async endAction2 (data) {
      try {
        await this.$store.dispatch('user/requestfollow', data)
      } catch {
        console.log('error')
      }
    },
    clickLike () {
      if (this.like_icon[0] === 'fas') {
        this.like_icon[0] = 'far'
      } else {
        this.like_icon[0] = 'fas'
      }
    },
    saveItem () {
      this.save = !this.save
      if (this.save) {
        this.saveCount++
      } else {
        this.saveCount--
      }
      const statusSave = this.save ? 1 : 0
      const data = {
        operation: 'save',
        // csrfToken: this.$store.state.user.csrfToken,
        articleId: this.post.articleid,
        status: statusSave
      }
      console.log(data)
      this.endAction(data)
    },
    likeItem () {
      if (this.like_icon[0] === 'fas') {
        this.like_icon[0] = 'far'
      } else {
        this.like_icon[0] = 'fas'
      }
      this.like = !this.like
      if (this.like) {
        this.likeCount++
      } else {
        this.likeCount--
      }
      const statusSave = this.save ? 1 : 0
      const data = {
        operation: 'like',
        // csrfToken: this.$store.state.user.csrfToken,
        articleId: this.post.articleid,
        status: statusSave
      }
      console.log(data)
      // this.endAction(JSON.stringify(data))
    },
    followUser () {
      this.follow = !this.follow
      const statusFollow = this.follow ? 1 : 0
      const data = {
        operation: 'follow',
        // csrfToken: this.$store.state.user.csrfToken,
        followingId: this.post.userid,
        status: statusFollow
      }
      this.endAction2(JSON.stringify(data))
    },
    routeName (item) {
      return `/panel/profile/${item.userid}`
    },
    routeTitle (item) {
      const token = getCookieByName('token')
      if (token) {
        return `/post/${item.articleid}`
      } else {
        return `/post/${item.articleid}`
      }
    }
  }
}
