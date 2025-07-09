<script setup>
import AppButton from '@/components/AppButton.vue'
import { stack, carreer } from '@/constants/data'
</script>

<template>
  <main>
    <section class="px-10">
      <div
        class="flex justify-center gap-14 items-center md:pb-24 pt-16 md:px-48"
      >
        <div class="lg:w-1/2">
          <div class="mb-10">
            <h2 class="max-md:text-xl max-md:text-center">
              Desarrollador Full Stack
            </h2>
            <h1 class="max-md:text-3xl max-md:text-center text-5xl mb-4">
              Diego Gutiérrez
            </h1>
            <span class="text-white font-della 2xl:text-lg">
              Me apasiona el desarrollo porque cada día representa una
              oportunidad para aprender algo nuevo y mejorar.<br />
              Mi enfoque en la atención al detalle y mi actitud proactiva me
              impulsan a seguir formándome constantemente para convertirme en el
              desarrollador que quiero ser.<br />
            </span>
          </div>

          <div
            class="flex flex-col items-center justify-center md:justify-start md:flex-row"
          >
            <a
              href="/documents/CV.pdf"
              download="cv-diego-gutierrez-2025.pdf"
              class="md:mr-10"
            >
              <AppButton>
                <template #content>
                  <span class="mr-3 text-black"> Descargar CV </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                  </svg>
                </template>
              </AppButton>
            </a>
            <div class="flex gap-4 p-4 md:p-0">
              <a href="mailto:gutierrezmaria.diego@gmail.com" class="size-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="white"
                  class="hover:stroke-[#66fcf1]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/diegoguti%C3%A9rrezdev/"
                class="size-7"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 16"
                  fill="white"
                  class="hover:fill-[#66fcf1]"
                >
                  <path
                    d="M16.5128 0H0.717949C0.287179 0 0 0.266667 0 0.666667V15.3333C0 15.7333 0.287179 16 0.717949 16H16.5128C16.9436 16 17.2308 15.7333 17.2308 15.3333V0.666667C17.2308 0.266667 16.9436 0 16.5128 0ZM5.09744 13.6667H2.58462V6H5.16923V13.6667H5.09744ZM3.80513 4.93333C3.01538 4.93333 2.29744 4.33333 2.29744 3.53333C2.29744 2.8 2.94359 2.13333 3.80513 2.13333C4.59487 2.13333 5.31282 2.73333 5.31282 3.53333C5.31282 4.33333 4.66667 4.93333 3.80513 4.93333ZM14.7179 13.6667H12.1333V9.93333C12.1333 9.06667 12.1333 7.93333 10.841 7.93333C9.47692 7.93333 9.33333 8.86667 9.33333 9.86667V13.6667H6.74872V6H9.18974V7.06667C9.54872 6.46667 10.3385 5.86667 11.6308 5.86667C14.2154 5.86667 14.7179 7.46667 14.7179 9.53333V13.6667Z"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/DiegoGutierrezDev"
                target="_blank"
                class="size-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  class="hover:fill-[#66fcf1]"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="hidden lg:block w-1/2 justify-end items-end flex">
          <img src="../assets/img/developer2.png" alt="" class="w-[500px]" />
        </div>
      </div>
    </section>
    <section class="py-24 max-md:px-10" id="carreer">
      <div class="md:mx-auto md:w-1/2 mb-20">
        <h1 class="text-center text-5xl mb-8">Mi carrera profesional</h1>
        <h2 class="text-white text-xl text-center">
          A lo largo de mi carrera he procurado aprender al máximo, tanto a
          nivel teórico como práctico.
        </h2>
      </div>
      <div
        v-for="(step, index) in carreer"
        :key="step.name"
        class="px-24 relative justify-center flex pb-6"
      >
        <div
          class="hidden md:block absolute border-dashed border-white h-full border"
        ></div>
        <div
          class="flex"
          :class="index % 2 == 0 ? 'justify-start' : 'justify-end'"
        >
          <div
            class="md:w-1/2"
            :class="index % 2 == 0 ? 'md:pr-10' : 'md:pl-10'"
          >
            <div
              class="items-end flex gap-3"
              :class="index % 2 != 0 ? 'md:justify-start' : 'md:justify-end'"
            >
              <a
                :href="step.website"
                :target="step.external ? '_blank' : '_self'"
                class="text-main-blue font-semibold text-2xl"
                :class="index % 2 != 0 ? 'md:order-1' : 'md:order-2'"
              >
                {{ step.name }}
              </a>
              <span
                class="text-white text-nowrap font-semibold"
                :class="index % 2 != 0 ? 'md:order-2' : 'md:order-1'"
              >
                {{ step.start + ' - ' + step.end }}
              </span>
            </div>

            <p
              class="text-white-grey text-lg mt-4"
              :class="index % 2 != 0 ? 'md:text-start' : 'md:text-end'"
            >
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="max-xl:mx-10" id="stack">
      <h1 class="text-center text-5xl mb-8">Mi Stack</h1>
      <h2 class="text-white text-lg text-center mb-16">
        A lo largo de estos años, me he especializado y profundizado en este
        stack, el cual ha sido clave en el desarrollo de mis proyectos y
        crecimiento profesional.
      </h2>
      <div class="flex lg:justify-center items-center mb-20">
        <div
          class="flex gap-4 p-8 bg-grey-dark-2 max-lg:overflow-scroll rounded-2xl"
        >
          <div
            v-for="tool in stack"
            :key="tool.name"
            class="bg-grey-dark flex items-center justify-center rounded-lg lg:w-20 lg:h-20 p-4 transition duration-300 hover:-translate-y-1 hover:scale-110 hoverCustomColor"
            :style="`--custom_color: ${tool.color}`"
          >
            <img
              :src="tool.icon"
              alt=""
              class="max-lg:max-w-16 max-lg:max-h-16"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="p-10 mb-4" id="contact">
      <h1 class="text-center text-5xl mb-8">¿Quieres saber más?</h1>
      <h2 class="text-center text-white text-lg mb-16">
        Contáctame a través de este formulario o a través de mi E-mail:
        Gutiérrezmaria.diego@gmail.com
      </h2>
      <div class="flex justify-center">
        <div
          class="bg-grey-blue px-16 py-10 border border-main-blue rounded-2xl"
        >
          <form
            name="contact"
            method="POST"
            netlify
            netlify-honeypot="bot-field"
            class="grid justify-center gap-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <label class="text-white font-semibold block"> Nombre: </label>
                <input
                  type="text"
                  name="name"
                  class="mt-2 h-10 w-full lg:w-60 p-2 rounded-lg border-2 border-darker-blue bg-grey-dark-2 text-white"
                  placeholder="Escribe tu nombre"
                  required
                />
              </div>

              <div>
                <label class="text-white font-semibold block"> Email: </label>
                <input
                  type="email"
                  name="email"
                  class="mt-2 h-10 w-full lg:w-60 p-2 rounded-lg border-2 border-darker-blue bg-grey-dark-2 text-white"
                  placeholder="Escribe tu correo electrónico"
                  required
                />
              </div>
            </div>
            <div class="grid grid-cols-1 justify-center text-center">
              <label class="text-white font-semibold mb-6"> Mensaje: </label>
              <textarea
                name="message"
                class="rounded-lg border-2 border-darker-blue h-28 bg-grey-dark-2 text-white p-2"
                placeholder="Cuéntame sobre tu proyecto o cualquier duda!"
                required
              ></textarea>
            </div>
            <div class="grid grid-cols-1">
              <span class="text-white-grey font-montserrat text-sm mb-8"
                >Responderé con la mayor brevedad posible, gracias!</span
              >
              <AppButton class="w-1/2 justify-self-center">
                <template #content>
                  <span class="mr-3 text-black"> Contáctame! </span>
                </template>
              </AppButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.hoverCustomColor:hover {
  background-color: var(--custom_color);
}
</style>
