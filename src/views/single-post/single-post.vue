<template>
    <main class="main">
        <div class="main-container">
            <post-full-content :post="post"></post-full-content>
            
            <div class='this-author'>
                <span>از همین نویسنده</span>
            </div>
            <div class="headerLine">
                <div class="boldLine"></div>
                <div class="line"></div>
            </div>
            
            <div class="other-articles">
                <article class="article" v-for="(item, index) in otherPosts" :key="index">
                    <post-this-author :post="item"></post-this-author>
                </article>
            </div>

            <div class='comments-title'>
                <p>نظرات</p>
            </div>
            <div class="headerLine">
                <div class="boldLine"></div>
                <div class="line"></div>
            </div>

            <div class='comments' v-for="(com, i) in comments" :key="i">
                <post-comment :comment="com"></post-comment>
                <div class="commentLine"></div>
            </div>

            <post-new-comment></post-new-comment>            
            
        </div>
    </main>
</template>

<script src="./single-post.js"></script>
<style lang="scss" src="./single-post.scss"></style>