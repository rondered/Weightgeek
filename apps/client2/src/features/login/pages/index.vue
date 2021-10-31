<script setup lang="ts">
import InputField from "@/components/InputField.vue";
import useLogin from "../code";
import EmailIcon from "~icons/ion/email";
import PasswordIcon from "~icons/ion/key";

const { email, emailError, password, passwordError, submitForm, handleReset } =
  useLogin();
</script>

<template>
  <form class="flex flex-col gap-[10px]" @submit.prevent="submitForm">
    <input-field
      v-model="email"
      type="text"
      :error-message="emailError"
      placeholder="email"
    >
      <template v-slot:icon><email-icon /></template>
    </input-field>
    <input-field
      v-model="password"
      type="password"
      :error-message="passwordError"
      placeholder="password"
    >
      <template v-slot:icon><password-icon /></template>
    </input-field>
    <button type="submit">click</button>
    <button type="reset" @click="handleReset">Reset</button>
  </form>
</template>

<route lang="yaml">
meta:
  layout: onboarding
</route>
