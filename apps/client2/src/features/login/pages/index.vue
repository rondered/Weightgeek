<template>
  <div class="shadow-xl p-5">
    <form class="flex flex-col gap-[10px]" @submit.prevent="submitForm">
      <input type="text" v-model="fieldState.email" placeholder="email" />
      <div
        class="input-errors"
        v-for="error of v.email.$errors"
        :key="error.$uid"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>
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
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import useLogin from "../code";

const { fieldState, v, submitForm } = useLogin();
</script>
