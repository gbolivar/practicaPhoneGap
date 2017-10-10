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

        // Animation

        zona.addEventListener('webkitAnimationEnd',function(e){
            zona.className='';
        });

        hammertime.on('doubletab',function(ev){
            zona.className='doubletab';
        });

        hammertime.on('press',function(ev){
            zona.className='press';
        });

        hammertime.on('swipe',function(ev){
            var clase=undefined;
            direccion=ev.direction;
            if(direccion==2) clase='swipe-derecha';
            if(direccion==4) clase='swipe-izquierda';
            zona.className=clase;
        });

        hammertime.on('rotate',function(ev){
            var umbral = 25;
            if(ev.distance > umbral) zona.className='rotate';
        });

        /*hammertime.on('tab doubletab swipe press rotate', function(ev){
            document.querySelector('#info').innerHTML=ev.type+'!';
        });*/

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