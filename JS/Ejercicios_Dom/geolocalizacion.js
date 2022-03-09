const d= document, 
n=navigator;


export default function getGeolocation(id){
    const $id = d.getElementById(id),
    
    options ={
        enableHighAccuracy:true,  //para que tome la mejor lectura posible por defecto esta en false
        timeout:5000, //tiempo de espera al obtener la informacion tiempo expresado en milisegundos
        maximumAge:0   //para que no guarde en cache las lecturas
    };

    //función para el caso de tener exito en la geolocalización 
    const success = (position) => {
        //en una variable cords guardamos del objeto posotion guardamos las cordenadas
        let coords=position.coords; //creamos una variable para guardar las cordenadas del objeto positions 
        console.log(position);

        $id.innerHTML=`
        <p>Tu posición actual es: </p>
        <ul>
            <li><b>Latitud: <b>${coords.latitude}</b></li> 
            <li><b>Longitud: <b>${coords.longitude}</b></li>
            <li><b>Precisión: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@ ${coords.latitude}, ${coords.longitude}, 1z" target="blank" rel="noopener"> Ver en Google Maps</a>;
        `;
        //coords.latitude es para imprimir lo que tenemos en la variable coords punto más el atributo que necesitemos en este caso latitude
        //
    };

    //función para el caso de tener un error en la geolocalización 
    const error = (err)=>{
        $id.innerHTML = `<P><mark>Error  ${err.code}: ${err.message}</mark></p>`;
        console.log(err);
        console.log(`Error  ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success,error, options)//para optener la posicón atual
}