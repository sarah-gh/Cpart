<template>
    <section class="container" v-if="!isPublic">
        <header-nav @clicked="onClickNav"></header-nav>
    </section>
    <main>
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
        <section class="post-container container load connection" v-if="!connection">
            <p>
                ارتباط با سرور قطع شده است. لطفا اتصال اینترنت خود را بررسی کنید
            </p>
        </section>
        <section class="post-container container" v-if="summary && load && connection">
            <article class="card" v-for="(item,index) in posts" :key="index">
              <post-summary :post="item"></post-summary>
            </article>
        </section>
        <section class="post-container container" v-if="!summary && load && connection">
            <article class="card" v-for="(item,index) in posts" :key="index">
              <post-summary :post="item"></post-summary>
            </article>
        </section>
    </main>
</template>

<script src="./posts.js"></script>
<style lang="scss" src="./posts.scss"></style>