<template>
        <div class="name">{{ comment.name }}</div>
        <div class="details">
            <div class="date-time">
                <p class="date">{{ comment.date }}</p>
                <span class="circle"></span> 
                <span class="time">{{ comment.time }}</span>
            </div>
            <div class="like-forward">
                <img src="../../../../assets/img/forward-square.svg" class="forward">
                <div class="like">
                    <img src="../../../../assets/img/like.svg">
                </div>
            </div>
        </div>
        <div class="text-comment">
            <p>{{ comment.text }}</p> 
        </div>
            <div class="comment-reply" v-for="(commentReply , i) in comment.commentsReply" :key="i"> 
                <post-comment-reply :commentR="commentReply"></post-comment-reply>
            </div>

</template>

<script>
import postCommentReply from '../post-comment-reply/post-comment-reply.vue'

export default {
    name: "comment",
    props: {
        comment : {
            type: Object,
            required: false
        },
        ccc: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            commentsReply: [1]
        }
    },
    // beforeMount(){
    //     setTimeout(function(){
    //         console.log(this.ccc)
    //     }, 1000);
    // },
    components : {
        postCommentReply
    }
}
</script>