<template>
    <div class="follower">
        <img src="@/assets/img/6893547.png" />
        <div class="content">
            <h3>آناهیتا شجاعی</h3>
            <p>دانشجو دکترای پژوهش هنر در دانشگاه تهران</p>
        </div>
        <button class="follow">دنبال کردن</button>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variable";
@import "@/assets/sass/_button";

.follower {
    width: 100%;
    display: flex;
    flex-direction:row-reverse;
    justify-content:space-between;
    align-items:flex-start;
    font-family: $font-roman;
    line-height: 2;
    img{
        width: 67px;
        height: 67px;
        border-radius: 50%;
    }
    .content{
        direction: rtl;
        color: $dark-grey-blue;
        h3{
            font-size: 18px;
        }
        p{
            font-size: 16px;
        }
    }
}
</style>