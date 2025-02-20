<template>
  <div class="blue-background grid grid-cols-4 justify-between justify-items-center">
    <div v-for="title in certificates" class="frames">
      <VuePdfEmbed :source="title.src"></VuePdfEmbed>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed';

// Data
const certificates = ref([
  {title: 'Javascript', year: '2018', src: "src/assets/titles/prueba.pdf"},
  {title: 'Javascript', year: '2019'},
  {title: 'Javascript', year: '2012'},
  {title: 'Javascript', year: '2015'},
])

const pdfSource = 'src'

// Functions


</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.frames{
  background-image: url(../assets/img/frame.png);
  background-size: cover;
  width: 15em;
  height: 15em;
  display: inline-block;
}
</style>
