export default {
    name: 'header-nav',
    props: {

    },
    data(){
        return {
            tags: [],
            add_tag : true,
            tag: '',
            isActive: true
        }
    },
    methods: {
        addTag(){
            this.add_tag = !this.add_tag;
        },
        onEnter(){
            this.tags.push([this.tag, false]);
            this.tag = '';
            this.add_tag = false;
        },
        mouseover(index){
            this.tags[index][1] = true;
        },
        mouseleave(index){
            this.tags[index][1] = false;
        },
        deleteTag(index){
            for(let i = 0; i < this.tags.length; i++){ 
                if (i === index) { 
                    this.tags.splice(i, 1); 
                }
            }
        },
        navActive1(){
            this.isActive = !this.isActive;
            this.$emit('clicked', 'pishnehadi')
        },
        navActive2(){
            this.isActive = !this.isActive;
            this.$emit('clicked', 'donbalkonande')
        }
    }
}