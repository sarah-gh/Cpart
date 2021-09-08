<template>
    <div class="card-img">
        <img @click="routeQuery(post)" :src="require(`@/assets/img/${post.imgPost}`)" alt="img post" />
    </div>
    <div class="card-post">
        <header class="post-header">
            <div class="post-author">
                <a @click="routeQueryName(post)">
                    <img class="avatar" src="../../../../assets/img/6893547.png" alt="avatar" />
                </a>
                <a @click="routeQueryName(post)" class="author-name">{{ post.authorName }}</a>
            </div>
            <div class="follow">
            <button>دنبال کردن</button>
                <span class="save"><img src="../../../../assets/img/svg-post/archive-add.svg"></span>
            </div>
        </header>
        <div class="post-content">
            <a class="article-link" @click="routeQuery(post)">
                <h2 class="post-title"  > 
                    {{ post.title }}
                </h2>
                <div class="post-text Text-Style">
                    {{ post.text }}
                </div>
            </a>
        </div>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">{{ post.date }}</p>
                <span class="circle"></span> 
                <span class="time">{{ post.time }} </span>
                <span class="circle"></span> 
                <span class="tag" v-for="(i , x) in post.tags" :key="x">
                    {{ i }}
                </span>
                
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript" src="./post-summary.js"></script>

<style scoped>
.h2hover{
    color: #139eca;
}
</style>
