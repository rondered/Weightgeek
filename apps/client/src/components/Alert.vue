<script setup lang="ts">
import AlertIcon from "~icons/ion/alert-circle-outline";
interface IAlert {
  variation?: "alert" | "success" | "error";
}
const props = defineProps<IAlert>();
const isError = computed(() => props.variation == "error");
</script>

<template>
  <div
    :class="['w-full text-sm flex items-center justify-center gap-[5px] rounded-xl', { 'text-red-500': isError }]"
  >
    <alert-icon class="h-[25px] w-[25px]" v-if="variation == 'error'" />
    <slot />
  </div>
</template>
