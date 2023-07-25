<template>
    <main class="main">
        <section class="load" v-if="!load">
            <!-- <img src="@/assets/img/1494.gif" /> -->
            <!-- <div class="load-wrapp">
                <div class="load-3">
                    <p>Loading 3</p>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div> -->
            <div class="load2">
                <hr/><hr/><hr/><hr/>
            </div>
        </section>
        <div class="main-container"  v-if="load">
            <post-full-content @getPosts="getPosts" :post="post"></post-full-content>

            <div class='this-author' v-if="otherPosts.length > 0">
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

            <div class='comments' v-for="(com, index) in comment" :key="index">
                <post-comment @replyComment="reply" :comment="com" ></post-comment>
                <div class="commentLine"></div>
            </div>

            <post-new-comment :replyto="replyto" @add_comment="addComment" @cancel="cancel" :postid="post.articleid"></post-new-comment>

        </div>
    </main>
</template>

<script src="./single-post.js"></script>
<style lang="scss" src="./single-post.scss"></style>
