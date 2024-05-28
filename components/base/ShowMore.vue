<template>
  <div
    :class="['expandable-text pt-1', { active: isShow }]"
    :style="{'height': `${height}px`}"
    data-v-inspector="components/TheFooter.vue:132:25"
  >
    <div
      class="expandable-text_text fa-num"
      data-v-inspector="components/TheFooter.vue:133:29"
    >
      <slot />
    </div>
    <div
      class="expandable-text-expand-btn justify-content-start text-sm"
      data-v-inspector="components/TheFooter.vue:154:29"
    >
      <span
        :class="['show-more', { 'd-none': isShow }]"
        @click="isShow = !isShow"
        data-v-inspector="components/TheFooter.vue:155:33"
      >
        {{ showText }}
        <i
          class="ri-arrow-down-s-line ms-2"
          data-v-inspector="components/TheFooter.vue:156:50"
        ></i></span
      ><span
        :class="['show-less', { 'd-none': isShow == false }]"
        @click="isShow = !isShow"
        data-v-inspector="components/TheFooter.vue:158:33"
      >
        {{ closeText }}
        <i
          class="ri-arrow-up-s-line ms-2"
          data-v-inspector="components/TheFooter.vue:159:42"
        ></i
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps({
  closeText: {
    type: String,
    default: "بستن",
  },
  showText: {
    type: String,
    default: "مشاهده بیشتر",
  },
  height:{
    type:Number,
    defaul:100
  }
});
const isShow = ref(false);
</script>

<style lang="scss" scoped></style>
