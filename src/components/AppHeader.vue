<template>
  <header>
    <div
      class="flex justify-around items-center pt-10 pb-14 max-sm:px-10 max-sm:flex-col"
    >
      <div class="text-center">
        <RouterLink to="/" class="flex items-center" id="avoidHover">
          <span class="text-main-blue text-2xl mr-3">&lt;/</span>
          <h1 class="mr-2">Diego Gutiérrez</h1>
          <span class="text-main-blue text-2xl">&gt;</span>
        </RouterLink>
      </div>

      <div
        class="w-96 flex max-sm:p-4 justify-around items-center font-hind text-white"
      >
        <router-link :to="{ path: '/', hash: '#carreer' }"
          >Mi Carrera</router-link
        >
        <router-link :to="{ path: '/', hash: '#stack' }"
          >Mis Skills</router-link
        >
        <router-link to="/certificates">Mis Certificados</router-link>
        <router-link :to="{ path: '/', hash: '#contact' }"
          >Contacto</router-link
        >
      </div>
    </div>
  </header>
</template>
