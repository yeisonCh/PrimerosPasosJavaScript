const d=document, n=navigator;

//creamos la función para detectar la camara y la llamamos 
//en nuestro documento index a la carga de la ventana
export default function webCam(id){
    //creamos una variable donde vamos a guaradar el id
    const $video=d.getElementById(id);
    //usamos el objeto mediaDevices con su metodo getUserMedia
    //console.log(n.mediaDevices.getUserMedia);

    //creamos una validación, para saber si esta fanción existe en el navegador que estamos consultando
    if(n.mediaDevices.getUserMedia){
        //getUserMedia, resive varios parametros, dentro de estos activar el video
        /*con video=true activar el audio audio=true  toda esta función es una promesa
        usamos un metodo then para capturar el strin de datos que nos devuelve la función 
        y usamos el metodo cath para caprurar los posibles errores que se generen*/
        n.mediaDevices.getUserMedia({video:true, audio:false})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject=stream; //esto lo tomaria como una foto, para que se vea un video activamos 
            $video.play();
        })
        .catch((error)=>{
            console.log(`Susedio el siguiente error: ${error}`),
            $video.insertAdjacentHTML("beforebegin",`<p><mark>Susedio el siguiente error: ${error}</mark></p>`)});
        
            
    }

}