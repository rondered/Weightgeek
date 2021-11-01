<script setup lang="ts">
interface IInputField {
  type: string;
  placeholder: string;
  modelValue?: string;
  errorMessage?: string;
}

const props = defineProps<IInputField>();

const emit = defineEmits(["update:modelValue"]);

const handleChange = (event) => {
  emit("update:modelValue", event.target.value);
};

//TODO: ADD ICON
</script>

<template>
  <div class="flex flex-col gap-[5px]">
    <div
      class="rounded-full shadow px-2 focus-within:ring-1 gap-[5px] flex flex-row items-center text-gray-800 focus-within:(ring-purple-600 ring-3) bg-white"
    >
      <slot name="icon" />
      <input
        class="border-none focus:ring-0 placeholder-gray-300 bg-transparent w-full"
        width="100%"
        @change="handleChange"
        v-model="modelValue"
        :type="type"
        :placeholder="placeholder"
      />
    </div>
    <div class="text-red-500 font-light text-xs">
      {{ errorMessage }}
    </div>
  </div>
</template>
