import countdown from "./Ejercicios_Dom/cuenta_regresiva.js";
import hamburgerMenu from "./Ejercicios_Dom/menu_hamburguesa.js";
import { digitaClock, alarm } from "./Ejercicios_Dom/reloj.js";
import { shortcuts } from "./Ejercicios_Dom/teclado.js";//destructuración
import { moveBall } from "./Ejercicios_Dom/teclado.js";
import scrollTopButton from "./Ejercicios_Dom/boton_scroll.js";
import darkTheme from "./Ejercicios_Dom/temaOscuro.js";
import responsiveMedia from "./Ejercicios_Dom/Objeto_responsive.js";
import responsiveTester from "./Ejercicios_Dom/prueba_responsive.js";
import userDeviceInfo from "./Ejercicios_Dom/deteccion_dispositivos.js";
import networkStatus from "./Ejercicios_Dom/deteccion_red.js";
import webCam from "./Ejercicios_Dom/deteccion_webcam.js";
import getGeolocation from "./Ejercicios_Dom/geolocalizacion.js";
import searchFilters from "./Ejercicios_Dom/filtroBusquedas.js";


const d=document;

//DOMContentLoaded es cuando se carga nuestro documento
d.addEventListener("DOMContentLoaded",(e)=>{   
    //y vamos importando o cargando nuestras funciones
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitaClock("#reloj", "#activar-reloj","#desactivar-reloj");
    alarm("assets/sonido.mp3","#activar-alarma","#desactivar-alarma");
    //los prametros que necesitamos tres parametros
    countdown("countdown","10,07,2022 21:57:00","Felicidades compañero");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=AJrFs2SJcu0" target="_blank" rel="noopener">Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/AJrFs2SJcu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    /*cuando utilizamos la finción getElementsByID solo pasamo el nombre del id sin punto cpmo primer parametro
    como segundo parametro pasamos la mediaQery
    */
    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/zwsFbiikFF4HpKmK6" target="_blank" rel="noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127077.10485095382!2d-72.99682118860713!3d5.5433493510361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a59f21d23516f%3A0xedea6fa8bc3482ee!2sLaguna%20De%20Tota!5e0!3m2!1ses-419!2sco!4v1641499923856!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");//le pasamos como parametro el id que estan en el html seccion 7
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card"); //le pasamos el nombre de la clase en el primer parametro, segundo parametro le pasamos el selectror de la etiqueta figure
});

//keydown es el eventos de oprimir una tecla
d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e,".ball", ".stage");
});

//esta finción la sacamos de DOMContentLoaded, ya que la misma contiene un DomContentLoaded
//y no podemos ejecutarlo dos veces dentro de un mismo ambito.
darkTheme(".dark-theme-btn","dark-mode");

//esta función no necesita ejecutarce a la carga del documento, esta se va a ejecutar cuando el navegador detecte que se perdio la conexion
networkStatus();



/*
keyup evento para cuando solatmos la tecla 
d.addEventListener("keyup", (e)=>{
    shortcuts(e);
})

keypress evento que se dispara cuando tenemos oprimida una tecla
d.addEventListener("keypress", (e)=>{
    shortcuts(e);
})*/
