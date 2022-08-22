<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData'

const route = useRoute()
const router = useRouter()

const back = () => {
  router.push('/pokemons')
}

const { data, error, loading, getData } = useGetData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
    <div v-if="loading">Cargando informacion...</div>
        <div v-if="data">
            <img :src="data.sprites?.front_default" alt=""/>
            <h1>Poke name: {{ $route.params.name }}</h1>
        </div>
        <h1 v-if="error">No existe el pokemon</h1>
        <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
