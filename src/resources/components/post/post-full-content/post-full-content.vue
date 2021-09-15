<template>
    <div class="card-post">
        <header class=post-header>
            <div class="post-author">
                <a href="#">
                    <img class="avatar" :src="post.userphoto" alt="avatar" />
                </a>  
                <a href="#" class="author-name">{{ post.fname }} {{ post.lname }}</a>
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
            <img :src="post.footerphoto" class="post-photo" alt="post-photo">
        </div>
    </div>
</template>

<script src="./post-full-content.js">
</script>