const d=document,
ls=localStorage;

export default function darkTheme(btn,classDark){

    const $themeBtn = d.querySelector(btn),
    //creamos un selector que apunte a los elementos que tienen el data-atribute
    //en este caso el data-dark que tiene la etiqueta html
    //para esto usamos querySelectorAll("[]") para capturar los elementos con este atributo.
    $selectors = d.querySelectorAll("[data-dark]");//esto nos devuelve un NodeList
    console.log($selectors);

    //almacenamos en variables los emogis de la luna y el sol, esto con el fin 
    // de cambiar el textContent dependiendo de el color del body
    let luna="🌙",
    sol="☀️";

    const lightMode=()=>{
        $selectors.forEach(el=>el.classList.remove(classDark));
        $themeBtn.textContent=luna;
        ls.setItem("theme","light");
    }
    const darkMode=()=>{
        $selectors.forEach(el=>el.classList.add(classDark));
        $themeBtn.textContent=sol;
        ls.setItem("theme","dark");
    }

    /*d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent===luna){
                $selectors.forEach(el=>el.classList.add(classDark));
                $themeBtn.textContent=sol;
            }else{
                $selectors.forEach(el=>el.classList.remove(classDark));
                $themeBtn.textContent=luna;
            }
        }
    });*/

    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent===luna){
                darkMode();
            }else{
                lightMode();
            }
        }
    });





    //tenemos cardado ya un DOMContentLoaded, por lo cual no podemos ejecutarlo dos veces dentro de un mismo ambito
    // ó dentro de unos mismo corchetes.
    d.addEventListener("DOMContentLoaded",(e)=>{

        /*getItem  metodo para obtener un elemento de localStorage resive como parametros
        el nombre de la variable en este caso theme y el valor que contine */
        console.log(ls.getItem("theme"));
        if(ls.getItem("theme")===null)ls.setItem("theme","light");
        //con setItem asignamos una variable al localStorage setItem resive dos parametros 
        //el nombre de la variable y el valor que va a contener
        if(ls.getItem("theme")==="light")lightMode();
        if(ls.getItem("theme")==="dark")darkMode();
    })
}