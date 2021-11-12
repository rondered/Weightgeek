<script setup lang="ts">
import { InputHTMLAttributes } from 'vue';
interface IInputField {
  type: string;
  placeholder: string;
  autocomplete?: string;
  modelValue?: string;
  errorMessage?: string;
}

const props = defineProps<IInputField>();

const emit = defineEmits(["update:modelValue"]);

const handleChange = (e: Event) => {
  const target = <HTMLInputElement>e.target;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="flex flex-col gap-[5px]">
    <div
      class="px-5 py-2 gap-[5px] flex flex-row items-center text-gray-700 focus-within:(bg-indigo-100) bg-indigo-100 transition-all rounded-xl"
    >
      <slot name="icon" />
      <input
        class="border-none focus:ring-0 text-md bg-transparent w-full"
        width="100%"
        @change="handleChange"
        v-model="modelValue"
        v-bind="props"
      />
    </div>
    <div class="text-red-600 text-xs font-bold">{{ errorMessage }}</div>
  </div>
</template>
