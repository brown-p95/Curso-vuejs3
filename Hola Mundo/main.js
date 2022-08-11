const app = Vue.createApp({
    data(){
        return {
            titulo:'Este es un Hola mundo desde vue.js',
            cantidad: 100,
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
        quitar100(){
            if(this.cantidad>100)
            this.cantidad-=100;
            else
            alert('no se puede quitar mas')
        },
        agregar100(){
            this.estadoboton=false;
            this.cantidad+=100;
        },
        quitar10(){
            if(this.cantidad>10)
            this.cantidad-=10;
            else if(this.cantidad==10){
            this.cantidad-=10;
            alert('La Cuenta quedara en 0, no se puede descontar mas')
            this.estadoboton=true;
            return
            }
            else
            alert('Cuenta en 0, no se puede descontar mas')
        },
        agregar10(){
            this.cantidad+=10;
            this.estadoboton=false;
        },
        
        

    }
})
