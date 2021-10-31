<script setup lang="ts">
import { PropType } from "vue";
import { ErrorObject } from "@vuelidate/core";

interface IInputField {
  type: string;
  placeholder: string;
  modelValue: string;
  errors: ErrorObject[];
}

const props = defineProps<IInputField>();

const emit = defineEmits(["update:modelValue"]);

const handleChange = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="flex flex-col gap-[5px]">
    <input
      class="
        rounded
        border-gray-300 border-2
        bg-gray-100
        focus:(bg-transparent)
      "
      width="100%"
      @change="handleChange"
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
    />
    <div v-for="error of errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>
