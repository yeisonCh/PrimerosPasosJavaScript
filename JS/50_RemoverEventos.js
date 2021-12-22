  function holaMundo(){
   alert("Hola a todos desde JavaScript");
   console.log(event);
}


   function saludar(nombre="Desconocid@"){
      alert (`Hola ${nombre}`);
      console.log(event)
   }


const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple= document.getElementById("evento-multiple"),
$eventoRemover= document.getElementById("Evento-Remover");


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
$eventoMultiple.addEventListener("click",holaMundo);

//ejecutando una función anonima
$eventoMultiple.addEventListener("click", (e)=>{
   alert("Manejador de eventos multiples");
   console.log(e);
   console.log(e.type); //para mostrar el tipo de error 
   console.log(e.target);// para mostrar el objeto que lo origina
});

$eventoMultiple.addEventListener("click",()=>{
   saludar();
   saludar("Andres");
   saludar("Joel");
})

//función expresada

const removerDobleClock =(e)=>{
   alert(`Removiendo evento de tipo${e.type}`);
   console.log(e);
   //para remover un evento debemos crear una función
   //esta debe recir dos parametros el evento y la función 
   $eventoRemover.removeEventListener("dblclick", removerDobleClock)
   //podemos desactivar el boton con la propiedad html disable
  // $eventoRemover.disabled=true;
}


//removiendo eventos, solo lo podemos hacer con manejadores multiples
//ademas es necesario que se utilice una función declarada o expresada

$eventoRemover.addEventListener("dblclick",removerDobleClock)
