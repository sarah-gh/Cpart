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
      follow: false
    }
  },
  mounted () {
    setTimeout(() => {
      // console.log(this.post);
    }, 3000)
  },
  created () {
    console.log(this.post)
    this.save = this.post.issaved !== '0'
    this.follow = this.post.isfollowing !== '0'
  },
  computed: {
    is_save () {
      this.save = this.post.issaved !== '0'
      this.follow = this.post.isfollowing !== '0'
    }
  },
  methods: {
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
        // csrfToken: this.$store.state.user.csrfToken,
        followingId: this.post.userid,
        status: statusFollow
      }
      // JSON.stringify(data)
      this.endAction2(JSON.stringify(data))
    },
    ModalTrue () {
      console.log('emit modal')
      // this.showModal = true
      this.$swal({
        // toast: true,
        // position: 'top-end',
        // showConfirmButton: false,
        // timer: 3000,
        icon: 'question',
        // title: 'Hi from Sweetalert',
        // text: 'Have a good day ahead!',
        // showCancelButton: 'true'
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
        /* Read more about isConfirmed, isDenied below */
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
