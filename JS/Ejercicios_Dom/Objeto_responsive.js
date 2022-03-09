const d=document,
w=window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent){
    //creamos una variable la cual va a guardar la mediaQuery de css que pasamos a la variable mq
    //y utilisamos el metodo matchMedia del objeto de windows
    let breakpoint=w.matchMedia(mq);
    //console.log(id,mq);
    //a la función matchMedia podemos asignarle un addlistener para revisar la mediaQery 
    const responsive = (e)=>{
        //console.log("entamos en la constante responsive")
        //e.matches nos devuelve un valor bolean pra evaluar matchMedia si el valor del tamaño de pantalla cumple o no cumple
        if(e.matches){
            //lo primero que hacemos es capturar el elemento por su id (es lo que viene en la variable id)
            //evalua si la anchura de la pantalla cumple
            d.getElementById(id).innerHTML=desktopContent;
        }else{
            d.getElementById(id).innerHTML=mobileContent;
        }
        console.log("MQ",e.matches);
    }
    breakpoint.addListener(responsive);
}