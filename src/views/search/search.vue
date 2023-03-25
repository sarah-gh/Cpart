<template>
  <main class="search">
    <div class="search-header container">
      <p>نتایج برای</p>
      <input type="text" v-model="textSearch" class="input" v-on:keyup.enter="addItem" />
    </div>
    <div class="search-nav container">
      <search-nav @clicked="onClickNav"></search-nav>
    </div>
    <section class="post-container container" v-if="navigate[0]">
      <article class="card" v-for="(item, index) in posts" :key="index">
        <post-summery :post="item"></post-summery>
      </article>
    </section>
    <section class="follow-container container" v-if="navigate[1]">
      <article class="people" v-for="(item, index) in users" :key="index">
        <search-people :user="item" />
      </article>
    </section>
    <section class="tag-container container" v-if="navigate[2]">
      <article class="tags" v-for="(item, index) in tags" :key="index">
          <search-tag :tag="item" />
      </article>
    </section>
  </main>
</template>

<script>
import searchNav from '../../resources/components/search/search-nav/search-nav.vue'
import searchPeople from '../../resources/components/search/results/people.vue'
import postSummery from '../../resources/components/post/post-summary/post-summary.vue'
import searchTag from '../../resources/components/search/results/tags.vue'
export default {
  name: 'search',
  data () {
    return {
      navigate: [true, false, false],
      textSearch: '',
      posts: [],
      users: [],
      tags: []
    }
  },
  components: {
    searchNav,
    searchPeople,
    postSummery,
    searchTag
  },
  beforeMount () {
    console.log('this.$route.query.search')
    console.log(this.$route.query.search)
    this.textSearch = this.$route.query.search
    this.testtt(this.textSearch)
  },
  methods: {
    clickedSearch () {},
    onClickNav (data) {
      this.navigate.forEach((value, index) => {
        if (index === data) {
          this.navigate[index] = true
        } else {
          this.navigate[index] = false
        }
      })
    },
    addItem () {
      console.log('addItem')
      this.$router.replace({ name: 'search', query: { search: this.textSearch } })
      this.testtt(this.textSearch)
    },
    async testtt (data) {
      try {
        let res = await this.$store.dispatch('user/requestSearch', data)
        res = this.$store.state.user.searchItems
        this.posts = res.posts
        this.users = res.users
        this.tags = res.tags
        console.log('res')
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables";

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
<style lang="scss" src="./search.scss"></style>
