<template>
  <div class="register">
    <div class="head">شما هنوز در هلیوم ثبت نام نگرده اید.</div>
    <div class="fill-form">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</div>
    <Form class="form" @submit="onSubmit" :validation-schema="signUp">
      <div class="label">شماره تلفن همراه شما</div>
      <Field
        class="input-box"
        name="phoneNumber"
        type="text"
        placeholder="your phone number"
        value="09151232321"
      />
      <div class="label">*لطفا نام خود را وارد کنید</div>
      <Field
        class="input-box"
        name="fname"
        type="text"
        placeholder="your first name"
      />
      <ErrorMessage name="fname">این فیلد ضروری است</ErrorMessage>
      <div class="label">*لطفا نام خانوادگی خود را وارد کنید</div>
      <Field
        class="input-box"
        name="lname"
        type="text"
        placeholder="your last name"
      />
      <ErrorMessage name="lname">این فیلد ضروری است</ErrorMessage>
      <div class="label">*لطفا ایمیل خود را وارد کنید</div>
      <Field
        class="input-box"
        name="email"
        type="email"
        placeholder="your email"
      />
      <ErrorMessage name="email">ایمیل وارد شده نا معتبر است.</ErrorMessage>
      <div class="label">*لطفا نام کاربری دلخواه خود را وارد کنید.</div>
      <Field
        class="input-box"
        name="username"
        type="text"
        placeholder="your username"
      />
      <ErrorMessage name="username">این نام کاربری قبلا انتخاب شده است</ErrorMessage>
    </Form>
    <button class="button" type="submit">تایید</button>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const signUp = {
      fname(value) {
        if (value.length === 0) {
          return "this field can not be empty";
        } else {
          return true;
        }
      },
      lname(value) {
        if (value.length === 0) {
          return "this field can not be empty";
        } else {
          return true;
        }
      },
      email(value) {
        const regexPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (regexPattern.test(value)) {
          return true;
        } else {
          return "invalid email";
        }
      },
      username(value){
        // check if username exists or not
        return true
      }
    };
    return {
      signUp,
    };
  },
  methods:{
    onSubmit(value){
      // code
    }
  }
};

</script>

<style scoped lang="scss" src="./register.scss">
</style>