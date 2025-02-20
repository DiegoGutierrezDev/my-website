<template>
  <div class="blue-background grid grid-cols-4 justify-between justify-items-center">
    <div v-for="title in certificates" class="flex items-center justify-center rounded-lg mb-8">
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
  {title: 'Javascript', year: '2019', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2012', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2015', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2018', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2019', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2012', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2015', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2018', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2019', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2012', src: "src/assets/titles/AppsMoviles.pdf"},
  {title: 'Javascript', year: '2015', src: "src/assets/titles/AppsMoviles.pdf"},
])

</script>

