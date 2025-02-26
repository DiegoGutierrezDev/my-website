<template>
    <div class="">
        <button class="bg-orange rounded-full w-36 h-8 flex items-center justify-center">{{ text }} 
            <slot name="icon"></slot>
        </button>
    </div>

</template>

<script setup>
//Props
const props = defineProps(['text'])
</script>
  