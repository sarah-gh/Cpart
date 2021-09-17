<template>
  <div class="register">
    <div class="head">ارسال کد تایید</div>
    <div class="register-info">
      <div>کد تایید به شماره {{ phoneNumber }} ارسال شد.</div>
      <div class="green change-number">اصلاح شماره تلفن</div>
    </div>
    <div class="register-code">
      <div class="register-guide">لطفا کد ۵ رقمی ارسال شده را وارد نمایید</div>
      <div class="digit-box">
          <num-input class="digit" v-for="index in 5" :key="index"></num-input>
      </div>
    </div>
    <button type="submit" class="button">تایید</button>
    <div class="remained-time">زمان باقیمانده {{ leftTime }}</div>
    <div class="recieve-code">
      کد دریافت نکرده اید؟ <span class="green send-again">ارسال مجدد</span>
    </div>
  </div>
</template>

<script>
import numInput from "../../../resources/components/register/codeButton/button.vue";
export default {
  components: {
    numInput,
  },
  created: function timer() {
    const timerInterval = setInterval(() => {
      this.leftTime -= 1;
      if (this.leftTime === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  },

  data() {
    return {
      leftTime: 120,
      phoneNumber: "۰۹۱۲۱۲۳۴۳۲۰",
      numbers : [1,2,3,4]
    };
  },
};
</script>

<style scoped lang="scss" src="./register.scss">
</style>