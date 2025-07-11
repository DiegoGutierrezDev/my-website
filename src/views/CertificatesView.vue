<template>
  <div class="w-10/12 m-auto">
    <h1 class="max-md:text-3xl max-md:text-center text-5xl mb-10 text-center">
      Certificados
    </h1>
    <h2 class="text-white text-center font-della text-lg mb-8">
      He dedicado gran parte de mi trayectoria a formarme de manera constante y
      exhaustiva. En esta sección podrás encontrar los certificados que
      respaldan mi experiencia profesional y mi compromiso con el aprendizaje
      continuo.
    </h2>
    <div class="flex justify-center mb-4">
      <div
        class="relative transition-[max-width] ease-in-out duration-300"
        :class="isFocused || search ? 'max-w-full' : 'max-w-12'"
      >
        <input
          class="block w-full border-none outline-none rounded-full p-[12px] px-4 placeholder:text-transparent focus:placeholder:text-gray-500 text-black"
          placeholder="Busca el que quieras!"
          v-model="search"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
        <button
          class="size-6 text-black self-center absolute top-1/2 right-6 -translate-y-1/2 translate-x-1/2"
          @click="search = ''"
          :class="search ? 'cursor-pointer' : 'pointer-events-none'"
        >
          <component :is="search ? XMarkIcon : MagnifyingGlassIcon"></component>
        </button>
      </div>
    </div>
    <div
      class="relative flex p-4 rounded-full bg-cyan-700 justify-self-center mb-12 justify-around z-50"
    >
      <button
        v-for="(year, index) in years"
        :key="index"
        class="py-2 px-2 md:py-4 md:px-8 font-semibold rounded-full cursor-pointer"
        :class="selectedYear === year ? 'font-bold shadow-2xl bg-white' : ''"
        @click="
          selectedYear != year
            ? orderCertificates(year)
            : (selectedYear = 'all')
        "
      >
        {{ year }}
      </button>
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-y-0 origin-top"
        enter-to-class="opacity-100 scale-y-100 origin-top"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-y-100 origin-top"
        leave-to-class="opacity-0 scale-y-0 origin-top"
      >
        <button
          v-if="selectedYear != 'all'"
          class="bg-cyan-700 w-10 h-12 rounded-b-lg absolute -bottom-10 justify-center items-center flex z-10"
          @click="selectedYear = 'all'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
            />
            <path
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
            />
          </svg>
        </button>
      </transition>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between justify-items-center"
    >
      <div
        v-for="(certificate, index) in filteredCertificates"
        :key="index"
        class="rounded-lg object-cover mb-8 pa-4 block cursor-pointer transition duration-300"
      >
        <div class="relative">
          <img :src="certificate.src" alt="" class="pl-1 pr-0.5" />
          <div
            class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-evenly flex-col opacity-0 hover:opacity-100 transition duration-300"
          >
            <div class="flex flex-col text-center">
              <p class="text-main-blue md:text-2xl font-semibold">
                {{ certificate.title }}
              </p>
              <p class="text-white md:text-lg font-semibold">
                {{ certificate.year }}
              </p>
            </div>
            <span class="text-white md:text-lg font-semibold text-center px-8">
              {{ certificate.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { years, certificates } from '@/constants/data'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'

let selectedYear = ref('all')
let isFocused = ref(true)
let search = ref('')

// Methods
function orderCertificates(year) {
  selectedYear.value = year
}

const filteredCertificates = computed(() => {
  const regex = new RegExp(search.value, 'i')
  return certificates
    .filter(certificate => regex.test(certificate.title))
    .filter(filteredCertificates =>
      selectedYear.value != 'all'
        ? filteredCertificates.year === selectedYear.value
        : filteredCertificates,
    )
})
</script>
