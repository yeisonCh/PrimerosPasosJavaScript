/*const $cards=document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.firstElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
*/

//crear elementos HTML dinamicamente

const $figure=document.createElement("figure"),
 $img=document.createElement("img"),
 $figcaption=document.createElement("figcaption"),
 $figcaptionText=document.createTextNode("Animals"),
 $cards=document.querySelector(".cards");


//agregamos el atributo src y le especificamos su contenido
 $img.setAttribute("src","https://placeimg.com/200/200/animals")

 //agregamos el atributo alt y le especificamos su contenido
 $img.setAttribute("alt","Animals")
 
 //agregarle una clase a la figura
$figure.classList.add("card")
  //agregar las variables que hemos creado
 $figcaption.appendChild($figcaptionText)
 $figure.appendChild($img)
 $figure.appendChild($figcaption)

 $cards.appendChild($figure);

 const estaciones=["Primavera","verano","Otoño","Invierno"],
  $ul=document.createElement("ul");

  document.write("<h3>Estaciones del Año</h3>");
  document.body.appendChild($ul);
  
  estaciones.forEach((el)=>{
    const $li =document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li)
  })



 const continentes=["Africa","Amenria","Asia","Europa","Oseania"],
  $ul2=document.createElement("ul");

  document.write("<h3>Continentes del Mundo</h3>");
  document.body.appendChild($ul2);
  $ul2.innerHTML="";
  continentes.forEach((el)=>($ul2.innerHTML+=`<li>${el}</li>`))

  //inserción con fragmentos
  /* lo que hacemos es que creamos una variable a la cual le vamos
  ha guardar todos los elementos en este caso los de nuestro arreglo meses 
  y luego asignamos la variable $fragment a la ul 
  por ultimo mandamos a imprimir en el body la $ul3
   */

  const meses=["Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"],
  $ul3=document.createElement("ul"),
  $fragment=document.createDocumentFragment();

  meses.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $fragment.appendChild($li);
    
  });

  document.write("<h3>Meses del año </h3>");
  $ul3.appendChild($fragment)
  document.body.appendChild($ul3);