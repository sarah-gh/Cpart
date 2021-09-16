<template>
  <div class="register">
    <div class="head">شما هنوز در هلیوم ثبت نام نگرده اید.</div>
    <div class="fill-form">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</div>
    <Form class="form" @submit="onSubmit" :validation-schema="schema">
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
      <div class="label">*لطفا نام خانوادگی خود را وارد کنید</div>
      <Field
        class="input-box"
        name="lname"
        type="text"
        placeholder="your last name"
      />
      <div class="label">*لطفا ایمیل خود را وارد کنید</div>
      <Field
        class="input-box"
        name="email"
        type="email"
        placeholder="your email"
      />
      <div class="label">*لطفا نام کاربری دلخواه خود را وارد کنید.</div>
      <Field
        class="input-box"
        name="username"
        type="text"
        placeholder="your username"
      />
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
};
</script>

<style scoped lang="scss" src="./register.scss">
</style>