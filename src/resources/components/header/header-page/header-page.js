const ppl = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'John Cena'
    },
    {
        id: 3,
        name: 'Sylvester Stallone'
    }
]
import headerSearch from '../header-search/header-search.vue'

export default {
    name: 'header-page',
    props: {
        showheader: {
            type: Boolean,
            default: true,
        }
    },
    data(){
        return {
            isVisible : false,
            ppl: ppl,
            firstExample: 0,
            secondExample: 0,
            thirdExample: 0,
            fourthExample: 0,
            isVisibleSearch : false,
        }
    },
    methods: {
        thirdExampleSelected() {
            alert('Result: ' + this.thirdExample)
        },
        clickIsVisibleSearch(){
            this.isVisibleSearch = !this.isVisibleSearch;
        }
    },
    components:{
        headerSearch
    },
}

