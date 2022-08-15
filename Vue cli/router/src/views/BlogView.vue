<template>
  <div><TitleCom text="Hola a todos"/>
  <button @click="consumirApi">consumir API</button>
  <div v-for="item in arrayBlog" :key="item.id"></div>
  <router-link :to="`/blog/:${item.id}`">
  {{item.title}}
  </router-link>
  </div>
</template>

<script>
import TitleCom from '../components/TitleCom'
export default {
  components: { TitleCom },
  data () {
    return {
      arrayBlog: []
    }
  },
  methods: {
    async consumirApi () {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const array = await data.json()
        console.log(array)
        this.arrayBlog = array
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.consumirApi()
  }
}
</script>

<style>

</style>
