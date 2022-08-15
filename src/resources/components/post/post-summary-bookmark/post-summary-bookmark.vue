<template>
    <div class="card-img">
        <img @click="routeQuery(post)" :src="post.headerphoto" alt="img post" />
    </div>
    <div class="card-post">
        <header class="post-header">
            <div class="post-author">
                <router-link :to="routeName(post)">
                    <img class="avatar" :src="post.userphoto" alt="avatar" />
                </router-link>
                <router-link :to="routeName(post)" class="author-name">{{ post.fname }} {{ post.lname }}</router-link>
            </div>
            <div class="follow">
            <button class="follow">دنبال کردن</button>
            <span class="save" @click="saveItem" ><img src="../../../../assets/img/svg-post/archive-add.svg" v-if="save" ><img src="../../../../assets/img/archive-add_3.svg" v-else ></span>
            </div>
        </header>
        <div class="post-content">
            <router-link class="article-link" :to="routeTitle(post)">
                <h2 class="post-title"  > 
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
