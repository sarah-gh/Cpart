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
      <article class="cards" v-for="(item, index) in userposts" :key="index">
        <post-summery :post="item" />
      </article>
    </section>
    <section class="follow-container container" v-if="navigate[1]">
      <article class="people" v-for="(item, index) in people" :key="index">
        <search-people :user="item" />
      </article>
    </section>
    <section class="tag-container container" v-if="navigate[2]">
      <article class="tags" v-for="(item, index) in 20" :key="index">
          <search-tag :tag-name="item" />
      </article>
    </section>
  </main>
</template>

<script>
import searchNav from "../../resources/components/search/search-nav/search-nav.vue";
import searchPeople from "../../resources/components/search/results/people.vue";
import postSummery from "../../resources/components/post/post-summary/post-summary.vue";
import seachTag from "../../resources/components/search/results/tags.vue";
export default {
  name: "search",
  data() {
    return {
      navigate: [true, false, false],
      textSearch: "",
    };
  },
  components: {
    searchNav,
    searchPeople,
    postSummery,
    seachTag
  },
  beforeMount() {
    console.log(this.$route.query.search),
      (this.textSearch = this.$route.query.search);
  },
  methods: {
    clickedSearch() {},
    onClickNav(data) {
      this.navigate.forEach((value, index) => {
        if (index == data) {
          this.navigate[index] = true;
        } else {
          this.navigate[index] = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variable";

.search-header {
  display: flex;
  align-items: center;
  direction: rtl;
  margin-top: 66px;
  margin-bottom: 45px;
  p {
    font-size: 18px;
    margin-left: 10px;
  }
  input {
    flex-grow: 1;
    background-color: transparent;
    padding: 10px 0;
    border: 0px;
    font-size: 24px;
    font-family: $font-bold;
    border-bottom: 2px solid $water-blue;
  }
}
.search {
  min-height: 80vh;
}
</style>