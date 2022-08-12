<template>
  <TitleCom text="Hola a todos"/>
  <button @click="consumirApi">consumir API</button>
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
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
