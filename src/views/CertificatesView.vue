<template>
  <div class="blue-background grid grid-cols-4 justify-between justify-items-center">
    <div v-for="title in certificates" :key="title.year" class="rounded-lg mb-8 pa-4">
      <div class="">
        <h1>
          {{ title.year }}
        </h1>
        <h2 class="mb-2">
          {{ title.title }}
        </h2>

        <img src="../assets/img/frame.png" 
          alt="" 
          class="absolute z-40 w-[335px] h-[260px]" 
          >
        <div class="rounded-lg pt-[1.33rem]">
          <img 
            :src="title.src" 
            alt="" 
            class="pl-1 pr-0.5 w-[335px] h-[236px] rounded-3xl" 
            >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data
const certificates = ref([
  {title: 'Javascript', year: '2018', src: "src/assets/titles/JavaScript.png"},
  {title: 'Desarrollo Web I', year: '2019', src: "src/assets/titles/WebDev1.png"},
  {title: 'Desarrollo de Apps Moviles', year: '2019', src: "src/assets/titles/AppsMoviles.png"},
  {title: 'Básicos de Android', year: '2020', src: "src/assets/titles/BasicsAndroid.png"},
  {title: 'How To Code', year: '2020', src: "src/assets/titles/HowtoCode.png"},
  {title: 'Javascript Asíncrono', year: '2020', src: "src/assets/titles/JavaScriptAsincrono.png"},
  {title: 'HTML y CSS', year: '2022', src: "src/assets/titles/HTMLCss.png"},
  {title: 'Laravel desde cero', year: '2023', src: "src/assets/titles/Laravel_MasterMind.png"},
  {title: 'Python básico', year: '2023', src: "src/assets/titles/Python MasterMind.png"},
  {title: 'Symfony 6 basic', year: '2023', src: "src/assets/titles/Symfony-6-Basic.png"},
  {title: 'Desarrollo con Vue.js y Laravel', year: '2023', src: "src/assets/titles/Vue&Laravel MasterMind.png"},
  {title: 'Desarrollo con Vue.js', year: '2023', src: "src/assets/titles/Vue.jsMasterMind.png"},
])

</script>

<style>
.blue-background {
  margin-top: 2em;
  padding: 2em;
  background-color: theme("colors.main");
}
</style>