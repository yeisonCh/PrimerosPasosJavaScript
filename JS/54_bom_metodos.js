const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");

//creamos una variable
let ventana;

$btnAbrir.addEventListener("click", (e)=>{
  ventana=  window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e)=>{
   ventana.close();
});
$btnImprimir.addEventListener("click", (e)=>{
   window.print(); //nos sirve para mandar imprimir la pagina o lo que deseamos.
});

