<template>
    <div class="follower">
        <router-link :to="'/panel/profile/' + follow.followerid" class="follower" @click="reload()">
        <!-- <a class="follower" @click="reload()"> -->
            <img :src="follow.userphoto" />
            <div class="content">
                <h3>{{ follow.fname }} {{ follow.lname }}</h3>
                <p>{{ follow.shortdescription }}</p>
            </div>
        </router-link>
        <!-- </a> -->
        <button class="follow" v-if="!isfollow" @click="followUser">دنبال کردن</button>
        <button class="follow followed" v-if="isfollow" @click="followUser">دنبال شده</button>
        {{ is_follow }}
    </div>
</template>
<script>
export default {
    name: "",
    props: {
        follow: {
            type: Object,
            required: true,
        }
    },
    data() {
        return{
            isfollow: false
        }
    },
    created() {
        this.isfollow = this.follow.isfollowing == '1' ? true : false;
    },
    computed: {
        is_follow() {
            this.isfollow = this.follow.isfollowing == '1' ? true : false;
            return "";
        }
    },
    mounted(){
        setTimeout(() => {
            console.log(this.follow);
        }, 3000);
    },
    methods : {
        reload(){
            console.log("reload page");
            
        },
        async testtt2(data){
            try{
                await this.$store.dispatch('user/requestfollow', data);
            } catch {
                console.log('error');
            }
        },
        followUser() {
            this.isfollow = !this.isfollow;
            let status_follow = this.isfollow ? 1 : 0;
            const data = {
                operation: "follow",
                csrfToken: this.$store.state.user.csrfToken,
                followingId: this.follow.followerid,
                status: status_follow
            }
            this.testtt2(JSON.stringify(data))
        },
    },
    watch:{
      $route (to, from){
        console.log(to.path);
        console.log(from.path);
        this.$emit('click_profile')
        //location.reload();
      }
    },

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