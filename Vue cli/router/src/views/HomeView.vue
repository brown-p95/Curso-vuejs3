<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TitleCom text="Texto en la vista Home usando el componente TitleCom"/>
  </div>
</template>

<script>
import TitleCom from '../components/TitleCom'

export default {
  name: 'HomeView',
  components: {
    TitleCom
  }
}
</script>
