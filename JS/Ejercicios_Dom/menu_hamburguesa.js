export default function hamburgerMenu(panelBtn,panel,menuLink){
/*delegación de eventos */
const d= document;

d.addEventListener("click",e=>{
    /*si elemento que origina el evento coincide con panelBtn ó (usamos template String para agregar el asteristo)
    con el fin de que capture todo lo que tenemos dentro del boton */
    if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
        /*seleeccione el elemento de clase panel de la lista de clases 
        (toggle) cambiala ó intercambia a is-active */
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if(e.target.matches(menuLink)){
        /*seleeccione el elemento de clase panel de la lista de clases 
        (remove) remover a is-active */
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
    }
})
}