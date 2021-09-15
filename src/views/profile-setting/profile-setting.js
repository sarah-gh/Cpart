import { Form, Field, ErrorMessage } from 'vee-validate';
// import * as yup from 'yup';
// import  TextInput from "@/resources/components/custom/textInput/textInput.vue"
const BORDER_SIZE = 10;
const BORDER_COLOR = '#000000';

export default {
    name: 'profile-setting',
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data(){
        // const schema = yup.object({
        //     email: yup.string().required().email(),
        //     password: yup.string().required().min(8),
        //     fname: yup.string().required().min(3),
        //     lname: yup.string().required().min(3),
        //     username: yup.string().required().min(8),
        //     shortdescreption: yup.string().required().max(50),
        //     description: yup.string().required().max(160),
        //   });
        let validdd = [true, true, true];
        const schema = {
            fname(value){
                if(value.length < 3){
                    validdd[0] = false;
                    return "not valid fname"
                }
                validdd[0] = true;
                return true
            },
            lname(value){
                if(value.length < 3){
                    validdd[1] = false;
                    return "not valid lname"
                }
                validdd[1] = true;
                return true
            },
            shortdescreption(value){
                if(value.length < 3){
                    validdd[2] = false;
                    return "not valid shortdescreption"
                }
                validdd[2] = true;
                return true
            }
        };
        return {
            schema,
            validdd,
            show: true,
            edit: [false, false, false],
            fname: "امیر حسین",
            lname: "مطلب زاده",
            user: {
                fname: "امیر حسین",
                lname: "مطلب زاده",
                username: "amir.h.motalebzadeh",
                shortdescreption: "کارشناسی ارشد برنامه نویسی و علاقه مند به کوهنوردی",
                description: " کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.  ",
                privacy: "", 
                userPhoto : "",
                email : "a.h.motaleb@gmail.com",
                whatsapp : "a.h.motalleb",
                instagram : "a.h.motalleb",
                phoneNumber : "",
                fontFalmily : "",
                fontSize : "",
                fontColor : ""
            },
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
            ]
        }
    },
    methods: {
        onSubmit(values) {
            this.edit.forEach((value, index) => {
                if(value == 0){
                    this.user.fname = values.fname;
                    this.user.lname = values.lname;
                    this.user.shortdescreption = values.shortdescreption;
                }
                if(value == 1){

                }
                if(value){
                    this.subField(index);
                }
            });
        },
        subField(num){
            let err = false;
            this.validdd.forEach((value) => {
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