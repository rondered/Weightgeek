<script setup lang="ts">
import InputField from "@/components/InputField.vue";
import useLogin from "../code";

const { fieldState, v, submitForm, resetForm } = useLogin();
</script>

<template>
    <form class="flex flex-col gap-[10px]" @submit.prevent="submitForm">
      <input-field
        v-model="fieldState.email"
        type="text"
        :errors="v.email.$errors"
        placeholder="email"
      />
      <input-field
        v-model="fieldState.password"
        type="password"
        :errors="v.password.$errors"
        placeholder="password"
      />
      <button type="submit">click</button>
      <button type="reset" @click="resetForm">Reset</button>
    </form>
</template>

<route lang="yaml">
meta:
  layout: onboarding
</route>
