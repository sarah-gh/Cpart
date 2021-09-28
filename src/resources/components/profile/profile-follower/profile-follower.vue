<template>
    <div class="follower">
        <router-link :to="'/profile/' + follow.followedby" class="follower">
            <img :src="follow.userphoto" />
            <div class="content">
                <h3>{{ follow.fname }} {{ follow.lname }}</h3>
                <p>{{ follow.shortdescription }}</p>
            </div>
        </router-link>
        <button class="follow" v-if="follow.arewefollowing == 0">دنبال کردن</button>
        <button class="follow followed" v-if="follow.arewefollowing == 1">دنبال شده</button>
    </div>
</template>
<script>
export default {
    name: "",
    props: {
        follow: {
            type: Object,
            required: true
        }
    },
    data() {
        return{

        }
    },
    mounted(){
        setTimeout(() => {
            // console.log(this.follow);
        }, 3000);
    }

}
</script>
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
        flex-grow: 2;
        margin-right: 28px;
        h3{
            font-size: 18px;
        }
        p{
            font-size: 16px;
        }
    }
}
.followed{
    background-color: #139eca !important;
    color: white !important;
    border: 0px !important;
}
.follow{
    width: 80px !important;
    flex-grow: 1 !important;
    margin-right: 20px;
}
</style>