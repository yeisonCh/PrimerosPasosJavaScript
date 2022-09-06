

  const $cards=document.querySelector(".cards"),
   $newCard=document.createElement("figure");


   $newCard.innerHTML='<img src="https://placeimg.com/200/200/any" alt="Any"><figcaption>Any</figcaption>';

   $newCard.classList.add("card");
/*vamos a remplazar una tergeta en este caso la targeta de arquitectura */

//para remplazar una tergeta o un nodo
//$cards.replaceChild($newCard,$cards.children[2]);

//insertar un nodo
$cards.insertBefore($newCard, $cards.firstElementChild);


//eliminar un nodo
$cards.removeChild($cards.lastElementChild);

//el DOM tiene un metodo que nos permite clocarnar
$cloneCads =$cards.cloneNode(); //true para que clone todo el contenido
//sin parametros o false nos clonaria solo la estructura.

document.body.appendChild($cloneCads);