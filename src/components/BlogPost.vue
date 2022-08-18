<script setup>
// eslint-disable-next-line no-undef
defineProps(['title', 'text', 'colorText'])

</script>
<template>
<h2>Favorito</h2>
<div class="card">
    <div class="card-body" >
        <h1 class="card-title" :class="`text-${colorText} bg-secondary`" >
        {{title}}
        </h1>
        <h5 class="card-text">{{text}}</h5>
        <button @click="$emit('cambiarFavorito', title)" class="btn btn-outline-primary "> F{{favorito}}</button>
    </div>
</div>
</template>
<style>

</style>
