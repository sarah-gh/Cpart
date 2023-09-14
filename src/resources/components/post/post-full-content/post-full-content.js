import ModalDialog from '@/resources/components/custom/modal-dialog/dialog.vue'

export default {
  name: 'post-full',
  components: {
    ModalDialog
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title_route: '',
      like_icon: ['far', 'thumbs-up'],
      save: false,
      showModal: false,
      likeCount: 0,
      userphoto: 'http://localhost:8000/api/images/authors/default-profile-pic.jpg',
      like: 0,
      saveCount: 0,
      follow: false
    }
  },
  mounted () {
    if (this.post.userphoto == null) {
      this.userphoto = 'http://localhost:8000/api/images/authors/default-profile-pic.jpg'
    } else {
      this.userphoto = this.post.userphoto
    }
  },
  created () {
    console.log(this.post)
    this.save = this.post.issaved !== '0'
    this.follow = this.post.isfollowing !== '0'
    this.like = this.post.isliked === '1'
    this.likeCount = this.post.liked
    this.saveCount = this.post.saved
    if (!this.like) {
      this.like_icon[0] = 'far'
    } else {
      this.like_icon[0] = 'fas'
    }
  },
  computed: {
    is_save () {
      this.save = this.post.issaved !== '0'
      this.follow = this.post.isfollowing !== '0'
    }
  },
  methods: {
    // saveItem () {
    //   this.save = !this.save
    //   const statusSave = this.save ? 1 : 0
    //   const data = {
    //     operation: 'save',
    //     articleId: this.post.articleid,
    //     status: statusSave
    //   }
    //   this.endAction(data)
    // },
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
        articleId: this.post.articleid,
        status: statusSave
      }
      console.log(data)
      this.endAction(data)
    },
    async endAction (data) {
      try {
        await this.$store.dispatch('user/requestPostBookmark', data)
      } catch (error) {
        console.log(error)
      }
    },
    async endAction2 (data) {
      try {
        return await this.$store.dispatch('user/requestfollow', data)
      } catch {
        console.log('error')
      }
    },
    // async endAction3 (data) {
    //   try {
    //     await this.$store.dispatch('user/requestfollow', data)
    //   } catch {
    //     console.log('error')
    //   }
    // },
    followUser () {
      this.follow = !this.follow
      const statusFollow = this.follow ? 1 : 0
      const data = {
        operation: 'follow',
        followingId: this.post.userid,
        status: statusFollow
      }
      // JSON.stringify(data)
      this.endAction2(JSON.stringify(data))
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
      const data = {
        operation: 'like_article',
        articleId: this.post.articleid,
        status: this.like
      }
      console.log(data)
      this.endAction(data)
    },
    ModalTrue () {
      console.log('emit modal')
      if (!this.$store.state.login) {
        this.$swal('لطفا ابتدا وارد شوید', '', 'error')
        return
      }
      // this.showModal = true
      this.$swal({
        icon: 'question',
        title: 'آیا از خرید مقاله مطمئن هستید؟',
        html:
          'مقاله: ' + this.post.title +
          ' <br>به قیمت: ' + this.post.price +
          ' ',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'خرید',
        denyButtonText: 'لغو'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = {
            operation: 'downloadArticle',
            articleId: this.post.articleid
          }
          // JSON.stringify(data)
          const res = await this.endAction2(data)
          console.log('endAction2', res)
          if (res === 200) {
            this.$emit('getPosts')
          }
          // this.$swal('Saved!', '', 'success')
        }
      })

      // Swal.fire({
      //   title: 'Do you want to save the changes?',
      //   showDenyButton: true,
      //   showCancelButton: true,
      //   confirmButtonText: 'Save',
      //   denyButtonText: `Don't save`,
      // }).then((result) => {
      //   /* Read more about isConfirmed, isDenied below */
      //   if (result.isConfirmed) {
      //     Swal.fire('Saved!', '', 'success')
      //   } else if (result.isDenied) {
      //     Swal.fire('Changes are not saved', '', 'info')
      //   }
      // })
    },
    clickLike () {
      if (this.like_icon[0] === 'fas') {
        this.like_icon[0] = 'far'
      } else {
        this.like_icon[0] = 'fas'
      }
    }
  }
}
