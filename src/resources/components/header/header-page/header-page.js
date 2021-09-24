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
            default: false,
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
            show_header: false,
            userLogin: {},
        }
    },
    beforeMount(){
        this.local_login = this.login;
        console.log('local_login');
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
    computed: {
        
    },
    components:{
        headerSearch
    },
    watch: { 
        login: function(newVal, oldVal) { // watch it
            this.local_login = newVal;
            console.log('Prop login changed: ', newVal, ' | was: ', oldVal)
        },
        showheader: function(newVal, oldVal) { // watch it
            this.show_header = newVal;
            console.log('Prop showheader changed: ', newVal, ' | was: ', oldVal)
        },
    }
}

