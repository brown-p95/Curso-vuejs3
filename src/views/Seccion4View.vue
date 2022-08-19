<script setup>
import { ref, computed, onMounted } from 'vue'
import PaginaPost from '../components/PaginaPost.vue'
import BlogPost from '../components/BlogPost.vue'
import LoadingSpinner from '@/components/LoadingSpinner'
const loading = ref(true)
const start = ref(0)
const postXpage = 10
const end = ref(postXpage)
const posts = ref([])
const miFavorito = ref('')
onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})
const fijarFavorito = (title) => {
  miFavorito.value = title
}
const next = () => {
  start.value = start.value + postXpage
  end.value = start.value + postXpage
}
const prev = () => {
  start.value -= postXpage
  end.value -= postXpage
}
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => res.json())
// .then((data) => { posts.value = data })
// .finally(() => {
//  setTimeout(() => {
//    loading.value = false
//  }, 1000)
//  })
const maxLength = computed(() => posts.value.length)
</script>
<template>
    <div class="container">
        <h1>{{ miFavorito || "Sin favorito" }}</h1>
          <LoadingSpinner v-if="loading"></LoadingSpinner>
          <div class="container" v-else>
            <PaginaPost :maxLength="maxLength" :start="start" :end="end" @next="next" @prev="prev" class="mb-3"></PaginaPost>
            <BlogPost
                v-for="post in posts.slice(start, end)"
                :key="post.title"
                :title="post.title"
                :id="post.id"
                :body="post.body"
                class="mb-2"
                @fijarFavorito="fijarFavorito"/>
        </div>
    </div>
</template>
