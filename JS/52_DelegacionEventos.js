const $divsEventos=document.querySelectorAll(".eventos-flujo div"),
//asignamos a una variable el link 
$linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e){
   console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
   //e.stopPropagation();  metodo para detener una propagación
}
//función para capturar un evento con clik, el cual lo asignamos al documento
document.addEventListener("click",(e) =>{
   console.log("Click en",e.target);

   //si el evento que origina determinado objeto esta dentro de ela seccion eventos-flijo y sea una div que nos desencadene la funcion
if(e.target.matches(".eventos-flujo div")){
   flujoEventos(e);
}

   //eliminar el evento del link 
   //el metodo matches funciona como un buscador de selectores
   if(e.target.matches(".eventos-flujo a")){
      alert("hola compañeros, este es un ejemplo para detener un evento");
   e.preventDefault(); //meto para detener el evento que desencadena en este caso el link
   }
})


/*
$divsEventos.forEach(div =>{
 div.addEventListener("click",flujoEventos);
});

*/