<script setup lang="ts">
interface IFormButton {
  type: string;
  loading?: string;
}

const props = defineProps<IFormButton>();
</script>

<template>
  <button
    class="
      w-full
      bg-blue-700
      hover:(bg-blue-600)
      px-4
      py-2
      text-white
      transition-all
      font-medium
      text-md
      flex
      justify-center
      items-center
    "
  >
    <slot />
  </button>
</template>
