<template>
  <div></div>
</template>

<script setup lang="ts">
import { FetchApi } from "./../utilities/CustomFetchApi";
onMounted(async () => {
  var res = await FetchApi("/posts");
  console.log(res);
});
</script>

<style lang="scss" scoped></style>
