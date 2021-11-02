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
      bg-gray-600
      hover:(bg-gray-500)
      px-6
      py-6
      text-white
      transition-all
      text-md
      flex
      justify-center
      items-center
      rounded-full
    "
  >
    <spinner-icon v-if="loading" class="animate-spin" />
    <slot v-else />
  </button>
</template>
