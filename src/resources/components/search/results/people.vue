<template>
  <div class="component">
    <img
      class="user-photo"
      :src="user.userphoto"
      alt=""
    />
    <div class="introduction">
      <div class="user-name">{{user.fname}} {{user.lname}}</div>
      <div class="description">
        {{user.description}}
      </div>
    </div>
    <button class="follow-button">دنبال کردن</button>
  </div>
</template>

<script>
export default {
  name: 'search-people',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/_variable";
.component {
  display: flex;
  flex-direction: row-reverse;
  width: 1140px;
  margin: 18px auto 22px auto;
  .user-photo {
    height: 67px;
    width: 67px;
    border-radius: 50%;
    margin: auto 0 auto 30px;
  }
  .introduction {
    width: 750px;
    direction: rtl;
    margin-left: 30px;
    .user-name {
      font-size: 18px;
      font-weight: bold;
      color: $dark-grey-blue;
      margin-bottom: 15px;
    }
    .description {
      font-size: 16px;
      line-height: 2;
      color: $dark-grey-blue;
    }
  }
  .follow-button{
                    flex-grow: 0;
                    padding: 0 6px 1px;
                    border-radius: 6px;
                    background-color: $white;
                    border: 2px solid #139eca;
                    height: 25px;
                    color: #139eca;
                    cursor: pointer;
                    transition: 0.5s ease all;
                    font-family: 'bahij-helvetica-roman';
                    display: flex;
                    align-items: center;
                    &:hover{
                        background-color: #139eca;
                        color: #fff;
                        transition: 0.5s ease all;
                    }
                }
}
</style>
