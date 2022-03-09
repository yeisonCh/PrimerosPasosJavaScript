const d= document;
let x=0,
    y=0;

export function moveBall(e,ball,stage){
    /*los parametros e de evento ball de de la bolita o la div
    y el selector de del esenario en este caso de article*/
    //creamos variables para la div y el article
    const $ball= d.querySelector(ball),
    $stage=d.querySelector(stage),
    $limitsBall=$ball.getBoundingClientRect(),
    $limitsStage=$stage.getBoundingClientRect();
    /*getBoundingClientRect() este metodo nos devuelve las cordenadas de un objeto 
    que tan cerca se encuentra del objeto más sercano con respecto a left, height, top */
    console.log($limitsBall,$limitsStage);
    console.log(e.keyCode);
    //console.log(e.key);

    //const move=(direccion)=>{ }
    
    //usamos un switch case para evaluar que tecla estamos oprimiendo
    switch (e.keyCode) {
            case 37://izquierda
            
           if($limitsBall.left>$limitsStage.left){
            x--; //si el lef de la pelota es mayor que el lef del ecesanrio nos permitira moverla
            e.preventDefault(); // para evitar que el scroll o barra de desplazamiento se mueva con el teclado
           } 
            
            break;
            case 38://arriba
            
            if($limitsBall.top > $limitsStage.top){
                y--;
                e.preventDefault();
            }
           
            break;
            case 39://derecha
            
            if($limitsBall.right < $limitsStage.right){
                e.preventDefault();
                x++;
            }
            break;
            case 40: //abajo
            
            if($limitsBall.bottom < $limitsStage.bottom){
                y++;
                e.preventDefault();
            }
                       
            break;
        default:
            break;
    }
 //propiedad css transform + la función translate que nos recibe dos parametros x y Y
        //estos dos parametros los controlamos con variables
        $ball.style.transform=`translate(${x*10}px, ${y*10}px)`; 
        //el 10 o factor 10 nos da la velocidad de translación
}

export function shortcuts (e){
    //console.log(e);
    //console.log(e.type);
    //console.log(e.key);
    //console.log(e.keyCode);//numero o codigo que representa una letra del teclado

    if(e.key==="a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if(e.key==="c" && e.altKey){
        confirm("Haz lanzado una confirmación con el teclado");
    }

    if(e.key==="p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
}