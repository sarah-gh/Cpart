<template>
    <div class="card-img">
        <img @click="routeQuery(post)" :src="require(`@/assets/img/${post.imgPost}`)" alt="img post" />
    </div>
    <div class="card-post">
        <div class="post-content">
            <a class="article-link" @click="routeQuery(post)">
                <h2 class="post-title"  > 
                    {{ post.title }}
                </h2>
                <div class="post-text Text-Style">
                    {{post.text }}
                </div>
            </a>
        </div>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">{{ post.date }}</p>
                <span class="circle"></span> 
                <span class="time">{{ post.time }}</span>
                <span class="circle"></span> 
                <span class="tag" v-for="(i , x) in post.tags" :key="x">
                    {{ i }}
                </span>
                <span class="save"><img src="../../../../assets/img/archive-add_3.svg"></span>
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