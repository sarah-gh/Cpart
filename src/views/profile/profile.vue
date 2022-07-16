<template>
    <section class="container" v-if="!load">
        <section class="load">
            <div class="load2">
                <hr/><hr/><hr/><hr/>
            </div>
        </section>
    </section>
    <section class="post-container container load connection" v-if="!connection">
        <p>
            ارتباط با سرور قطع شده است. لطفا اتصال اینترنت خود را بررسی کنید
        </p>
    </section>
    <section class="container" v-if="load && connection">
        <profile-header :user="userProfile"></profile-header>
        <profile-nav @clicked="onClickNav"></profile-nav>
    </section>
    <main v-if="load && connection">
        <section class="post-container container" v-if="navigate[0]">
            <article class="about" >
                <profile-about :about="about"></profile-about>
            </article>
        </section>
        <section class="post-container container" v-if="navigate[1]">
            <article class="card" v-for="(item,index) in userposts" :key="index">
              <profile-post :post="item"></profile-post>
            </article>
        </section>
        <section class="follow-container container" v-if="navigate[2]">
            <article class="followers" v-for="(item,index) in follows" :key="index">
                <profile-follower :follow="item"></profile-follower>
            </article>
        </section>
    </main>
</template>

<script src="./profile.js"></script>

<style src="./profile.scss" scoped lang="scss"></style>