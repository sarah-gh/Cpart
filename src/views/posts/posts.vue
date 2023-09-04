<template>
    <section class="container" v-if="!isPublic">
        <h1>هلیوم، سایتی برای به اشتراک گذاری کتب و مجلات معتبر علمی</h1>
        <header-nav @clicked="onClickNav"></header-nav>
    </section>
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
        <section class="post-container container" v-if="summary && load && connection">
            <article class="card" v-for="(item, index) in posts" :key="index">
              <post-summary :post="item"></post-summary>
            </article>
            <button @click="getMorePosts">مشاهده بیشتر</button>

            <!-- <div class="msg" v-if="!posts"> {{ msg }} </div> -->
        </section>
        <section class="post-container container" v-if="!summary && load && connection">
            <article class="card" v-for="(item,index) in posts" :key="index">
              <post-summary :post="item"></post-summary>
            </article>
            <div class="msg" v-if="!msg"> {{ msg }} </div>
            <button @click="getMorePosts">مشاهده بیشتر</button>
        </section>
    </main>
</template>

<script src="./posts.js"></script>
<style lang="scss" src="./posts.scss"></style>
