//Js fundamentos

//const { transformVNodeArgs } = require("vue")

//VARIABLES-----------------
const array = [10, 20, 30]
array.push(40, 50, 60, 70)
console.log(array)

const persona = {
  edad: 10,
  nombre: 'pablo',
  apellido: 'Gonzalez'
}

persona.edad = 22
persona.nombre = 'Jose'

console.log(persona)

//FUNCIONES------------------
const mensaje = (nombre) => {
  return 'Hola soy Pablo ' + nombre
}

const resultado = mensaje('pablo');
console.log(resultado)

const suma = (num) => {
  return (num + num)
}

var n1 = 35
var n2 = 65
const nump = suma(n1)
console.log(nump)

const sumejorada = (x, y) => {
  return `el resultado de la suma es ${x + y}`
}
const sumamejor = sumejorada(n1, n2)
console.log(sumamejor)

//OBJETOS------
const mascota = {
  nombre: 'Holly',
  edad: '3',
  raza: ['perro', 'Maltes', 'French Pudle'],
  color: 'blanco',
  adoptada: true,
}
mascota.juguetes = ['cuerda', 'pelota', 'osito'];
mascota.id = 1

console.log('id ' + mascota.id)
console.log('Nombre: ' + mascota.nombre)
console.log('Raza: ' + mascota.raza)
console.log('Juguetes' + mascota.juguetes)

//DESTRUCTURING
const {
  nombre,
  edad,
  juguetes
} = mascota
console.log(nombre)
console.log(juguetes)
console.log(edad)

const manzanas = {
  fruta: true,
  colores: ['roja', 'verde', 'amarilla'],
  tamaños: ['pequeña', 'mediana', 'grande'],
  origen: {
    mexico: ['ags', 'gdl'],
    usa: ['springfield', 'texas', 'Illinois']
  }
}
const {
  mexico,
  usa
} = manzanas.origen;
console.log(mexico, usa);
//FETCH ----------
const getNombre = (idPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => res.json())

    .then(post => {
      console.log(post.userId);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => {
          return res.json()
        })
        .then(user => {
          console.log(user.name);
        })
    })
  //.then(post=>console.log(post))
}

getNombre(3);
//async await--------------

const getNombreAsync = async (idPost) => {
  try {
    const respuestapost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    const post = await respuestapost.json()
    console.log(post.userId);

    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const user = await resUser.json()
    console.log(user.name);
  } catch (error) {
    console.log(error);
  }
}

getNombreAsync(11);

//MAP -------------
const pokem = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()
    //console.log(data.results)
    const arraynames = data.results.map(poke => poke.name)
    console.log(arraynames)
  } catch (error) {
    console.log(error)
  }

}
    pokem();

//FILTER-------
const pokef = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()
    //console.log(data.results)
    const arraynames = data.results.filter(poke => poke.name!=('kakuna'&&'raticate'))
    console.log(arraynames)
  } catch (error) {
    console.log(error)
  }

}
    pokef();