<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TitleCom text="Texto en la vista Home usando el componente TitleCom"/>
    <ButtonCounter/>
    <button-counter/>
    <descriptionComp fighter ="iori" colorText="primary"></descriptionComp>
    <descriptionComp fighter ="Orochi" colorText="warning"></descriptionComp>'
    <descriptionComp
    v-for="post in posts"
    :key="post.id"
    :fighter="post.fighter"
    :id="post.id"
    ></descriptionComp>
  </div>
</template>

<script>
import TitleCom from '../components/TitleCom'
import ButtonCounter from '@/components/ButtonCounter'
import DescriptionComp from '@/components/DescriptionComp'
export default {
  name: 'HomeView',
  components: {
    TitleCom,
    ButtonCounter,
    DescriptionComp
  }
}
</script>
