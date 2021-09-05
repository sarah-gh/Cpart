<template>
    <main>
        <section class="post-container container">
            <article class="card" v-for="(item,index) in posts" :key="index" >
                <post-summary :post="item"></post-summary>
            </article>
        </section>
    </main>
</template>

<script src="./posts.js"></script>
<style lang="scss" src="./posts.scss"></style>