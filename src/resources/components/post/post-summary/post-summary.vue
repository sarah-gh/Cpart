<template>
    <div class="card-img">
        <img :src="post.headerphoto" alt="img post" @mouseover="hoverPost = true" @click="routeQuery(post)" />
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
                <span class="tag">
                    {{ post.tag }}
                </span>
                <span class="save"><img src="../../../../assets/img/archive-add_3.svg"></span>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript" src="./post-summary.js"></script>