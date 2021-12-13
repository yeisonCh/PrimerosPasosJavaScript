/*
insertAdjacent...
.insertAdjacentElement(position, el)
.insertAdjacentHTML(position,html)
.insertAdjacentText(position,text)


Posiciones paera los metodos anteriores
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/


const $cards=document.querySelector(".cards"),
   $newCard=document.createElement("figure");


   let $contenCard ='<img src="https://placeimg.com/200/200/any" alt="Any"><figcaption></figcaption>';
  
   $newCard.classList.add("card");

   $newCard.insertAdjacentHTML("beforeend",$contenCard);
   
   $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
  
//tomamos el nodo de referencia eneste caso $cards
//en targetas el cual lo tomo como referencia metodos nuevos
  // $cards.insertAdjacentHTML("afterbegin",$newCard);

   /*$cards.insertAdjacentHTML("afterbegin",$newCard);

   $cards.insertAdjacentHTML("beforeend",$newCard);

   $cards.insertAdjacentHTML("afterend",$newCard);*/
//comando para insertar los comados de la nueva tarjeta y el nombre en el figcaption
   $cards.prepend($newCard);
   $cards.append($newCard);
   $cards.before($newCard);
   $cards.after($newCard);
