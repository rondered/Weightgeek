<script setup lang="ts">
import { InputHTMLAttributes } from "vue";
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
      class="bg-gray-100 text-gray-500 border-gray-200 border-1 px-5 py-2 gap-[5px] flex flex-row items-center text-gray-900 transition-all rounded focus-within:(text-gray-900)"
    >
      <slot name="icon" class="text-gray-500 fill-current" />
      <input
        class="border-none focus:ring-0 text-sm bg-transparent w-full placeholder-gray-500"
        width="100%"
        @change="handleChange"
        v-model="modelValue"
        v-bind="props"
      />
    </div>
    <div class="text-red-500 text-xs font-bold">{{ errorMessage }}</div>
  </div>
</template>
