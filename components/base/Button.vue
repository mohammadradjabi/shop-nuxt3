<template>
  <div>
    <button
    :disabled="loading"
      :class="[
        'btn',
        { 'btn-sm': size == 'sm' },
        { 'btn-lg': size == 'lg' },
        { 'w-100': wFull },
        outline ? `btn-outline-${color}` : `btn-${color}`,
      ]"
    >
      <div class="spinner-border" role="status" v-if="loading">
        <span class="sr-only"></span>
      </div>
      <slot v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    default: "normal",
    type: String,
  },
  wFull: {
    default: false,
    type: Boolean,
  },
  outline: {
    default: false,
    type: Boolean,
  },
  loading: {
    default: false,
    type: Boolean,
  },
  color: {
    default: "primary",
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.spinner-border {
  margin-left: 7px;
  width: 1.5rem;
  height: 1.5rem;

}
</style>
