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

    class="w-full bg-dark-800 px-6 py-4 text-white transition-all text-md flex justify-center items-center rounded-xl leading-[25px] ring-2 ring-dark-300 hover:(ring-cyan-500) focus:(ring-cyan-500)"
  >
    <spinner-icon v-if="loading" class="animate-spin" />
    <div v-else class="flex 
    flex-row gap-[10px] items-center">
      <slot name="icon" />
      <slot name="text" />
    </div>
  </button>
</template>
