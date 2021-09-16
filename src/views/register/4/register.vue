<template>
  <div class="register">
    <img src="@/assets/img/RegisterDone.svg" alt="success" class="center" />
    <div class="register-info">ثبت نام شما با موفقیت انجام شد.</div>
    <button class="button">ورود به سایت</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variable";
.register {
  margin-top: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 330px;
  .register-info {
    margin-top: 50px;
    direction: rtl;
    font-size: 18px;
    color: $dark-grey-blue;
  }
  .button {
    background-color: $tealish;
    border-radius: 10px;
    border-width: 0;
    margin: 35px auto 0 auto;
    width: 165px;
    height: 50px;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>