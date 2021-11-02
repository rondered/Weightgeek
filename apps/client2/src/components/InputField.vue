<script setup lang="ts">
interface IInputField {
  type: string;
  placeholder: string;
  modelValue?: string;
  errorMessage?: string;
}

const props = defineProps<IInputField>();

const emit = defineEmits(["update:modelValue"]);

const handleChange = (e: Event) => {
  const target = <HTMLInputElement>e.target;
  emit("update:modelValue", target.value);
};

//TODO: ADD ICON
</script>

<template>
  <div class="flex flex-col gap-[5px]">
    <div
      class="
        px-5
        py-6
        focus-within:ring-1
        gap-[5px]
        flex flex-row
        items-center
        text-gray-800
        focus-within:(ring-3
        ring-gray-600 ring-offset-3)
        hover:(ring-3
        ring-gray-600 ring-offset-3)
        bg-gray-200
        transition-all
        rounded-lg
      "
    >
      <slot name="icon" />
      <input
        class="
          border-none
          focus:ring-0
          placeholder-gray-400
          text-xl
          bg-transparent
          w-full
        "
        width="100%"
        @change="handleChange"
        v-model="modelValue"
        :type="type"
        :placeholder="placeholder"
      />
    </div>
    <div class="text-red-500 font-light text-sm">
      {{ errorMessage }}
    </div>
  </div>
</template>
