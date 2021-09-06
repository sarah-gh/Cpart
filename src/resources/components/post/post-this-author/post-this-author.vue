<template>
    <img :src="require(`@/assets/img/${post.img}`)" alt="capture1">
    <div class="other-post">
        <h3> 
            {{post.header}}
        </h3>
        <footer class="post-footer">
            <div class="flex-footer">
                <p class="date">۲۸ تیر ۱۴۰۰</p>
                <span class="circle"></span> 
                <span class="time">۷ دقیقه مطالعه</span>
                <span class="circle"></span> 
                <span class="tag">تکنولوژی</span>
                <span class="save"><img src="../../../../assets/img/archive-add_2.svg"></span>
            </div>
        </footer>
    </div>
</template>

<script type="text/javascript" src="./post-this-author.js"></script>
