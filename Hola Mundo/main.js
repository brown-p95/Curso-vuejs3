const app = Vue.createApp({
    data(){
        return {
            titulo:'Este es un Hola mundo desde vue.js',
            value: 100,
            enlace: 'https://www.youtube.com/',
            statusAccount: true,
            servicios: ['pagos','retiros','tranferencia','consulta'],
            statusbotonquitar: false,
          
        }
    },
    methods: {
        subtraction100(){
            if(this.value>100)
            this.value-=100;
            else if(this.value==100){
            this.value-=100;
            alert('La Cuenta quedara en 0, no se puede descontar mas')
            this.statusbutton=true;
            return
            }
            else
            alert('Cuenta en 0, no se puede descontar mas')
        },
        add100(){
            this.statusbutton=false;
            this.value+=100;
        },
        subtraction10(){
            if(this.value>10)
            this.value-=10;
            else if(this.value==10){
            this.value-=10;
            alert('La Cuenta quedara en 0, no se puede descontar mas')
            this.statusbutton=true;
            return
            }
            else
            alert('Cuenta en 0, no se puede descontar mas')
        },
        add10(){
            this.value+=10;
            this.statusbutton=false;
        },
        
    },
    computed: {
        colorAmount(){
            
            return this.cantidad>500?'text-success':'text-warning'
        },
        uppercaseText(){
            return this.titulo.toUpperCase()
        }

    }
})
