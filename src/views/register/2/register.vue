<template>
  <div class="register">
    <div class="head">ارسال کد تایید</div>
    <div class="register-info">
      <div>کد تایید به شماره {{ phoneNumber }} ارسال شد.</div>
      <div class="green change-number">اصلاح شماره تلفن</div>
    </div>
    <div class="register-code">
      <div>لطفا کد ۵ رقمی ارسال شده را وارد نمایید</div>
      <div class="digit-box">
        <!-- v for -->
      </div>
    </div>
    <button type="submit" class="button">تایید</button>
    <div class="remained-time">زمان باقیمانده {{ leftTime }} دقیقه</div>
    <div class="recieve-code">
      کد دریافت نکرده اید؟ <span class="green send-again">ارسال مجدد</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftTime: "۲",
      phoneNumber: "۰۹۱۲۱۲۳۴۳۲۰",
    };
  },
};
</script>

<style scoped lang="scss" src="./register.scss">

</style>