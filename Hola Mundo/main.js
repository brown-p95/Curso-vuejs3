const app = Vue.createApp({
    data(){
        return {
            titulo:'Este es un Hola mundo desde vue.js',
            value: 100,
            get cantidad() {
                return this.value;
            },
            set cantidad(value) {
                this.value = value;
            },
            enlace: 'https://www.youtube.com/',
            estado: false,
            servicios: ['pagos','retiros','tranferencia','consulta'],
            statusbotonquitar: false,
            get estadoboton() {
                return this.statusbotonquitar;
            },
            set estadoboton(value) {
                this.statusbotonquitar = value;
            },
          
        }
    },
    methods: {
        subtraction100(){
            if(this.value>100)
            this.value-=100;
            else
            alert('no se puede quitar mas')
        },
        add100(){
            this.estadoboton=false;
            this.value+=100;
        },
        subtraction10(){
            if(this.value>10)
            this.value-=10;
            else if(this.value==10){
            this.value-=10;
            alert('La Cuenta quedara en 0, no se puede descontar mas')
            this.estadoboton=true;
            return
            }
            else
            alert('Cuenta en 0, no se puede descontar mas')
        },
        add10(){
            this.value+=10;
            this.estadoboton=false;
        },
        
        

    },
    computed: {
        colorCantidad(){
            
            return this.cantidad>500?'text-success':'text-warning'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase()
        }

    }
})
