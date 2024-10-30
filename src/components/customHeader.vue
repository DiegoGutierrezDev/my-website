<template>
    <div class="webdev">
        <a href="">
            <span class="name">Diego Gutiérrez</span>
                <span class="developer">Web Developer</span>
        </a>
    </div>

    <div class="social">

        <a href="mailto:gutierrezmaria.diego@gmail.com" class="social-img">
            <img src="/src/assets/img/email.png" alt="email"></a>

        <a href="https://github.com/DiegoGutierrezDev" class="social-img" target="_blank">
            <img src="/src/assets/img/github.png" alt="github"></a>

        <a href="https://www.linkedin.com/in/diegoguti%C3%A9rrezdev/" class="social-img" target="_blank">
            <img src="/src/assets/img/linkedin.png" alt="linkedin"></a>
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