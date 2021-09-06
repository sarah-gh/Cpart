<template>

    <main>
        <div class="saved-message container">
            <img src="@/assets/img/svg-post/saved-messages.svg" alt="">
            <h2>مقالات ذخیره شده</h2>
        </div>
        <section class="post-container container">
            <article class="card" v-for="(item,index) in posts" :key="index" >
                <post-summary :post="item"></post-summary>
            </article>
        </section>
    </main> 
</template>

<script src="./bookmark.js"></script>
<style src="./bookmark.scss" lang="scss"></style>