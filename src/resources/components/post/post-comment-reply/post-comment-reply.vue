<template>
            <div class="reply-icon">
                <!-- <img src="../../../../assets/img/export.svg" alt=""> -->
                <font-awesome-icon :icon="['fas', 'reply']" />
            </div>
            <div class='comments'>
                <div class="name">{{ commentR.fname }} {{ commentR.lname }}</div>
                <div class="details">
                    <div class="date-time">
                        <p class="date">{{ commentR.commentdate }}</p>
                        <span class="circle"></span>
                        <!-- <span class="time">{{ commentR.time }}</span> -->
                    </div>
                    <div class="like-forward">
                        <!-- <img src="../../../../assets/img/forward-square.svg" class="forward"> -->
                        <!-- <span class="like save" @click="clickLike"><font-awesome-icon :icon="like_icon" /></span> -->
                        <img v-if="this.$store.state.user.profileUser.about['0'].role == 'admin'"
                          src="@/assets/img/trash-bin.png" class="trash"
                          @click="deleteComment(commentR.commentid)" />
                    </div>
                </div>
                <div class="text-comment">
                    <p>{{ commentR.commenttext }}</p>
                </div>
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
.comments{
    width: 100% !important;
}
</style>

<script>
import { deleteComment } from '@/services/admin.js'

export default {
  name: 'comment-reply',
  props: {
    commentR: {
      type: Object
    }
  },
  data () {
    return {
      like_icon: ['far', 'thumbs-up']
    }
  },
  emits: ['replyComment', 'getComments'],
  methods: {
    clickLike () {
      if (this.like_icon[0] === 'fas') {
        this.like_icon[0] = 'far'
      } else {
        this.like_icon[0] = 'fas'
      }
      this.$emit('replyComment')
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
    }
  }
}
</script>
