<template>
  <div class="tag">{{ tag }}</div>
</template>

<script>
export default {
    name: "search-tag",
    props:{
        tag : {
          type : String
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/_variable"; 
.tag {
  margin-left: 15px;
  border-radius: 17px;
  background-color: $pale-grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  width: fit-content;
}
</style>