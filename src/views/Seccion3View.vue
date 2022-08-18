<script setup>
import { ref, computed } from 'vue'
const count = ref(0)
const arrayNum = ref([])
const classCounter = computed(() => {
  if (count.value === 0) {
    return 'zero'
  } else if (count.value > 0) {
    return 'positive  '
  } else {
    return 'negative'
  }
})
const bloqBtnAdd = computed(() => {
  const numSearch = arrayNum.value.find((num) => num === count.value)
  console.log(numSearch)
  if (numSearch === 0) return true
  return numSearch
})
const fruits = ['🍎', '🍌', '🍉', '🍓', '🍒']
const arrayFrutas = [
  {
    name: 'Manzana',
    price: '$1.00',
    description: 'Una manzana'
  },
  {
    name: 'Pera',
    price: '$2.00',
    description: 'Una pera'
  },
  {
    name: 'Naranja',
    price: '$3.00',
    description: 'Una naranja'
  }
]
const objetFruit = {
  name: 'Mango',
  price: '$1.00',
  description: 'Un mango'
}
const handleClick = (msg, msg2) => {
  console.log(msg + [' '] + msg2)
}
const incrementClick = () => {
  console.log('aumenta contado')
  count.value++
  console.log(count)
}
const decrementClick = () => {
  console.log('aumenta contado')
  count.value--
  console.log(count)
}
const resetClick = () => {
  console.log('aumenta contado')
  count.value = 0
  console.log(count)
}
const addNumClick = () => {
  arrayNum.value.push(count.value)
  console.log('numero agregado a la lista')
}
</script>
<template>
  <router-view/>
  <div class="btn-group">
  <button class="btn btn-success" v-on:click="incrementClick()">Increment</button>
  <button class="btn btn-warning" v-on:click="decrementClick()">Decrement</button>
  <button class="btn btn-danger" v-on:click="resetClick()">Reset</button>
  <button class="btn btn-dark" @click="addNumClick()" :disabled="bloqBtnAdd">Agregar numero a lista</button>
  <button v-on:click="handleClick('Parametro 1','parametro2')">Activar</button>
  <button @click.right="handleClick('activar 2','click Right')">Activar2</button></div>

  <h1 :class="classCounter">{{frutascount}}</h1>
  <div>Numeros Favoritos: {{arrayNum}}</div>
  <ul class="list-group mt-4"><li class="list-group-item" v-for="(num, index) in arrayNum" :key="index">
  {{num}}
  </li></ul>

  <ul class="list-group mt-4">
    <li class="list-group-item" v-for="(fruit, index) in fruits" :key="fruit.value">
    <h1>{{index}}{{ fruit }}</h1>
    </li></ul>
  <ul><li v-for="fruit in arrayFrutas" :key="fruit.value">
  name: {{fruit.name}} description: {{fruit.description}} price: {{fruit.price}}
</li></ul>
<h1>Object Fruit {{objetFruit}}</h1>

  <template v-for="(value, propiedad, index) in objetFruit" :key="index">
  <ul><li v-if="index==1">{{index}}{{propiedad}}: {{value}}</li></ul>
  </template>
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
