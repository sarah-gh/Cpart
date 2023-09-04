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
  name: '',
  props: {
    follow: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isfollow: false
    }
  },
  created () {
    this.isfollow = this.follow.isfollowing === '1'
  },
  computed: {
    is_follow () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.isfollow = this.follow.isfollowing === '1'
      return ''
    }
  },
  mounted () {
    setTimeout(() => {
      console.log(this.follow)
    }, 3000)
  },
  methods: {
    reload () {
      console.log('reload page')
    },
    async endAction2 (data) {
      try {
        await this.$store.dispatch('user/requestfollow', data)
      } catch {
        console.log('error')
      }
    },
    followUser () {
      this.isfollow = !this.isfollow
      const statusFollow = this.isfollow ? 1 : 0
      const data = {
        operation: 'follow',
         followingId: this.follow.followerid,
        status: statusFollow
      }
      this.endAction2(JSON.stringify(data))
    }
  },
  emits: ['click_profile'],
  watch: {
    $route (to, from) {
      console.log(to.path)
      console.log(from.path)
      this.$emit('click_profile')
      // location.reload();
    }
  }

}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/_variables";
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
