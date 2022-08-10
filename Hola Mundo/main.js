const app = Vue.createApp({
    data(){
        return {
            titulo:'Este es un Hola mundo desde vue.js',
            cantidad: 10,
            enlace: 'https://www.youtube.com/',
            estado: false,
            servicios: ['pagos','retiros','tranferencia','consulta']
          
        }
    },
    methods: {
        quitar100(){
            if(this.cantidad>100)
            this.cantidad-=100;
            else
            alert('no se puede quitar mas')
        },
        agregar100(){
            
            this.cantidad+=100;
        }
        

    }
})
