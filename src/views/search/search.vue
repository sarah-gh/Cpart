<template>
    <main class="search">
        <div class="search-header container">
            <p>نتایج برای</p>
            <input type="text" v-model="textSearch" class="input" />
        </div>
        <div class="search-nav container">
            <search-nav @clicked="onClickNav"></search-nav>
        </div>
        <section class="post-container container" v-if="navigate[0]">
            <article class="about" >
                <!-- <profile-about :about="about"></profile-about> -->
            </article>
        </section>
        <section class="post-container container" v-if="navigate[1]">
            <article class="card" v-for="(item,index) in userposts" :key="index">
              <!-- <profile-post :post="item"></profile-post> -->
            </article>
        </section>
        <section class="follow-container container" v-if="navigate[2]">
            <article class="followers" v-for="(item,index) in 20" :key="index">
                <!-- <profile-follower></profile-follower> -->
            </article>
        </section>
    </main>
</template>

<script>
import searchNav from '../../resources/components/search/search-nav/search-nav.vue'
export default {
    name: "search",
    data() {
        return{
            navigate: [true, false, false],
            textSearch: ''
        }
    },
    components: {
        searchNav
    },
    beforeMount(){
        console.log(this.$route.query.search),
        this.textSearch = this.$route.query.search;
    },
    methods: {
        clickedSearch(){

        },
        onClickNav(data){
            this.navigate.forEach((value,index) => {
                if(index == data) {
                    this.navigate[index] = true;
                } else {
                    this.navigate[index] = false;
                }
            })
        },
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variable";

.search-header{
    display: flex;
    align-items: center;
    direction: rtl;
    margin-top: 66px;
    margin-bottom: 45px;
    p{
        font-size:18px;
        margin-left: 10px;
    }
    input{
        flex-grow: 1;
        background-color: transparent;
        padding: 10px 0;
        border: 0px;
        font-size:24px;
        font-family: $font-bold;
        border-bottom: 2px solid $water-blue;
    }
}
.search{
    min-height: 80vh;
}
</style>