<script setup lang="ts">
import { useMutation } from 'vue-query'
import InputField from '@/components/InputField.vue'
import FormButton from '@/components/FormButton.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
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
      <span class="main-title mb-[30px]">Login</span>
      <div class="flex flex-row items-center gap-[10px]">
      </div>
      <alert v-if="errorMessage" variation="alert">{{ errorMessage }}</alert>
      <input-field
        v-model="email"
        type="text"
        :error-message="emailError"
        placeholder="email"
        autocomplete="email"
      >
        <template #icon>
          <email-icon />
        </template>
      </input-field>
      <input-field
        v-model="password"
        type="password"
        :error-message="passwordError"
        placeholder="password"
        autocomplete="password"
      >
        <template #icon>
          <password-icon />
        </template>
      </input-field>
      <form-button :loading="isLoading" type="submit">
        <template #text>Login</template>
      </form-button>
      <span class="text-center font-bold">OR</span>
      <primary-button>
        <template #text>Sign in with Facebook</template>
        <template #icon>
          <facebook-icon />
        </template>
      </primary-button>
      <primary-button>
        <template #text>Sign in with Google</template>
        <template #icon>
          <google-icon />
        </template>
      </primary-button>
    </form>
    <div class="hidden md:block">x</div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: unauthorized
</route>
