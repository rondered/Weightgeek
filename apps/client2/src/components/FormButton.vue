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
    class="w-full shadow-indigoGlow ring-0 bg-indigo-500 hover:(bg-indigo-400) px-6 py-4 text-white transition-all text-lg flex justify-center items-center rounded-full"
  >
    <spinner-icon v-if="loading" class="animate-spin" />
    <div v-else class="flex flex-row gap-[10px] items-center font-bold">
      <slot name="icon" />
      <slot name="text" />
    </div>
  </button>
</template>
