/*console.log(window);
console.log(document);

let texto ="Hola a todos este es un mensaje"
const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);*/
// MAPEANDO ELEMENTOS DEL DOM

/*console.log("-----Elementos del documento---");
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)//estilos y reglas css
console.log(document.scripts)*/
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

//estos son los más usados.
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(element =>console.log(element) );

console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
*/
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

//establecer un nuevo valor a los elementos

document.documentElement.lang="en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("Lang", "es-COL");
console.log(document.documentElement.lang);
//las variables donde guardamos partes del dom usamos el signo $
const $linkDOM=document.querySelector(".link-dom");

//target _blank  lo usamos para abrir una pestaña
$linkDOM.setAttribute("target","_blank");
//rel noopener, nos sirve para evitar que sea insegura nuestra aplicación al abrir una nueva pestaña
$linkDOM.setAttribute("rel","noopener")

//podemos validar si un atributo esta en un elemento
console.log($linkDOM.hasAttribute("rel"));

//poedemos quitar atributos de un elemento html
// $linkDOM.removeAttribute("rel");

//Data Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del documento")
console.log($linkDOM.getAttribute("data-description"));*/

const $linkDOM=document.querySelector(".link-dom");

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color)
// console.log(window.getComputedStyle($linkDOM))

//establecer valores
/*$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")
$linkDOM.style.width="50%"
$linkDOM.style.textAlign="center"
$linkDOM.style.marginLeft="auto"
$linkDOM.style.marginRight="auto"
$linkDOM.style.padding="1rem"
$linkDOM.style.borderRadius=".5rem"
console.log($linkDOM.style)
*/

//variables css o custom Properties CSS
const $html= document.documentElement,
 $body= document.body;

 let varDarckColor=getComputedStyle($html).getPropertyValue("--dark-color"),
   varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarckColor,varYellowColor);
/*
$body.style.backgroundColor=varDarckColor;
$body.style.color=varYellowColor;
*/

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);// nos devuelve el valor de la clase card
console.log($card.classList)// nos devuelve un domTokenList

//metodo contains para verificar si existe una clase en este caso la clase rotate-45
console.log($card.classList.contains("rotate-45"));

//metpodo add para agregar una vlase 
$card.classList.add("rotate-45")

//metodo remove para quitar una clase 
$card.classList.remove("rotate-45");

//metodo toggle sirve para agreare o quitar uns clase
//ejemplo evalua una clase que le pasamos por parametro si no la tiene entonces la coloca 
// y si la tiene entonces la quita

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

//metodo replace recibe comop parametro la clase a quitar y la clase a colocar 
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.toggle("rotate-135");

//podemos agrgar más de una clase a la vez, separadaspor coma usando el metodo add
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");



const $whatIsDOM = document.getElementById("esto");

let texto =`<p> El Modelo de Objeto Documento(<b><i> DOM- Documento Object Model</i></b>) es una API para documentos HTML y XML</p>
<p>Este proové una representación estructural del documento, permitiendo modificar su contenido y presentación visula mediante codigo JS</p>
<p>
<mark>El DOM es la parte de la espesificación de JavaScript, es una API para los navegadores. </mark>
</p>
`;

//agregar contenido textual a un elemento 
/* innerText sirve para internet explorer no es parte del estadar se creo para internet explorer
 */
console.log(texto);
$whatIsDOM.innerText=texto;

//textContent hace parte del estandar pero ingresa el contenido del texto tal cual sin tener en cuenta las etiquetas html
$whatIsDOM.textContent=texto;

$whatIsDOM.innerHTML=texto;
$whatIsDOM.outerHTML=texto;
