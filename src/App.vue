<template>
  <header>
    <customHeader></customHeader>
  </header>
  <NavigationBar></NavigationBar>
  <RouterView />
  <div class="flex flex-col items-center gap-8 m-4 w-full ">
      <h1>Sigo desarrollando...</h1>
      <img src="/monkey-developer.gif" alt="monkeyDeveloping">
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import customHeader from './components/CustomHeader.vue';
import NavigationBar from './components/navigationBar.vue';
</script>

