<template>
    <TitleCom text="Ruta con parametros"/>
    <h2>Parametros: {{$route.params.id}}</h2>
</template>

<script>
import TitleCom from '../components/TitleCom.vue'
export default {
  components: { TitleCom }
}
</script>

<style>

</style>
