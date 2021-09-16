<template>
  <div class="register-page">
    <div class="entry-register">ورود / ثبت نام</div>
    <Form class="form" @submit.prevent :validation-schema="simpleSchema">
      <p class="guide-text">لطفا شماره تلفن همراه خود را وارد کنید</p>
      <Field name="PhoneNumber" class="phone-number" />
      <ErrorMessage name="PhoneNumber" class="error-message">لطفا شماره خود را درست وارد کنید.</ErrorMessage>
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
    const simpleSchema = {
      PhoneNumber(value) {
        const regexPattern = /^09\d{9}$/;
        if (regexPattern.test(value)) {
          return true;
        }
        return "لطفا شماره خود را درست وارد کنید.";
      },
    };
  },

  methods: {},
};
</script>

<style src="./register.scss" scoped lang="scss">
</style>