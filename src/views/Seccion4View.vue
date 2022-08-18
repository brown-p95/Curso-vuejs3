<script setup>
import ContadorCom from '@/components/ContadorCom.vue'
import BlogPost from '@/components/BlogPost.vue'
</script>
<template>
<div class="Container">
<ContadorCom/>
<ContadorCom/>
<ContadorCom/>
<BlogPost title="Prueba" text="fesa" colorText="info" @cambiarFavoritoNombre="cambiarFavorito"/>
<BlogPost title="Prueba2" text="2" colorText="warning" @cambiarFavoritoNombre="cambiarFavorito"/>
<BlogPost title="titulo" text="text" colorText="danger" @cambiarFavoritoNombre="cambiarFavorito"/>
</div>
</template>
