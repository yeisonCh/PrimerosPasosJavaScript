const d=document;
export default function countdown(id,limitDate,finalMassage){
    const $countdown =d.getElementById(id),
    coutdownDate=new Date(limitDate).getTime();

    let coutdownTempo=setInterval(()=>{
        let now= new Date().getTime(),//para obtener la fecha y hora actual

        /*limitTime es igual al tiempo que pasamos como parametro menos
        el tiempo actaul tomando dias, horas, minutos, segundos*/
        limitTime=coutdownDate - now, 
        days = Math.floor(limitTime/(1000*60*60*24)) , //1000 milisegundos
        hours= ("0"+ Math.floor(limitTime%(1000*60*60*24)/(1000*60*60))).slice(-2), 
        //obtenemos el reciduo de limitTime con %
        //concatenamos el cero para cuando nos muestre horas de un solo digito
        //y recortamos el estrin o la concatenación con slice (-2) para que se nos muestro solo dos caracteres siempre
        minutes=("0"+ Math.floor(limitTime%(1000*60*60*24)/(1000*60))).slice(-2),
        seconds=("0"+ Math.floor(limitTime%(1000*60)/1000)).slice(-2);

        //mensaje 
        $countdown.innerHTML =`<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
       // console.log(coutdownDate, now, limitTime)

        if(limitTime<0){
            clearInterval(coutdownTempo);
            $countdown.innerHTML =`<h3> ${finalMassage} </h3>`;
        //    console.log(coutdownDate, now, limitTime);
        }
    },1000)

}