import { Form, Field, ErrorMessage } from 'vee-validate'
// let phoneNumberRegExp = /^\+?(09)\)?[-. ]?([0-9]{9})$/;
import profileUpload from '@/resources/components/profile/profile-upload/profile-upload.vue'
// import * as yup from 'yup';
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const BORDER_SIZE = 10
const BORDER_COLOR = '#000000'

export default {
  name: 'profile-setting',
  components: {
    Form,
    Field,
    ErrorMessage,
    profileUpload
  },
  data () {
    const valid = [true, true, true]
    const schema = {
      fname (value) {
        if (value.length < 3) {
          valid[0] = false
          return 'not valid fname'
        }
        valid[0] = true
        return true
      },
      lname (value) {
        if (value.length < 3) {
          valid[1] = false
          return 'not valid lname'
        }
        valid[1] = true
        return true
      },
      shortdescreption (value) {
        // if(value.length < 3){
        //     valid[2] = false;
        //     return "not valid shortdescreption"
        // }
        valid[2] = true
        return true
      }
    }
    const links = {
      email (value) {
        if (value.length < 3) {
          valid[0] = false
          return 'not valid fname'
        }
        if (!emailRegExp.test(value)) {
          valid[0] = false
          return 'not valid'
        }
        valid[0] = true
        return true
      },
      whatsapp (value) {
        // if(value.length < 3){
        //     valid[1] = false;
        //     return "not valid"
        // }
        valid[1] = true
        return true
      },
      instagram (value) {
        // if(value.length < 3){
        //     valid[2] = false;
        //     return "not valid"
        // }
        valid[2] = true
        return true
      }
    }
    return {
      schema,
      links,
      valid,
      show: true,
      security: false,
      edit: [false, false, false],
      fname: '',
      lname: '',
      user: {
        fname: 'امیر حسین',
        lname: 'مطلب زاده',
        username: 'amir.h.motalebzadeh',
        shortdescreption: 'کارشناسی ارشد برنامه نویسی و علاقه مند به کوهنوردی',
        description: ' کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.  ',
        privacy: '',
        userPhoto: '',
        email: 'a.h.motaleb@gmail.com',
        whatsapp: 'a.h.motalleb',
        instagram: 'a.h.motalleb',
        phoneNumber: '',
        fontFalmily: '',
        fontSize: '',
        fontColor: ''
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
      ],
      imageData: ''
    }
  },
  mounted () {
    const img = 'http://localhost:8080/img/340558.eb35fb35.jpeg'
    // console.log(img);
    var xhr = new XMLHttpRequest()
    xhr.open('GET', img, true)
    xhr.responseType = 'blob'
    let resImg
    xhr.onload = function (e) {
      // console.log('response')
      // console.log(this.response);
      var reader = new FileReader()
      reader.onload = function (event) {
        var res = event.target.result
        resImg = res
        this.imageData = resImg
        // console.log(res_img);
      }
      var file = this.response
      reader.readAsDataURL(file)
    }
    xhr.send()
    // setTimeout(() => {
    //   // console.log('xhr')
    //   this.imageData = resImg
    // }, 300)
  },
  created () {
    this.getDataSettings()
  },
  methods: {
    emitImg (img) {
      this.imageData = img
    },
    onSubmit (values) {
      this.edit.forEach((value, index) => {
        if (value === true) {
          this.user.fname = values.fname
          this.user.lname = values.lname
          this.user.shortdescreption = values.shortdescreption
        }
        if (value) {
          this.subField(index)
        }
      })
    },
    async getDataSettings () {
      try {
        await this.$store.dispatch('user/requestsettingUser')
        console.log('//////////////////')
        this.user = this.$store.state.user.setting
        console.log(this.user)
      } catch {
        console.log('error')
      }
    },
    onSubmitLink (values) {
      this.edit.forEach((value, index) => {
        if (value === true) {
          this.user.email = values.email
          this.user.whatsapp = values.whatsapp
          this.user.instagram = values.instagram
        }
        if (value) {
          this.subField(index)
        }
      })
    },
    subField (num) {
      let err = false
      this.valid.map((value) => {
        if (value !== true) {
          console.log('error')
          err = true
          return err
        }
      })
      if (!err) {
        this.show = true
        this.edit.forEach((value, index) => {
          if (index === num) {
            this.edit[index] = !this.edit[index]
          } else {
            this.edit[index] = false
          }
        })
      }
    },
    editField (num) {
      this.show = false
      this.edit.forEach((value, index) => {
        if (index === num) {
          this.edit[index] = !this.edit[index]
        } else {
          this.edit[index] = false
        }
      })
    },
    /// //// upload img
    validateImageFile (fileList = {}) {
      if (!fileList.length) {
        this.error = 'Invalid File'
        return
      }
      const [file] = fileList
      if (!file.type.includes('image/')) {
        this.error = 'Invalid Image File'
        return
      }
      this.createImage(file)
    },
    onFileChange (e) {
      this.removeImage()
      this.validateImageFile(e.target.files)
    },
    dropImage (e) {
      this.validateImageFile(e.dataTransfer.files)
    },
    createImage (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = (e) => {
        this.imageUrl = e.target.result
      }
    },
    clickColor (color) {
      this.borderColor = color
    },
    removeImage () {
      this.imageUrl = ''
      this.border = BORDER_SIZE
      this.borderColor = BORDER_COLOR
    }
  }
}
