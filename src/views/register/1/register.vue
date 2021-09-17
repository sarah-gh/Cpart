<template>
  <div class="register-page">
    <div class="entry-register">ورود / ثبت نام</div>
    <Form class="form" @submit="userNumber" :validation-schema="phoneNumber">
      <p class="guide-text">لطفا شماره تلفن همراه خود را وارد کنید</p>
      <Field name="number" type="tel" class="phone-number" />
      <ErrorMessage name="number" class="message-error">لطفا شماره خود را درست وارد کنید.</ErrorMessage>
      <button type="submit" class="button">ادامه</button>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
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
    return {
      phoneNumber
    }
  },

  methods: {
    userNumber(value){
      // code
    }
  },
};
</script>

<style src="./register.scss" scoped lang="scss">
</style>