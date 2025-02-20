<template>
  <div class="blue-background grid grid-cols-4 justify-between justify-items-center">
    <div v-for="title in certificates" class="flex items-center justify-center rounded-lg mb-8 pa-4">
      <div class="">
        <img src="../assets/img/frame.png" 
          alt="" 
          class="absolute z-40" 
          style="width: 335px; height: 253px;"
          >
        <VuePdfEmbed 
          :source="title.src" 
          class="mt-5 ml-1" 
          style="width: 328px;">
        </VuePdfEmbed>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed';

// Data
const certificates = ref([
  {title: 'Javascript', year: '2018', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2019', src: "src/assets/titles/BasicsAndroid.pdf"},
  {title: 'Javascript', year: '2012', src: "src/assets/titles/HowtoCode.pdf"},
  {title: 'Javascript', year: '2015', src: "src/assets/titles/HTMLCss.pdf"},
  {title: 'Javascript', year: '2018', src: "src/assets/titles/WebDev1.pdf"},
  {title: 'Javascript', year: '2019', src: "src/assets/titles/JavaScriptAsincrono.pdf"},
  {title: 'Javascript', year: '2012', src: "src/assets/titles/JavaScript.pdf"},
  {title: 'Javascript', year: '2015', src: "src/assets/titles/Laravel_MasterMind.pdf"},
  {title: 'Javascript', year: '2018', src: "src/assets/titles/Python MasterMind.pdf"},
  {title: 'Javascript', year: '2019', src: "src/assets/titles/Symfony-6-Basic.pdf"},
  {title: 'Javascript', year: '2012', src: "src/assets/titles/Vue&Laravel MasterMind.pdf"},
  {title: 'Javascript', year: '2015', src: "src/assets/titles/Vue.jsMasterMind.pdf"},
])

</script>

<style>
.blue-background {
  margin-top: 2em;
  padding: 2em;
  background-color: theme("colors.main");
}
</style>