const d = document,
w = window;
export default function scrollTopButton(btn){

     /* ---- capturamos el scroll y obtenemos la distancia con respecto al top */

     const $scrollBtn = d.querySelector(btn);

     
     w.addEventListener("scroll", (e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop; 
        /*detectamos a que distancia se ha separado la barra de scroll 
         lo podemos hacer con cualquiera de estos dos metodos  window.pageYOffset ó
         document.documentElement.scrollTop*/
         //console.log(w.pageYOffset, d.documentElement.scrollTop);  

         if(scrollTop > 600){
             /*si la distancia del scroll con respecto a top es mayor a 600 desactivamos 
             la clase hidden que es la que nos oculta el boton*/
             $scrollBtn.classList.remove("hidden");
             // al boton en su lista de clases le vamos a quitar hidden
         }else{
              $scrollBtn.classList.add("hidden");
         }
         
     });
     d.addEventListener("click",(e)=>{
         if(e.target.matches(btn)){
            /* usamos el metodo scrollTo */
            w.scrollTo({
                behavior:"smooth", //comportamiento
                top:0 //a donde quetemos que llege la bara de desplazameinto.
            })
         }
     });
}