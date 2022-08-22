<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: 'Sin descripción'
  }
})
const emit = defineEmits(['fijarFavorito'])
</script>
<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{id}} - {{ title }}</h5>
            <p>{{ body }}</p>
            <button
                class="btn btn-sm btn-outline-primary"
                @click="emit('fijarFavorito', title)"
            >
                Mi Favorito
            </button>
        </div>
    </div>
</template>
