<template>
    <section class="container" v-if="!isPublic">
        <header-nav @clicked="onClickNav"></header-nav>
    </section>
    <main>
        <section class="post-container container" v-if="summary">
            <article class="card" v-for="(item,index) in posts" :key="index">
              <post-summary :post="item"></post-summary>
            </article>
        </section>
        <section class="post-container container" v-else>
            <article class="card" v-for="(item,index) in posts" :key="index">
              <post-summary :post="item"></post-summary>
            </article>
        </section>
    </main>
</template>

<script src="./posts.js"></script>
<style lang="scss" src="./posts.scss"></style>