<script></script>
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Seccion3">Seccion3</router-link> |
    <router-link to="/Seccion4">Seccion4</router-link> |
    <router-link to="/blog">Blog</router-link>
    </nav>
  <router-view/>
  <h1 :class="classCounter">{{count}}</h1>
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
