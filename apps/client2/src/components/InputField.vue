<script setup lang="ts">
import { PropType } from "vue";
import { ErrorObject } from "@vuelidate/core";

const props = defineProps({
  type: {
    type: String,
  },
  modelValue: {
    type: String,
    required: true,
  },
  errors: {
    type: Object as PropType<ErrorObject[]>,
  },
});

const emit = defineEmits(['update:modelValue'])

const handleChange = (event) => {
    emit('update:modelValue',event.target.value);
}
</script>

<template>
  <div class="flex flex-row gap-[5px]">
    <input @change="handleChange" v-model="modelValue" :type="type" />
    <div class="input-errors" v-for="error of errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>
