<template>
    <div class="card-img">
        <img @click="routeQuery(post)" :src="post.headerphoto" alt="img post" />
    </div>
    <div class="card-post">
        <div class="post-content">
            <router-link :to="'/single-post/' + post.articleid" class="article-link" @click="routeQuery(post)">
                <h2 class="post-title"> 
                    {{ post.title }}
                </h2>
                <div class="post-text Text-Style">
                    {{ text }}
                </div>
            </router-link>
        </div>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">{{ post.date }}</p>
                <span class="circle"></span> 
                <span class="time">{{ post.readtime }} دقیقه</span>
                <span class="circle"></span> 
                <!-- <span class="tag" v-for="(i , x) in post.tags" :key="x">
                    {{ i }}
                </span> -->
                <span class="tag">
                    {{ post.tag }}
                </span>
                <span class="save"><img src="../../../../assets/img/archive-add_3.svg"></span>
                <span class="like"><img src="../../../../assets/img/svg-profile/like.svg"></span>
                <span class="comments"><img src="../../../../assets/img/svg-profile/message-question.svg"></span>
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
    data(){
        return {
            hoverPost: false,
            text: '',
        }
    },
    beforeMount(){
        this.text = this.post.artcletext;
        if (this.post.artcletext.length > 180) {
            this.text = this.text.substring(0, 175) + "...";
        }
    },
    mounted() {
        
    },
}
</script>
<style scoped>
.h2hover{
    color: #139eca;
}
</style>