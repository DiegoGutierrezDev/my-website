<template>
  <div class="blue-background grid grid-cols-4 justify-between justify-items-center">
    <div v-for="title in certificates" class="flex items-center justify-center rounded-lg mb-8 pa-4">
      <div class="">
        <img src="../assets/img/frame.png" 
          alt="" 
          class="absolute z-40" 
          style="width: 335px; height: 253px;"
          >
          <img 
          :src="title.src" 
          alt="" 
          class="pt-5 pl-2 pr-0.5 items-center flex justify-center" 
          style="width: 330px; height: 250px;"
          >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data
const certificates = ref([
  {title: 'Desarrollo de Apps Moviles', year: '2018', src: "src/assets/titles/AppsMoviles.png"},
  {title: 'Básicos de Android', year: '2019', src: "src/assets/titles/BasicsAndroid.png"},
  {title: 'How To Code', year: '2012', src: "src/assets/titles/HowtoCode.png"},
  {title: 'HTML y CSS', year: '2015', src: "src/assets/titles/HTMLCss.png"},
  {title: 'Desarrollo Web I', year: '2018', src: "src/assets/titles/WebDev1.png"},
  {title: 'Javascript Asíncrono', year: '2019', src: "src/assets/titles/JavaScriptAsincrono.png"},
  {title: 'Javascript', year: '2012', src: "src/assets/titles/JavaScript.png"},
  {title: 'Laravel desde cero', year: '2015', src: "src/assets/titles/Laravel_MasterMind.png"},
  {title: 'Python básico', year: '2018', src: "src/assets/titles/Python MasterMind.png"},
  {title: 'Symfony 6 basic', year: '2019', src: "src/assets/titles/Symfony-6-Basic.png"},
  {title: 'Desarrollo con Vue.js y Laravel', year: '2012', src: "src/assets/titles/Vue&Laravel MasterMind.png"},
  {title: 'Desarrollo con Vue.js', year: '2015', src: "src/assets/titles/Vue.jsMasterMind.png"},
])

</script>

<style>
.blue-background {
  margin-top: 2em;
  padding: 2em;
  background-color: theme("colors.main");
}
</style>