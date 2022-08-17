<template>
    <TitleCom text="Ruta con parametros"/>
    <h2>Parámetro: {{ $route.params.id }}</h2>
    <h3>{{ articulo.title }}</h3>
    <p>{{ articulo.id }} - {{ articulo.body }}</p>
</template>

<script>
import TitleCom from '../components/TitleCom.vue'
export default {
  components: { TitleCom },
  data () {
    return {
      articulo: {}
    }
  },
  methods: {
    async consumirArticulo () {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        const objeto = await data.json()
        console.log(objeto)
        this.articulo = objeto
      } catch (error) {
        console.log(error)
      }
    }
  },

  created () {
    this.consumirArticulo()
  }
}
</script>

<style>

</style>
