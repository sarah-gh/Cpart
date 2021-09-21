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
        },
        login: {
            type: Boolean,
            default: false,
        },
        photo: {
            type: String,
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
            local_login: false,
        }
    },
    beforeMount(){
        this.local_login = this.login;
        console.log(this.local_login);
    },
    methods: {
        thirdExampleSelected() {
            alert('Result: ' + this.thirdExample)
        },
        clickIsVisibleSearch(){
            this.isVisibleSearch = !this.isVisibleSearch;
        },
        log_in(){
            this.local_login = true;
            console.log('local_login');
            console.log(this.$emit)
            this.$emit('loginprofile');
        }
    },
    components:{
        headerSearch
    },
}

