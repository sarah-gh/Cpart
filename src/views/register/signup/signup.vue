<template>
  <div class="register">
    <div class="head">شما هنوز در هلیوم ثبت نام نکرده اید.</div>
    <div class="fill-form">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</div>
    <Form  @submit="onSubmit" :validation-schema="sign_up">
      <div class="form">
        <div class="form-group">
          <p class="label">شماره تلفن همراه شما</p>
          <Field
            class="input-box"
            name="phoneNumber"
            type="text"
            placeholder="your phone number"
          />
          <ErrorMessage name="phoneNumber"><span class="span_error">این فیلد ضروری است</span></ErrorMessage>
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
      <button class="button" type="submit">تایید</button>
    </Form>
  </div>
</template>

<script>
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegExp = /^\+?(09)\)?[-. ]?([0-9]{9})$/;

import { Form, Field, ErrorMessage } from "vee-validate";
import { signup } from '@/services/user.js'

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
        if(value){
          if(phoneNumberRegExp.test(value)){
            return "not valid";
          }
        }
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
    }
  },
  methods:{
    onSubmit(value){
      console.log(value);
      const data = {
        phoneNumber : '',
        fname : '',
        lname: '',
        email: '',
        username: '',
        password: ''
      }
    },
    async requestLogin(data) {
        try{
          const loginResponse = await signup(data);
        } catch {
          console.log(error);
        }
    }
  }
};

</script>

<style scoped lang="scss" src="./signup.scss">
</style>