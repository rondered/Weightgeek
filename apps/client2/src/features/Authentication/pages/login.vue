<script setup lang="ts">
import { useMutation } from "vue-query";
import InputField from "@/components/InputField.vue";
import FormButton from "@/components/FormButton.vue";
import Alert from "@/components/Alert.vue";
import { useLogin } from "@/features/Authentication/hooks";
import EmailIcon from "~icons/ion/email";
import PasswordIcon from "~icons/ion/key";

const {
  email,
  emailError,
  password,
  passwordError,
  handleSubmit,
  handleReset,
  errorMessage,
  isLoading
} = useLogin();
</script>

<template>
  <div class="flex flex-row w-full justify-between px-5 py-10 md:px-10">
    <form
      class="flex flex-col gap-[15px] w-full md:w-[450px]"
      @submit.prevent="handleSubmit"
    >
      <span class="text-3xl pb-10"
        >Login</span
      >
      <alert variation="alert" v-if="errorMessage">{{ errorMessage }}</alert>
      <div class="flex flex-row items-center gap-[10px]">
        <div class="h-px w-full bg-gray-300" />
        <div class="text-sm font-light">OR</div>
        <div class="h-px w-full bg-gray-300" />
      </div>
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
      <form-button :loading="isLoading" type="submit">Login</form-button>
    </form>
    <div class="hidden md:block">x</div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: unauthorized
</route>
