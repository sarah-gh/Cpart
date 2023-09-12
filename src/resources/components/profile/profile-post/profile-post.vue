<template>
    <div class="card-img">
        <img @click="routeQuery(post)" :src="post.headerphoto" alt="img post" />
    </div>
    <div class="card-post">
        <div class="post-content">
            <router-link :to="'/post/' + post.articleid" class="article-link">
                <h2 class="post-title">
                    {{ post.title }}
                </h2>
                <div class="post-text Text-Style">
                    {{text}}
                </div>
            </router-link>
        </div>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">{{ post.date }}</p>
                <span class="circle"></span>
                <span class="time">{{ post.readtime }} دقیقه</span>
                <span class="circle"></span>
                <span class="tag" v-for="(i , x) in post.tag" :key="x">
                    {{ i }}
                </span>
                <span class="save" @click="saveItem" ><img src="../../../../assets/img/svg-post/archive-add.svg" v-if="save" ><img src="../../../../assets/img/archive-add_3.svg" v-else ></span>
                <!-- <span class="number">12</span> -->
                <span class="icon save" @click="clickLike"><font-awesome-icon :icon="like_icon" /></span>
                <!-- <span class="number">12</span> -->
                <span class="icon save comment"><font-awesome-icon :icon="['far', 'comment-alt']" /></span>
                <span class="delete" v-if="post.userid == $store.state.user.profileUser.about[0].userid || $store.state.user.profileUser.about[0].role == 'admin'"
                @click="deleteArticle(post.articleid)">
                  حذف
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'posts-profile',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      hoverPost: false,
      text: '',
      save: false,
      like_icon: ['far', 'thumbs-up']
    }
  },
  beforeMount () {
    this.save = this.post.issaved !== '0'
    this.text = this.post.articletext
    if (this.post.articletext.length > 180) {
      this.text = this.text.substring(0, 175) + '...'
    }
    this.text = this.removeTagshtml(this.text)
  },
  methods: {
    removeTagshtml (str) {
      if ((str === null) || (str === '')) { return false } else { str = str.toString() }

      return str.replace(/(<([^>]+)>)/ig, '')
    },
    clickLike () {
      if (this.like_icon[0] === 'fas') {
        this.like_icon[0] = 'far'
      } else {
        this.like_icon[0] = 'fas'
      }
    },
    stringToHTML (str) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(str, 'text/html')
      return doc.body
    },
    saveItem () {
      this.save = !this.save
      const statusSave = this.save ? 1 : 0
      const data = {
        operation: 'save',
        articleId: this.post.articleid,
        status: statusSave
      }
      // JSON.stringify(data)
      this.endAction(data)
      // this.$emit('save_item', 'donbalkonande')
    },
    deleteArticle (id) {
      this.$swal({
        icon: 'question',
        title: 'آیا از حذف مقاله مطمئن هستید؟',
        html:
          'مقاله: ' + this.post.title +
          ' ',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'حذف',
        denyButtonText: 'لغو'
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.$emit('deleteArticle', id)
        }
      })
    },
    async endAction (data) {
      try {
        await this.$store.dispatch('user/requestPostBookmark', data)
        // console.log(test);
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {

  }
}
</script>
<style scoped>

.delete {
  cursor: pointer;
  color: #6e0000;
  font-weight: bold;
  font-size: 18px;
}
.h2hover{
    color: #139eca;
}

.number{
    color: #139eca;
    font-size: 17px;
    margin-left: 0px !important;
}

.icon{
    font-size: 23px;
    margin-right: 5px !important;
    display: flex;
    justify-content:center;
    align-items: center;
}
.comment{
    cursor: default !important;
}
</style>
