import { Form, Field, ErrorMessage } from 'vee-validate';
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import profileUpload from '@/resources/components/profile/profile-upload/profile-upload.vue';

const BORDER_SIZE = 10;
const BORDER_COLOR = '#000000';

export default {
    name: 'profile-setting',
    components: {
        Form,
        Field,
        ErrorMessage,
        profileUpload
    },
    data(){
        let valid = [true, true, true];
        const schema = {
            fname(value){
                if(value.length < 3){
                    valid[0] = false;
                    return "not valid fname"
                }
                valid[0] = true;
                return true
            },
            lname(value){
                if(value.length < 3){
                    valid[1] = false;
                    return "not valid lname"
                }
                valid[1] = true;
                return true
            },
            shortdescreption(value){
                valid[2] = true;
                return true
            }
        };
        const links = {
            email(value){
                if(value.length < 3){
                    valid[0] = false;
                    return "not valid fname"
                }
                if(!emailRegExp.test(value)){
                    valid[0] = false;
                    return "not valid"
                }
                valid[0] = true;
                return true
            },
            whatsapp(value){
                valid[1] = true;
                return true
            },
            instagram(value){
                valid[2] = true;
                return true
            }
        };
        return {
            schema,
            links,
            valid,
            show: true,
            security: false,
            edit: [false, false, false],
            user: {},
            imageUrl: '',
            imageStyle: {},
            border: BORDER_SIZE,
            borderColor: BORDER_COLOR,
            pickedColor: BORDER_COLOR,
            colors: [
                '#4286f4',
                '#23d160',
                '#FF8600',
                '#ff3860'
            ],
            imageData: '',
        }
    },
    
    created() {
        this.getDataSettings()
    },
    methods: {
        emitImg(img){
            this.imageData = img;
        },
        imgUpload(){
            let img = this.user.userphoto;
            var xhr = new XMLHttpRequest();       
            xhr.open("GET", img, true); 
            xhr.responseType = "blob";
            let res_img;
            xhr.onload = function (e) {
                var reader = new FileReader();
                reader.onload = function(event) {
                var res = event.target.result;
                res_img = res;
                }
                var file = this.response;
                reader.readAsDataURL(file)
            };
            xhr.send();
        },
        onSubmit(values) {
            this.edit.forEach((value, index) => {
                if(value === true) {
                    this.user.fname = values.fname;
                    this.user.lname = values.lname;
                    this.user.shortdescreption = values.shortdescreption;
                }
                if(value){
                    this.subField(index);
                }
            });
        },
        async getDataSettings(){
            try{
                await this.$store.dispatch('user/requestsettingUser');
                let user = this.$store.state.user.setting;
                this.user = user['0'];
                this.imgUpload();
                this.imageData = this.user.userphoto;
                if(!this.imageData){
                    this.imageData = 'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg'
                }
            } catch {
                console.log('error');
            }
        },
        onSubmitLink(values) {
            this.edit.forEach((value, index) => {
                if(value === true){
                    this.user.email = values.email;
                    this.user.whatsapp = values.whatsapp;
                    this.user.instagram = values.instagram;
                }
                if(value){
                    this.subField(index);
                }
            });
        },
        subField(num){
            let err = false;
            this.valid.map((value) => {
                if(value != true){
                    console.log('error')
                    return err = true;
                }
            });
            if(!err){    
                this.show = true;            
                this.edit.forEach((value, index) => {
                    if(index == num){
                        this.edit[index] = !this.edit[index]
                    }
                    else{
                        this.edit[index] = false;
                    }
                })
            } 
        },
        editField(num){
            this.show = false;
            this.edit.forEach((value, index) => {
                if(index == num){
                    this.edit[index] = !this.edit[index]
                }
                else{
                    this.edit[index] = false;
                }
            })
        },
        /////// upload img
        validateImageFile(fileList = {}) {
            if(!fileList.length) {
              this.error = 'Invalid File';
              return
            }
            const [file] = fileList;
            if(!file['type'].includes('image/')) {
              this.error = 'Invalid Image File'
              return
            }
            this.createImage(file);
        },
        onFileChange(e) {
            this.removeImage()
            this.validateImageFile(e.target.files)
        },
        dropImage(e) {
            this.validateImageFile(e.dataTransfer.files);
        },
        createImage(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
        
            reader.onload = (e) => {
                this.imageUrl = e.target.result;
            }
        },
        clickColor(color) {
            this.borderColor = color;
        },
        removeImage() {
            this.imageUrl = '';
            this.border = BORDER_SIZE;
            this.borderColor = BORDER_COLOR;
        }
    },
}