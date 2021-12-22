const $divsEventos=document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);
//creamos una variable que haga referencia al link que creamos
$linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e){
   console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
   //e.stopPropagation();  metodo para detener una propagación
}

$divsEventos.forEach(div =>{
//la función addEventListener tiene un marametro opcional valor boleano
//si no lo colocamos lo toma como false o face de burbuja de adentro asi afuera
//el valor en true realiza desde afuera asia adentro o fase de captura
   div.addEventListener("click",flujoEventos);
   
   //div.addEventListener("click",flujoEventos,true);

   // podemos pasar como terccer parametro un objeto y nos quedaria d
   /*div.addEventListener("click",flujoEventos,{
      capture:false,//para activar el evento de forma burbuja
      once:true, //para ejecutar el evento una sola ves
   });*/
});

$linkEventos.addEventListener("click", (e)=> { //la letra e hace referencia al evento que estamos desencadenando
   alert("hola compañeros, este es un ejemplo para detener un evento");
   e.preventDefault(); //meto para detener el evento que desencadena en este caso el link 
});