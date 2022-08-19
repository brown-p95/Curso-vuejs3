<script></script>
<template>
<nav class="navbar bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <router-link clas="navbar-brand" to="/pokemons">
      <img src="@/assets/logo.png" alt="" width="30" height="24">
      </router-link>
    </a>
    PokeAPI
    <router-link active-class="active" class="btn btn-outline-primary" to="/">Home</router-link>
    <router-link active-class="active" class="btn btn-outline-primary" to="/about">About</router-link>
    <router-link active-class="active" class="btn btn-outline-primary" to="/pokemons">Pokemons</router-link>
    <router-link active-class="active" class="btn btn-outline-primary" to="/blog">Blog</router-link>
    <router-link active-class="active" class="btn btn-outline-primary" to="/seccion3">Seccion3</router-link>
    <router-link active-class="active" class="btn btn-outline-primary" to="/seccion4">Seccion4</router-link>
    </div>
</nav>
<router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.zero{
  color: blue
}
.positive{
color: green
}
.negative{
color: red
}
li{
  text-align: left;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
