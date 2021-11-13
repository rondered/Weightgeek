<script setup lang="ts">
import SpinnerIcon from "~icons/gg/spinner";
interface IPrimaryButton {
  type?: string;
  loading?: boolean;
}

const props = defineProps<IPrimaryButton>();
</script>

<template>
  <button
    class="w-full flex flex-row items-center justify-center px-6 py-4 bg-gray-200 text-sm bg-cyan-100 rounded text-cyan-600 font-bold hover:(bg-cyan-50) transition-all"
  >
    <spinner-icon v-if="loading" class="animate-spin" />
    <div v-else class="flex flex-row gap-[10px] items-center">
      <slot name="icon" />
      <slot name="text" />
    </div>
  </button>
</template>
