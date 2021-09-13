<template>
    <section class="container">
        <profile-header></profile-header>
        <profile-nav @clicked="onClickNav"></profile-nav>
    </section>
    <main>
        <section class="post-container container" v-if="navigate[0]">
            <article class="about" >
                <profile-about></profile-about>
            </article>
        </section>
        <section class="post-container container" v-if="navigate[1]">
            <article class="card" v-for="(item,index) in posts" :key="index">
              <profile-post :post="item"></profile-post>
            </article>
        </section>
        <section class="follow-container container" v-if="navigate[2]">
            <article class="followers" v-for="(item,index) in 20" :key="index">
                <profile-follower></profile-follower>
            </article>
        </section>
    </main>
</template>

<script src="./profile.js"></script>

<style src="./profile.scss" lang="scss"></style>