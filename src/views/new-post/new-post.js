import modalNewPost from '@/resources/components/custom/modal-new-post/modal-new-post.vue';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import postUpload from '@/resources/components/post/post-upload/post-upload.vue'
export default {
    name: 'new-post',
    data(){ 
        return {
            article : {
                header: '',
                text: '',
                header_img: '',
                footer_img: '', 
                tags: [],
                date : ''
            },
            text: '',
            tags: [],
            add_tag : false,
            isActive: true,
            allowe: false,
            showModal: false,
            imgSrc: '',
            cropImg: '',
            data: null,
            img_set: false,
            imgfooter: false,
            error_tag: false,
            month : [
              'فروردین',
              'اردیبهشت',
              'خرداد',
              'تیر',
              'مرداد',
              'شهریور',
              'مهر',
              'آبان',
              'آذر',
              'دی',
              'بهمن',
              'اسفند',
            ],
            number: [
              '۱',
              '۲',
              '۳',
              '۴',
              '۵',
              '۶',
              '۷',
              '۸',
              '۹',
              '۱۰',
              '۱۱',
              '۱۲',
            ]
        }
    },
    components: {
        modalNewPost,
        VueCropper,
        postUpload
    },
    emits: ["addImage","on_enter",'Modalfalse'],
    methods: {
      PublishContent(){
          let now = new Date().toLocaleDateString('fa-IR');
          now = now.split('/');
          let month;
          this.number.forEach((value, index) => {
            if(value == now[1]){
              month = index - 1;
            }
          })
          let data = `${now[2]}<span>${this.month[month]}</span>${now[0]}`
          this.article.date = data;
      },
      checkSpan(){
          this.article.text = document.getElementById('span_id').innerHTML;
          if(this.article.text.length > 0 && this.article.header.length > 0){
              this.allowe = true;
          }
          else{
              this.allowe = false;
          }
      },
      getValue(item){
          return item
      },
      addTag(){
          this.add_tag = !this.add_tag;
      },
      onEnterModal(value){
          if(this.tags.length == 3){
            this.error_tag = true;
          }
          this.tags.push([value[0], false]);
          this.showModal = value[1];
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
      add_image(value){
          if(value[0] == 'header'){
            this.article.header_img = value[1];
          }
          else{
            this.article.footer_img = value[1];
          }
      }
    }
}
  
  