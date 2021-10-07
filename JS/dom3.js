

  const $cards=document.querySelector(".cards"),
   $template=document.getElementById("templeteCard").content,
   $fragment=document.createDocumentFragment(),
   //arreglo para simular el consumo de datos
   cardContent=[
     {
      title:"Tecnología",
      img:"https://placeimg.com/200/200/tech",
     },
     {
      title:"Animales",
      img:"https://placeimg.com/200/200/animals",
     },
     {
      title:"Arquitectura",
      img:"https://placeimg.com/200/200/arch",
     },
     {
      title:"Gente",
      img:"https://placeimg.com/200/200/people",
     },
     {
      title:"Naturaleza",
      img:"https://placeimg.com/200/200/nature",
     },
    
   ];

   cardContent.forEach(el=>{
    //tomamos el template que es la estructura que hemos creado en html 
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent=el.title;

    //ahora clonamos un nodo
    /*creamos una varible clone y usamos el metodo
    importNode este resive como parametros la variable donde tenemos el nodo 
    que vamos a clonar y true para que nos clone todo el nodo */
    const $clone=document.importNode($template,true)

    $fragment.appendChild($clone);

   });


$cards.appendChild($fragment);
document.body.appendChild($cards);