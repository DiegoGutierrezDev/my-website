<template>
  <div class="flex justify-between">
     <div class="text-center">
        <RouterLink href="/">
            <h1>Diego Gutiérrez</h1>
                <h2>Web Developer</h2>
        </RouterLink>
    </div>

    <div class="flex items-end">

        <a href="mailto:gutierrezmaria.diego@gmail.com" class="img-links">
            <img src="/src/assets/img/email.png" alt="email"></a>

        <RouterLink href="https://github.com/DiegoGutierrezDev" class="img-links" target="_blank">
            <img src="/src/assets/img/github.png" alt="github"></RouterLink>

        <RouterLink href="https://www.linkedin.com/in/diegoguti%C3%A9rrezdev/" class="img-links" target="_blank">
            <img src="/src/assets/img/linkedin.png" alt="linkedin"></RouterLink>
    </div>
  </div>
   
</template>


  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>