<template>
    <main class="search">
        <div class="search-header container">
            <p>نتایج برای</p>
            <input type="text" class="input" />
        </div>
        <div class="search-nav container">
            <search-nav @clicked="clickedSearch"></search-nav>
        </div>
        <section class="container">
    </main>
</template>

<script>
import searchNav from '../../resources/components/search/search-nav/search-nav.vue'
export default {
    name: "search",
    data() {
        return{

        }
    },
    components: {
        searchNav
    },
    methods: {
        clickedSearch(){
            
        }
    }

}
</script>