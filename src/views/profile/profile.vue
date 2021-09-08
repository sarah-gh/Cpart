<template>
    <section class="container">
        <profile-header></profile-header>
        <profile-nav @clicked="onClickNav"></profile-nav>
    </section>
    <main>
        <section class="post-container container">
            <article class="card" v-for="(item,index) in posts" :key="index">
              <profile-post :post="item"></profile-post>
            </article>
        </section>
    </main>
</template>

<script src="./profile.js"></script>

<style src="./profile.scss" lang="scss"></style>