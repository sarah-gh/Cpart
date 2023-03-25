<template>
  <div class="register-page register">
    <div class="entry-register">
      <router-link to="/authentication/login"> ورود </router-link>
      /
      <router-link to="/authentication/signup"> ثبت نام </router-link>
      </div>
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
              <span class="span_error" v-if="errSubmit">نام کاربری یا رمز عبور اشتباه است</span>
      </div>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { login } from '@/services/user.js'
// import { getCookieByName } from '@/resources/utilities.js'

export default {
  components: {
    Field,
    Form,
    ErrorMessage
  },
  data () {
    const phoneNumber = {
      number (value) {
        const regexPattern = /^09\d{9}$/
        if (regexPattern.test(value)) {
          return true
        }
        return 'not valid'
      }
    }
    const login = {
      username (value) {
        if (value) {
          if (value.length < 3) {
            return 'not valid username'
          }
        }
        if (!value) {
          return 'not valid username'
        }
        return true
      },
      password (value) {
        if (value) {
          if (value.length < 3) {
            return 'not valid password'
          }
        }
        if (!value) {
          return 'not valid password'
        }
        return true
      }
    }
    return {
      errSubmit: 0,
      phoneNumber,
      login
    }
  },

  methods: {
    userNumber (value) {
      // code
    },
    async onSubmit (value) {
      try {
        const status = await this.requestLogin(JSON.stringify(value))
        console.log('status ::::::', status)
        if (status === 200) {
          this.errSubmit = 0
          await this.$store.dispatch('user/requestProfileUser')
          this.$router.replace({ name: 'posts' })
          this.$store.state.login = true
        } else {
          this.errSubmit = 1
        }
      } catch (error) {
        console.log(error)
      }
    },

    async requestLogin (data) {
      try {
        return await login(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style src="./login.scss" scoped lang="scss">
</style>
