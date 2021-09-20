<template>
    <div class="card-post">
        <header class=post-header>
            <div class="post-author">
                <router-link :to="'/panel/profile/' + post.userid">
                    <img class="avatar" :src="post.userphoto" alt="avatar" />
                </router-link>
                <router-link :to="'/panel/profile/' + post.userid" class="author-name">{{ post.fname }} {{ post.lname }}</router-link>
                <button class="follow-button">دنبال کردن</button>
            </div>
            <div class="post-title">
                <h1 class="title"> 
                    {{ post.title }}
                </h1>
            </div>
            <div class="post-details">
                <div class="flex-footer">
                    <p class="date">{{ post.date }}</p>
                    <span class="circle"></span> 
                    <span class="time">{{ post.readtime }} دقیقه </span>
                    <span class="circle"></span> 
                    <span class="tag">
                        {{ post.tag }}
                    </span>
                    <span class="save"><img src="../../../../assets/img/svg-post/archive-add.svg"></span>
                </div>
            </div>
        </header>
        <div class='post-content'>
            <img :src="post.headerphoto" class="post-photo" alt="post-photo">
            <p> {{ post.artcletext}} </p>
            <img :src="post.footerphoto" v-show="post.footerphoto" class="post-photo" alt="post-photo">
        </div>
    </div>
</template>

<script src="./post-full-content.js">
</script>