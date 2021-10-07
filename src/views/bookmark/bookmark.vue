<template>
    <main>
        <section class="load" v-if="!load">
            <div class="load2">
                <hr/><hr/><hr/><hr/>
            </div>
        </section>
        <section class="post-container container load connection" v-if="!connection">
            <p>
                ارتباط با سرور قطع شده است. لطفا اتصال اینترنت خود را بررسی کنید
            </p>
        </section>
        <div class="saved-message container"  v-if="load && connection">
            <img src="@/assets/img/svg-post/saved-messages.svg" alt="">
            <h2>مقالات ذخیره شده</h2>
        </div>
        <section class="post-container container" v-if="load && connection">
            <article class="card" v-for="(item,index) in posts" :key="index">
                <post-summary-bookmark :post="item"></post-summary-bookmark>
            </article>
            <div class="msg" v-if="posts.length < 1"> شما هنوز مقاله ای ذخیره نکرده اید </div>
        </section>
    </main> 
</template>

<script src="./bookmark.js"></script>
<style src="./bookmark.scss" lang="scss"></style>