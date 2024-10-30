<template>
  <header>
    <customHeader></customHeader>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import customHeader from './components/CustomHeader.vue';
</script>

