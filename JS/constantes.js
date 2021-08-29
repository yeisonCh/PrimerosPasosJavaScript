export const PI =Math.PI//Anteponemos la palabra export para exportar 

let usuario="Andres"
let password="1234" // estas dos variables no las puedo ver en otros archivos porque no tienen la palabra reservada export


// creamos la función saludar 


//Para exportar una función por default y no se puede tener dos exportaciones por default
/* el dafault solo sirve para una función declarada como saludar 
no sirve paara uso con const o let
*/
export default function saludar(){
    console.log("Hola esto es javaScript +ES6")
}