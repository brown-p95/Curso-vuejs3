<script setup>
import defineProps from 'vue'
defineProps(['start', 'end', 'maxLength'])
// const emit = defineEmits(['next', 'prev']) no fue necesario o al hacerlo da error
</script>
<template>
<div class="btn-group" role="group" aria-label="Basic example">
<button @click="$emit('prev')" type="button" class="btn btn-outline-primary" :disabled="start<=0">Anterior {{start}}</button>
<button @click="$emit('next')" type="button" class="btn btn-outline-primary" :disabled="end>=maxLength">Siguiente {{end}}</button>
</div></template>
