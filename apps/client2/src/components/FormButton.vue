<script setup lang="ts">
import SpinnerIcon from "~icons/gg/spinner";
interface IFormButton {
  type: string;
  loading?: boolean;
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
    <spinner-icon v-if="loading" class="animate-spin" />
    <slot v-else />
  </button>
</template>
