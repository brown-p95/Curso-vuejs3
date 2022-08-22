<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => { count.value++ }
</script>
<template>
<button @Click="increment">Agregar al contador {{count}} </button>
</template>
