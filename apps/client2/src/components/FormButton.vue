<script setup lang="ts">
interface IFormButton {
  type: string;
  loading?: string
}

const props = defineProps<IFormButton>();
</script>

<template>
  <button class="rounded-xl w-full bg-gray-800 hover:(bg-purple-700) px-4 py-2 text-white transition-all shadow font-medium text-md flex justify-center items-center"><slot /></button>
</template>
