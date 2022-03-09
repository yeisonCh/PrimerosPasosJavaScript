const d=document,
w= window,
n= navigator;

export default function networkStatus(){
    //existen dos eventos predefinidos para la deteccion de conexión, el metodo online y el metodo offline
    console.log("Imprimiendo  desde el documento deteccion_red.js")
    //w.addEventListener("online",e=> console.log(n.onLine)); son eventos de la ventana, evento online 
    //w.addEventListener("offline",e=>console.log(n.onLine)) son eventos de la ventana, evento online

    //creamos una función expresada 
    const isOnLine = () => {
        const $div= d.createElement("div");
        if (n.onLine){
            $div.textContent = "Conexion Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        
        }else{
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        //despues de dos segundo remover la div
        setTimeout(() => {
            d.body.removeChild($div)
        }, 4000);
    }

    w.addEventListener("online",(e)=> isOnLine());
    w.addEventListener("offline",(e)=>isOnLine())
}