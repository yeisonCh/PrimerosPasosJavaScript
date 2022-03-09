const d= document;

export function digitaClock(clock,btnPlay, btnStop){
    let clcockTempo;

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            //si pulsamos el boton paly, necesitamos que se actualice un contador cada segundo 
            //para eso usamos un set interval
            //almacenamos en una variable el setInterval para que podamos manipularlo 
            clcockTempo= setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();//El metodo toLocateString me permite imprimir un reloj de forma sencilla
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`
            },1000);//1000 es el timpo que queremos que se actualice, en este caso es cada segundo

            e.target.disabled=true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clcockTempo); //esto con el fin de detener el relo que tenemos almacenado en la variable clockTempo
            d.querySelector(clock).innerHTML=null;
            d.querySelector(btnPlay).disabled=false;
        }
    })
}

export function alarm(sound, btnPlay,btnStop){
    let alarmTem;
    const $alarm=d.createElement("audio");
    $alarm.src=sound;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            alarmTem=setTimeout(()=>{
                $alarm.play();
            },1000);
            e.target.disabled=true;
        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmTem);
            $alarm.pause();//para para el sunido
            $alarm.currentTime=0; //para restaurar desde el iicio el sonido
            d.querySelector(btnPlay).disabled=false;
        }
    })
}