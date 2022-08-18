<script setup>
import { ref } from 'vue'
import BlogPost from '../components/BlogPost.vue'
const posts = ref([])
const miFavorito = ref('')
const fijarFavorito = (title) => {
  miFavorito.value = title
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => (posts.value = data))
</script>
<template>
    <div class="container">
        <h1>{{ miFavorito || "Sin favorito" }}</h1>
          <div>
            <BlogPost
                v-for="post in posts"
                :key="post.title"
                :title="post.title"
                :id="post.id"
                :body="post.body"
                class="mb-2"
                @fijarFavorito="fijarFavorito"/>
        </div>
    </div>
</template>
