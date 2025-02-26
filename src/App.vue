<template>
  <header>
    <customHeader></customHeader>
  </header>
  <RouterView />

</template>

<script setup>
import { RouterView } from 'vue-router'
import customHeader from './components/customHeader.vue';
</script>

