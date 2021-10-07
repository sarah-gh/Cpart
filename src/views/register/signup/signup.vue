<template>
  <div class="register">
    <div class="entry-register">

      <router-link to="/authentication/login"> ورود </router-link>
      /
      <router-link to="/authentication/signup"> ثبت نام </router-link>
    </div>
    <div class="fill-form">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</div>
    <Form  @submit="onSubmit" :validation-schema="sign_up">
      <div class="form">
        <div class="form-group">
          <p class="label">شماره تلفن همراه شما</p>
          <Field
            class="input-box"
            name="phoneNumber"
            type="phone"
            placeholder="your phone number"
          />
          <!-- <ErrorMessage name="phoneNumber"><span class="span_error">این فیلد ضروری است</span></ErrorMessage> -->
        </div>
        <div class="form-group">
          <p class="label">لطفا نام خود را وارد کنید*</p>
          <Field
            class="input-box dir_rtl"
            name="fname"
            type="text"
            placeholder="your first name"
          />
          <ErrorMessage name="fname"><span class="span_error">این فیلد ضروری است</span></ErrorMessage>
        </div>
        <div class="form-group">
          <p class="label">لطفا نام خانوادگی خود را وارد کنید*</p>
          <Field
            class="input-box dir_rtl"
            name="lname"
            type="text"
            placeholder="your last name"
          />
          <ErrorMessage name="lname"><span class="span_error">این فیلد ضروری است</span></ErrorMessage>
        </div>
        <div class="form-group">
          <p class="label">لطفا ایمیل خود را وارد کنید*</p>
          <Field
            class="input-box"
            name="email"
            type="email"
            placeholder="your email"
          />
          <ErrorMessage name="email"><span class="span_error">ایمیل وارد شده نا معتبر است.</span></ErrorMessage>
        </div>
        <div class="form-group">
          <p class="label">لطفا نام کاربری دلخواه خود را وارد کنید*.</p>
          <Field
            class="input-box"
            name="username"
            type="text"
            placeholder="your username"
          />
          <ErrorMessage name="username"><span class="span_error">
            <!-- این نام کاربری قبلا انتخاب شده است  -->
            (حداقل ۳ حرف)</span></ErrorMessage>
        </div>
        <div class="form-group">
          <label class="label" for="password">رمز عبور*</label>
          <Field
            class="input-box dir_rtl"
            name="password"
            type="password"
            placeholder="your first name"
          />
          <ErrorMessage name="password"><span class="span_error">این فیلد ضروری است</span></ErrorMessage>
        </div>
      </div>
      <div>
        <button class="button button_sub" type="submit">تایید</button>
        <span class="span_error_btn">{{ error_msg }}</span>
      </div>
    </Form>
  </div>
</template>

<script>
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegExp = /^(0)?09\d{9}$/g; ///^\+?(09)\)?[-. ]?([0-9]{9})$/;
// const mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig,

import { Form, Field, ErrorMessage } from "vee-validate";
import { signup } from '@/services/user.js'
import { getCookieByName } from '@/resources/utilities.js';

export default {
  name: "signup",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const sign_up = {
      phoneNumber(value){
        // if(value){
        //   if(phoneNumberRegExp.test(value)){
        //     return "not valid";
        //   }
        // }
        if(!value){
          return "not valid";
        }
        return true;
      },
      fname(value) {
        if(value){
          if(value.length < 3){
            return "not valid";
          }
        }
        if(!value){
          return "not valid";
        }
        return true;
      },
      lname(value) {
        if(value){
          if(value.length < 3){
            return "not valid";
          }
        }
        if(!value){
          return "not valid";
        }
        return true;
      },
      email(value) {
        if(value){
          if(!emailRegExp.test(value)){
            return "not valid";
          }
        }
        if(!value){
          return "not valid";
        }
        return true;
      },
      username(value){
        if(value){
          if(value.length < 3){
            return "not valid";
          }
        }
        if(!value){
          return "not valid";
        }
        return true;
      },
      password(value){
        if(value){
          if(value.length < 6){
            return "not valid";
          }
        }
        if(!value){
          return "not valid";
        }
        return true;
      }
    }
    return {
      sign_up,
      error_msg : ''
    }
  },
  methods:{
    async onSubmit(value){
      console.log(value);
      this.error_msg = '';
      try{
        const data = {
          phoneNumber : value.phoneNumber,
          fname : value.fname,
          lname: value.lname,
          email: value.email,
          username: value.username,
          password: value.password
        }
        let res = await this.requestSignup(JSON.stringify(data));        
        console.log("requestSignup error 1")
        console.log(res);
        if(res == 409) {
          this.error_msg = 'نام کاربری تکراری است'
          return
        }
        if(res == 400 || res == 401) {
          this.error_msg = 'ورودی نامعتبر'
          return
        }
        await this.getCsrfToken();
        await this.$store.dispatch('user/requestProfileUser');
        this.$router.replace({ name: 'posts' });
        this.$store.state.login = true;
      } catch(error) {
        console.log(error);
      }
    },
    async requestSignup(data) {
        let res = await signup(data);
        return res;
    },
    getCsrfToken: async function (){
      const access_token = getCookieByName('token')
      const response = await this.axios.get('http://localhost:8000/api/users/csrf', {
        headers:{
          token: access_token
        }
      }).catch(err => console.log(err))
      this.$store.state.user.csrfToken = response.data.csrfToken;
    },
  }
};

</script>

<style scoped lang="scss" src="./signup.scss">
</style>