<template>
    <div class="card-post">
        <div style="display : none"> {{ is_save }} </div>
        <header class=post-header>
            <div class="post-author">
                <router-link :to="'/panel/profile/' + post.userid">
                    <img class="avatar" :src="post.userphoto" alt="avatar" />
                </router-link>
                <router-link :to="'/panel/profile/' + post.userid" class="author-name">{{ post.fname }} {{ post.lname }}</router-link>
                <button class="follow-button" v-if="!follow" @click="followUser">دنبال کردن</button>
                <button class="follow-button followed" v-if="follow" @click="followUser">دنبال شده</button>
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
                   <span class="tag" v-for="(i , x) in post.tag" :key="x">
                        {{ i }}
                    </span>
                    <span class="save" @click="saveItem" ><img src="../../../../assets/img/svg-post/archive-add.svg" v-if="save" ><img src="../../../../assets/img/archive-add_3.svg" v-else ></span>
                    <span class="like save" @click="clickLike"><font-awesome-icon :icon="like_icon" /></span>
                </div>
            </div>
        </header>
        <div class='post-content'>
            <img :src="post.headerphoto" class="post-photo" alt="post-photo">
            <p> {{ post.articletext}} </p>
            <img :src="post.footerphoto" v-show="post.footerphoto" class="post-photo" alt="post-photo">
        </div>
    </div>
</template>

<script src="./post-full-content.js">
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variable";

.like{
    font-size: 23px;
}

.followed{
    background-color: #139eca !important;
    color: white !important;
    border: 0px !important;
}
.follow{
    flex-grow: 0;
    margin-right: 20px;
}
</style>
