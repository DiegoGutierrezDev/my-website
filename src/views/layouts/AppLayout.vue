<template>
  <AppHeader></AppHeader>
  <RouterView />
  <AppFooter></AppFooter>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
