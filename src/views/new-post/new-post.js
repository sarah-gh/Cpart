import modal from '../../resources/components/custom/modal-new-post/modal-new-post.vue';
export default {
    name: 'new-post',
    data(){ 
        return {
            article : {
                header: '',
                text: '',
                header_img: '',
                footer_img: '', 
                tsg: '',
            },
            text: '',
            tags: [],
            add_tag : false,
            tag: '',
            isActive: true,
            allowe: false,
            showModal: false,
        }
    },
    components: {
        modal
    },
    // mounted() {
    //     let textarea = document.querySelector(".resize-ta");
    //     textarea.addEventListener("keyup", () => {
    //         textarea.style.height = this.calcHeight(textarea.value) + "px";
    //     });
    // },
    computed: {

    },
    methods: {
        PublishContent(){
            //console.log(getValue(item))
            this.article.text = document.getElementById('span_id').innerHTML;
            console.log(this.article.text)
        },
        checkSpan(){
            let text = document.getElementById('span_id').innerHTML;
            if(text.length > 0){
                this.allowe = true;
            }
            else{
                this.allowe = false;
            }
        },
        getValue(item){
            console.log(item);
            return item
        },
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
        // inputtt(e){
        //     if(e.data == null){
        //         let t = this.text
        //         t = t.substring(0, t.length - 1);
        //         this.text = t;
        //     }
        //     else {
        //         this.text += e.data
        //     }
        //     console.log(this.text);
        // },
        // calcHeight(value) {
        //     let numberOfLineBreaks = (value.match(/\n/g) || []).length;
        //     // min-height + lines x line-height + padding + border
        //     let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
        //     return newHeight;
        //   }
    }
}
  
  