const d=document;

export default function responsiveTester(from){
    const $from=d.getElementById(from);
    //creamos una variable que guardara el window.open como referencia a la ventana que se va a abrir
    let tester;
    d.addEventListener("submit", (e)=>{
        //agrege o este a la escucha de un evento de tipo submit, guardamos el evento en e y programamos
        //usaremos otra forma de comparar el desecadenante de un evento 
        //para no usar .matches para detectar quien desencadeno el evento
        if(e.target===$from){
            //para evitar que el formulario procese la pagina o cancelar la accion por defecto del formulario
            e.preventDefault();
            //alert("formulario enviado");
            tester=window.open(
            $from.direccion.value,"tester",
            `innerWidth=${$from.ancho.value} ,
            innerHeight=${$from.alto.value}`);
        }

    });
    d.addEventListener("click",e=>{
        if(e.target===$from.cerrar) tester.close();
    });
}