var app = {
    inicio:function(){
        this.iniciarBotones();
        this.iniciarFastClick();
        this.iniciarHammer();

    },
    iniciarFastClick: function(){
        FastClick.attach(document.body);
    },
    iniciarBotones: function(){
        // Seleccionamos los elementos que tienes los identificadores
        var botonClaro=document.querySelector('#claro');
        var botonOscuro=document.querySelector('#oscuro');

        // Asociamos los evento
        botonClaro.addEventListener('click',this.ponloClaro,false)
        botonOscuro.addEventListener('click',this.ponloOscuro,false)
    },
    iniciarHammer: function(){
        var zona = document.getElementById('zona-gestos');
        var hammertime = new Hammer(zona);

        hammertime.get('pinch').set({enable: true});
        hammertime.get('rotate').set({enable: true});

        hammertime.on('tab doubletab swipe press rotate', function(ev){
            document.querySelector('#info').innerHTML=ev.type+'!';
        });

    },
    ponloClaro: function(){
        document.body.className='claro'

    },
    ponloOscuro: function(){
        document.body.className='oscuro'
    }
};

if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',function(){
        app.inicio();
    },false)
}