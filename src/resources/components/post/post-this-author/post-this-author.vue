<template>
    <img :src="post.headerphoto" alt="capture1">
    <div class="other-post">
        <h3>
            {{post.title}}
        </h3>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">{{ post.date }}</p>
                <span class="circle"></span>
                <span class="time">{{ post.readtime }} دقیقه</span>
                <span class="circle"></span>
                <span class="tag" v-for="(item, index) in post.tag" :key="index">
                    {{ item }}
                </span>
                <span class="save" @click="saveItem" ><img src="../../../../assets/img/svg-post/archive-add.svg" v-if="save" ><img src="../../../../assets/img/archive-add_3.svg" v-else ></span>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript" src="./post-this-author.js"></script>
