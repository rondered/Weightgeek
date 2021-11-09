<script setup lang="ts">
import SpinnerIcon from "~icons/gg/spinner";
interface IFormButton {
  type?: string;
  loading?: boolean;
}

const props = defineProps<IFormButton>();
</script>
åååå
<template>
  <button
    class="ring-0 w-full bg-emerald-600 hover:(filter brightness-130) px-6 py-4 text-white transition-all text-md flex justify-center items-center rounded-full leading-[25px]"
  >
    <spinner-icon v-if="loading" class="animate-spin" />
    <div v-else class="flex 
    flex-row gap-[10px] items-center font-semibold">
      <slot name="icon" />
      <slot name="text" />
    </div>
  </button>
</template>
