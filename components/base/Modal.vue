<template>
  <Transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div>
      <div
        v-if="modelValue"
        :class="['remodal-wrapper', { 'remodal-is-opened': modelValue }]"
        :style="{ display: modelValue ? 'block' : null }"
        @click.self="emit('update:modelValue', false)"
      >
        <div
          :class="[
            'remodal remodal-lg remodal-is-initialized',
            { 'remodal-is-opened': modelValue },
          ]"
          tabindex="-1"
        >
          <div class="remodal-header">
            <button
              @click="emit('update:modelValue', false)"
              class="remodal-close"
            ></button>
          </div>
          <div class="remodal-content">
            <slot />
          </div>
          <div class="remodal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style>
.remodal-wrapper {
  background-color: rgba(73, 67, 67, 0.281);
}
</style>
