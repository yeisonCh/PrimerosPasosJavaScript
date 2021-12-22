window.addEventListener("resize",(e)=>{
   console.log("--------------evento resize--------");
   console.clear();
   console.log(window.innerWidth);
   console.log(window.innerHeight);
   console.log(window.outerWidth);
   console.log(window.outerHeight);
   console.log(e);

});

//el evento LOAD se dispara hasta que todo el documento esta completamente cargado, hojas de estilo 
//hasta que se parcen los estilos y hojas de imagenes
window.addEventListener("load", (e)=>{
   console.log("----Evento load -----");
   console.log(window.screenX);
   console.log(window.screenY);
   console.log(e);
});

//el evento DOMContentLoaded carga más rapido que el metodo load
//DOMContentLoaded no espera que carge las hojas de estilo y lo demas sino que se ejecuta
window.addEventListener("DOMContentLoaded",(e)=>{
   console.log("----Evento DOMContentLoaded -----");
   console.log(window.screenX);
   console.log(window.screenY);
   console.log(e);
})

