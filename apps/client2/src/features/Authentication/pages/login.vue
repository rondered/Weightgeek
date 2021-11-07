<script setup lang="ts">
import { useMutation } from 'vue-query'
import InputField from '@/components/InputField.vue'
import FormButton from '@/components/FormButton.vue'
import Alert from '@/components/Alert.vue'
import { useLogin } from '@/features/Authentication/hooks'
import EmailIcon from '~icons/ion/email'
import PasswordIcon from '~icons/ion/key'
import FacebookIcon from '~icons/gg/facebook'
import GoogleIcon from '~icons/gg/google'

const {
  email,
  emailError,
  password,
  passwordError,
  handleSubmit,
  handleReset,
  errorMessage,
  isLoading,
} = useLogin()
</script>

<template>
  <div class="flex flex-row w-full justify-between px-5 py-10 md:px-10">
    <form class="flex flex-col gap-[25px] w-full md:w-[450px]" @submit.prevent="handleSubmit">
      <span class="main-title">Login</span>
      <form-button>
        <template #text>Login with Facebook</template>
        <template #icon>
          <facebook-icon />
        </template>
      </form-button>
      <form-button>
        <template #text>Login with Google</template>
        <template #icon>
          <google-icon />
        </template>
      </form-button>
      <div class="flex flex-row items-center gap-[10px]">
        <div class="h-px w-full bg-gray-600" />
        <div class="text-sm font-light text-blue-600">OR</div>
        <div class="h-px w-full bg-gray-600" />
      </div>
      <alert v-if="errorMessage" variation="alert">{{ errorMessage }}</alert>
      <input-field v-model="email" type="text" :error-message="emailError" placeholder="email">
        <template #icon>
          <email-icon />
        </template>
      </input-field>
      <input-field
        v-model="password"
        type="password"
        :error-message="passwordError"
        placeholder="password"
      >
        <template #icon>
          <password-icon />
        </template>
      </input-field>
      <form-button :loading="isLoading" type="submit">
        <template #text>Login</template>
      </form-button>
    </form>
    <div class="hidden md:block">x</div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: unauthorized
</route>
