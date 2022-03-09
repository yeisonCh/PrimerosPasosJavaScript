const d = document;

//la función recibe dos parametros 
//1. el input para que nos compare lo que escribimos, que seria lo que desemos buscar
//2. selctor  sobre que señector va a hacer la busqueda.
export default function searchFilters(input,selector){


    d.addEventListener("keyup",(e)=>{
        //keyup cuando el usuario levanta el dedo de una tecla
        //si el evento.target coincide(matches) con lo que viene en input
        if(e.target.matches(input)){
 //           console.log(e.key);
              console.log(e.target.value);

    if(e.key==="Escape")e.target.value="";
 // d.querySelectorAll  busca en todos los electores
 //para cada elemento, el contemido del texto, pasarlo a minusculas, usamos el metodo includes 
//includes nos devuelve un valor bolean para comparar si existe o no
                 d.querySelectorAll(selector).forEach((el)=> 
                (el.textContent.toLowerCase().includes(e.target.value)||el.textContent.toUpperCase().includes(e.target.value))
                ?el.classList.remove("filter") //si nos devuelve a verdadero no quita la clase ccs filter
                :el.classList.add("filter") // si devuelve falso agrega la clase css filter
                
                );
            
        }
    });
}