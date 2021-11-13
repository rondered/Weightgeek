<script setup lang="ts">
import SpinnerIcon from "~icons/gg/spinner";
interface IFormButton {
  type?: string;
  loading?: boolean;
}

const props = defineProps<IFormButton>();
</script>

<template>
  <button
    class="w-full ring-0 bg-blue-800 hover:(bg-blue-700) px-6 py-4 text-white transition-all text-sm flex justify-center items-center rounded"
  >
    <spinner-icon v-if="loading" class="animate-spin" />
    <div v-else class="flex flex-row gap-[10px] items-center font-bold">
      <slot name="icon" />
      <slot name="text" />
    </div>
  </button>
</template>
