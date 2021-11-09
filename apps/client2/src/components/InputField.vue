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
      class="px-5 py-2 gap-[5px] ring-2 ring-dark-300 flex flex-row items-center text-white focus-within:(ring-emerald-600 ring-2 bg-dark-200) hover:(ring-emerald-600) bg-dark-800 transition-all rounded-lg"
    >
      <slot name="icon" />
      <input
        class="border-none focus:ring-0 text-lg bg-transparent w-full"
        width="100%"
        @change="handleChange"
        v-model="modelValue"
        v-bind="props"
      />
    </div>
    <div class="text-red-500 font-light text-sm">{{ errorMessage }}</div>
  </div>
</template>
