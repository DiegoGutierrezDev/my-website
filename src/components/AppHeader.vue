<template>
    <header>
        <div class="bg-dark flex justify-around items-center pt-10 pb-14">
            <div class="text-center">
                <RouterLink to="/" class="flex items-center" id="avoidHover">
                    <span class="text-main-blue text-2xl mr-3">&lt;/</span>
                    <h1 class="mr-2"> Diego Gutiérrez </h1>
                    <span class="text-main-blue text-2xl">&gt;</span>
                </RouterLink>
            </div>

            <div class="w-96 flex justify-around items-center font-hind text-white">
                <router-link to="/about">Mi historia</router-link>
                <router-link to="#">Mis Skills</router-link>
            </div>

        </div>
    </header>
</template>