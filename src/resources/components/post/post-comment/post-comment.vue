<template>
        <div class="name">{{ comment.fname }} {{ comment.lname }}</div>
        <div class="details">
            <div class="date-time">
                <p class="date">{{ comment.commentdate }}</p>
                <span class="circle"></span>
                <!-- <span class="time">{{ comment.time }}</span> -->
            </div>
            <div class="like-forward">
                <img src="../../../../assets/img/forward-square.svg" class="forward" @click="reply_comment">
                <!-- <span class="like save" @click="clickLike"><font-awesome-icon :icon="like_icon" /></span> -->
                <img v-if="this.$store.state.user.profileUser.about['0'].role == 'admin'"
                  src="@/assets/img/trash-bin.png"
                  @click="deleteComment(comment.commentid)" class="trash" />
            </div>
        </div>
        <div class="text-comment">
            <p>{{ comment.commenttext }}</p>
        </div>
            <div class="comment-reply" v-for="(commentReply , i) in comment.replyComment" :key="i">
                <post-comment-reply @getComments="getCommentsR" :commentR="commentReply"></post-comment-reply>
            </div>

</template>
<style lang="scss" scoped>
.like {
    display: flex;
    align-items: center;
    color: #139eca;
    cursor: pointer;
    font-size: 23px;
}
.trash {
    width: 25px;
    height: 25px;
    margin-left: 20px;
}
</style>
<script>
import postCommentReply from '../post-comment-reply/post-comment-reply.vue'
import { deleteComment } from '@/services/admin.js'

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false
    },
    ccc: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      commentsReply: [1],
      like_icon: ['far', 'thumbs-up']
    }
  },
  components: {
    postCommentReply
  },
  emits: ['replyComment', 'getComments'],
  methods: {
    clickLike () {
      if (this.like_icon[0] === 'fas') {
        this.like_icon[0] = 'far'
      } else {
        this.like_icon[0] = 'fas'
      }
    },
    getCommentsR () {
      this.$emit('getComments')
    },
    async deleteComment (id) {
      const data = {
        commentId: id
      }
      try {
        await deleteComment(data)
        this.$emit('getComments')
      } catch (error) {
        console.log(error)
      }
    },
    reply_comment () {
      console.log(this.comment)
      this.$emit('replyComment', this.comment)
    }
  }
}
</script>
