<template>
  <header>
    <customHeader></customHeader>
  </header>
  <NavigationBar></NavigationBar>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import customHeader from './components/CustomHeader.vue';
import NavigationBar from './components/navigationBar.vue';
</script>

