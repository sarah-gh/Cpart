<template>
    <div class="card-img">
        <img @click="routeQuery(post)" :src="post.headerphoto" alt="img post" />
    </div>
    <div class="card-post">
        <header class="post-header">
            <div class="post-author">
                <a @click="routeQueryName(post)">
                    <img class="avatar" :src="post.userphoto" alt="avatar" />
                </a>
                <a @click="routeQueryName(post)" class="author-name">{{ post.fname }} {{ post.lname }}</a>
            </div>
            <div class="follow">
            <button class="follow">دنبال کردن</button>
                <span class="save"><img src="../../../../assets/img/svg-post/archive-add.svg"></span>
            </div>
        </header>
        <div class="post-content">
            <a class="article-link" @click="routeQuery(post)">
                <h2 class="post-title"  > 
                    {{ post.title }}
                </h2>
                <div class="post-text Text-Style">
                    {{ text }}
                </div>
            </a>
        </div>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">{{ post.date }}</p>
                <span class="circle"></span> 
                <span class="time">{{ post.readtime }} دقیقه </span>
                <span class="circle"></span> 
                <span class="tag" v-for="(item, index) in post.tag" :key="index">
                    {{ item }}
                </span>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript" src="./post-summary-bookmark.js"></script>

<style scoped>
.h2hover{
    color: #139eca;
}
</style>
