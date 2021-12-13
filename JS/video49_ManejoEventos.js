function holaMundo(){
   alert("Hola a todos desde JavaScript");
   console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiplconsole= document.getElementById("evento-multiple");


//para ejecutar una función es este caso lo hacemos sin los parentesis
//esto cundo lo hacemos de forma semántica
$eventoSemantico.onclick=holaMundo;
$eventoSemantico.onclick=function(e){
   alert("Hola a todos manejador semantico");
   console.log(e);
   //console.log(event);
};
//manejadores multiples nos permite pasar más de un parametro
//primer parametro evento, función {sin parentesis} que deseamos ejecutador o codigo que deseamos ejecutar 
//los parentesisi en una función significa ejecución inmediata
$eventoMultiplconsole.addEventListener("click",holaMundo);

//ejecutando una función anonima
$eventoMultiplconsole.addEventListener("click", (e)=>{
   alert("Manejador de eventos multiples");
   console.log(e);
   console.log(e.type); //para mostrar el tipo de error 
   console.log(e.target);// para mostrar el objeto que lo origina
});