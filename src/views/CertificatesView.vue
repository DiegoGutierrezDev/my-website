<template>
  <div class="w-10/12 m-auto">
    <h1 class="max-md:text-3xl max-md:text-center text-5xl mb-10 text-center">
      Certificados
    </h1>
  <h2 class="text-white text-center font-della text-lg mb-10"> 
    He dedicado gran parte de mi trayectoria a formarme de manera constante y exhaustiva. En esta sección podrás encontrar los certificados que respaldan mi experiencia profesional y mi compromiso con el aprendizaje continuo.
  </h2>

  <div class="flex p-4 rounded-full bg-cyan-700 w-1/2 justify-self-center mb-12 justify-around">
    <span 
      v-for="year, index in years" 
      :key="index" 
      class="py-4 px-8 font-semibold rounded-full cursor-pointer" 
      :class="selectedYear === year ? 'font-bold shadow-2xl bg-white' : ''"
      @click="selectedYear != 'all' ? selectedYear = 'all'  : orderCertificates(year)">
      {{ year }}
    </span>
    <span v-if="selectedYear != 'all'">
      🗑
    </span>
  </div>

  <div class="grid grid-cols-4 justify-between justify-items-center">
    <div v-for="title in filteredCertificates" :key="title.year" class="rounded-lg mb-8 pa-4 block">
        <h1>
          {{ title.year }}
        </h1>
        <h2 class="mb-2">
          {{ title.title }}
        </h2>

        <div class="rounded-lg pt-[1.33rem]">
          <img 
            :src="title.src" 
            alt="" 
            class="pl-1 pr-0.5  rounded-3xl" 
            >
        </div>
    </div>
  </div>
  </div>
  
</template>

<script setup>
import { computed, ref } from 'vue'
import { years } from '@/constants/data';


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

let selectedYear = ref('all')

// Methods
function orderCertificates(year) {
  selectedYear.value = year
}

const filteredCertificates = computed(() => {
    return selectedYear.value === 'all'
    ? certificates.value
    : certificates.value.filter(certificate => certificate.year === selectedYear.value)
})

</script>