<template>
    <div class="card-img">
        <img :src="post.headerphoto" alt="img post" @mouseover="hoverPost = true" @click="routeQuery(post)" />
    </div>
    <div class="card-post">
        <header class="post-header">
            <div class="post-author">

                <router-link :to="routeName(post)">
                    <img class="avatar" :src="userphoto" alt="avatar" />
                </router-link>
                <router-link :to="routeName(post)" class="author-name">{{ post.fname }} {{ post.lname }}</router-link>
            </div>
            <div class="follow" v-show="not_user">
                <button class="follow" v-if="!follow" @click="followUser">دنبال کردن</button>
                <button class="follow followed" v-if="follow" @click="followUser">دنبال شده</button>
            </div>

        </header>
        <div class="post-content">
            <router-link class="article-link" :to="routeTitle(post)">
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
                <span class="time">{{ post.readtime }} دقیقه </span>
                <span class="circle"></span>
                <span class="tag" v-for="(item, index) in post.tag" :key="index">
                    {{ item }}
                </span>
                <span class="save" @click="saveItem" ><img src="../../../../assets/img/svg-post/archive-add.svg" v-if="save" ><img src="../../../../assets/img/archive-add_3.svg" v-else ><p> {{ saveCount }} </p></span>
                <span class="save time like" @click="likeItem" ><font-awesome-icon :icon="like_icon" /><p> {{ likeCount }} </p></span>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript" src="./post-summary.js"></script>

<style lang="scss" scoped>
.followed{
    background-color: #139eca !important;
    color: white !important;
    border: 0px !important;
}
.follow{
    flex-grow: 0;
    margin-right: 20px;
}
.save {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    p {
        margin: 0;
        padding: 0;
        margin-bottom: -6px;
        font-size: 16px;
        // color: #ccc
        // line-height: 0;
    }
}
</style>
