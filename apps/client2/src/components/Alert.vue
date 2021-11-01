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
      w-max
      text-sm
      border-b-10 border-b-blue-700
      flex
      items-center
      gap-[5px]
    "
  >
    <alert-icon class="h-[25px] w-[25px]" v-if="variation == 'alert'" />
    <slot />
  </div>
</template>
