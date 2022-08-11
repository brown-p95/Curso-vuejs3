app.component('footer-banco',{
    props:['date','amount'],
    template:
                `<div class="bg-dark py-3 text-white mt-2">
                <h2>{{text}}-{{cantidad}}</h2> </div>`,
    data(){
        return{
            text: 'Footer de mi sitio web dinamico'
            
        }
    }



})
