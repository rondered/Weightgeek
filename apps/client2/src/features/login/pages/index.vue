<script setup lang="ts">
import InputField from "@/components/InputField.vue";
import useLogin from "../code";

const { fieldState, v, submitForm } = useLogin();
</script>

<template>
  <div class="shadow-xl p-5">
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
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: onboarding
</route>
