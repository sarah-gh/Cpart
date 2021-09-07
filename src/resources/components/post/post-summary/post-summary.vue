<template>
    <div class="card-img">
        <img :src="post.articleheaderphoto" alt="img post" @mouseover="hoverPost = true" @click="routeQuery(post)" />
    </div>
    <div class="card-post">
        <header class="post-header">
            <div class="post-author">
                <a href="#">
                    <img class="avatar" :src="post.userphoto" alt="avatar" />
                </a>
                <a href="#" class="author-name">{{ post.fname }} {{ post.lname }}</a>
            </div>
            <div class="follow">
            <button>دنبال کردن</button>
            
            </div>

        </header>
        <div class="post-content">
            <a class="article-link" @click="routeQuery(post)">
                <h2 class="post-title"> 
                    {{ post.articletitle }}
                </h2>
                <div class="post-text Text-Style">
                    {{ text }}
                </div>
            </a>
        </div>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">{{ post.articledate }}</p>
                <span class="circle"></span> 
                <span class="time">{{ post.readtime }} دقیقه </span>
                <span class="circle"></span> 
                <span class="tag">
                    {{ post.articletag }}
                </span>
                <span class="save"><img src="../../../../assets/img/archive-add_3.svg"></span>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript" src="./post-summary.js"></script>