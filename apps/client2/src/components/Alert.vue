<script setup lang="ts">
import AlertIcon from "~icons/ion/alert-circle-outline";
interface IAlert {
  variation?: "alert" | "success" | "error";
}
const props = defineProps<IAlert>();
</script>

<template>
  <div
    class="
      w-full
      text-sm
      flex
      items-center
      justify-center
      gap-[5px]
      rounded-full
      border-gray-600
      border-1
      p-6
    "
  >
    <alert-icon class="h-[25px] w-[25px]" v-if="variation == 'alert'" />
    <slot />
  </div>
</template>
