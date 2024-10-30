<template>
  <div class="flex">
     <div class="webdev">
        <a href="">
            <h1>Diego Gutiérrez</h1>
                <h2>Web Developer</h2>
        </a>
    </div>

    <div class="flex w-full justify-end items-end">

        <a href="mailto:gutierrezmaria.diego@gmail.com" class="img-links">
            <img src="/src/assets/img/email.png" alt="email"></a>

        <a href="https://github.com/DiegoGutierrezDev" class="img-links" target="_blank">
            <img src="/src/assets/img/github.png" alt="github"></a>

        <a href="https://www.linkedin.com/in/diegoguti%C3%A9rrezdev/" class="img-links" target="_blank">
            <img src="/src/assets/img/linkedin.png" alt="linkedin"></a>
    </div>
  </div>
   
</template>


  
  <script>
  export default {
    data() {
      return {
        who: "World",
      };
    },
  };
  </script>
  
  <style scoped>
  span {
    color: blue;
  }
  </style>