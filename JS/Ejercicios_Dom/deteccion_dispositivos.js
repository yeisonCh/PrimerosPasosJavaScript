const d =document,
n= navigator,
ua=navigator.userAgent;
/* navigator es un objeto que nos muestra el estado y la identidad de usuario que nos visita 
 para este ejercicio usamos la propiedad userAgent*/
//userAgent nos devuelve una cadena de texto de la cual podemos recatar información
//acerca del dispositivo que nos esta visitando

export default function userDeviceInfo(id){
    //recibe como parametro el id para extraer la información que necesitamos
    
    const $id =d.getElementById(id), //$id hace referencia a la id de la div que tenemos en html y es donde vamos a imprimir la informacion que rescatamos
    //creamos tres objetos 
    isMobile={ //para guardar si el usuario nos visita desde sistema operativo de dispositivo mobil
        //creamos las siguientes validaciones. 
        //declaramos arrowFuntion
        android:()=>ua.match(/android/i),
        /*a la variable ua le pasamos el metodo match y como parametro pasamos una expresion regular
        lo que hace match es buscar si en la cadena de texto que devuelve ua esta la palabra android y la i es una vandera para discriminar mayusculas y minusculas
        */
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        //any esta declara en una funcion anonima, para que el contexto this haga referencia isMobile
        any:function(){
            return this.android()||this.ios()||this.windows();
        },
    },
    isDesktop={//para detectar si el usuario nos visita desde un SO de pc
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){ //any, no importa cuande los sistemas operativos esta usando
            return this.linux()||this.mac()||this.windows();
        },
    },
    isBrowser={//para guardar desde que navegador nos estan visitando.
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/ie/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return this.chrome()||
            this.safari()||
            this.firefox()||
            this.opera()||
            this.ie()||
            this.edge()
        },
    };
    /*console.log(ua);
    console.log(isMobile.any());*/
   // console.log(isBrowser.any());

    $id.innerHTML=`
    <ul>
     <li>User Agents: ${ua}</b></li>
     <li>Plataforma: ${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
     <li>Navegador: ${isBrowser.any()}</b></li>
    </ul>`;
    //contenido exclusivo

    if(isBrowser.chrome()){
        //vamos a mandar imprimir en html un contenido adicional, colocamas el signo más para que no nos borre lo que tenemos escrito
        $id.innerHTML+=`<p><mark>Este contenido solo se ve en chrome</mark></p>`
    }

    if(isBrowser.opera()){
        //vamos a mandar imprimir en html un contenido adicional, colocamas el signo más para que no nos borre lo que tenemos escrito
        $id.innerHTML+=`<p><mark>Este contenido solo se ve en OPERA</mark></p>`
    }

    //---redirecciones
   /* if(isMobile.android()){
        window.location.href="https://jonmircha.com";
    }*/
}