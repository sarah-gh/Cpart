<template>
  <input class="input-number" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}">
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variable.scss";
.input-number{
    width:40px;
    height: 50px;
    border-radius: 10px;
    border: solid 1px $water-blue;
}


</style>