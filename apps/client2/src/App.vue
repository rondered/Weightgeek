<script setup lang="ts">
import { useQueryProvider } from 'vue-query'
useQueryProvider()
</script>

<template>
  <router-view class="bg-bgColor text-indigo-900 font-montserrat" />
</template>
