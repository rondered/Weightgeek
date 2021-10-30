<template>
  <div class="shadow-xl p-5">
    <form class="flex flex-col gap-[10px]" @submit.prevent="submitForm">
      <input-field v-model="fieldState.email" type="text" :errors="v.email.$errors" placeholder="email"/>
      <input
        type="password"
        v-model="fieldState.password"
        placeholder="password"
      />
      <div
        class="input-errors"
        v-for="error of v.password.$errors"
        :key="error.$uid"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>
      <button type="submit">click</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputField from "@/components/InputField.vue"
import useLogin from "../code";

const { fieldState, v, submitForm } = useLogin();
</script>
