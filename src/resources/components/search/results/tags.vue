<template>
  <div class="tag">{{ tagName }}</div>
</template>

<script>
export default {
    name: "search-tag",
    props:{
        tagName
    }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/_variable"; 
.tag {
  margin: 0 7px;
  border-radius: 17px;
  background-color: $pale-grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
}
</style>