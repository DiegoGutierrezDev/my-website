<template>
  <div class="bg-main flex justify-between items-center px-5 py-2">
     <div class="text-center">
        <RouterLink to="/" class="flex items-center" id="avoidHover">
            <img src="../assets/img/CV.png" alt="" class="rounded-full w-16 mr-5">
            <div>
                <h1>Diego Gutiérrez</h1>
            </div>
            
        </RouterLink>
    </div>

    <div class="w-96 flex justify-around items-center font-montserrat font-semibold text-orange">
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">Mi historia</router-link>
        <router-link to="#">Mis Skills</router-link>
    </div>

    <div class="flex items-end">

        <a href="mailto:gutierrezmaria.diego@gmail.com" class="img-links">
            <img src="/src/assets/img/email.png" alt="email"></a>

        <a href="https://github.com/DiegoGutierrezDev" class="img-links" target="_blank">
            <img src="/src/assets/img/github.png" alt="github"></a>

        <a href="https://www.linkedin.com/in/diegoguti%C3%A9rrezdev/" class="img-links" target="_blank">
            <img src="/src/assets/img/linkedin.png" alt="linkedin"></a>
    </div>
  </div>
   
</template>