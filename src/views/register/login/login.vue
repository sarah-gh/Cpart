<template>
  <div class="register-page">
    <div class="entry-register">ورود / ثبت نام</div>
    <!-- <Form class="form" @submit="userNumber" :validation-schema="phoneNumber">
      <p class="guide-text">لطفا شماره تلفن همراه خود را وارد کنید</p>
      <Field name="number" type="tel" class="phone-number" />
      <ErrorMessage name="number" class="message-error"><span class="span_error">لطفا شماره خود را درست وارد کنید.</span></ErrorMessage>
    </Form> -->
    <Form  @submit="onSubmit" :validation-schema="login">
      <div class="form">
        <div class="form-group">
          <label class="label" for="username">نام کاربری*</label>
          <Field
            class="input-box"
            name="username"
            type="text"
            placeholder="your phone number"
          />
          <ErrorMessage name="username"><span class="span_error">این فیلد ضروری است</span></ErrorMessage>
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
              <button type="submit" class="button">ادامه</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import {login} from '@/services/user.js'
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    const phoneNumber = {
      number(value) {
        const regexPattern = /^09\d{9}$/;
        if (regexPattern.test(value)) {
          return true;
        }
        return "not valid";
      },
    };
    const login = {
      username(value){
        if(value){
          if(value.length < 3){
            return "not valid username";
          }
        }
        if(!value){
          return "not valid username";
        }
        return true;
      },
      password(value) {
        if(value){
          if(value.length < 3){
            return "not valid password";
          }
        }
        if(!value){
          return "not valid password";
        }
        return true;
      },
    }
    return {
      phoneNumber,
      login
    }
  },

  methods: {
    userNumber(value){
      // code
    },
    async onSubmit(value){
      try{
        console.log('onSubmit')
        console.log(JSON.stringify(value));
        await this.requestLogin(JSON.stringify(value));
        console.log('Success ');
        await this.$store.dispatch('user/requestProfileUser');
        this.emitter.emit("onclickLogin");
        this.$router.replace({ path: '/' });
      } catch {
        console.log(error);
      }
    },
   
    async requestLogin(data) {
        try{
          console.log('requesting login...');
          const loginResponse = await login(data);
        } catch {
          console.log(error);
        }
        
        // this.$router.push('/')

    }
  },
};
</script>

<style src="./login.scss" scoped lang="scss">
</style>