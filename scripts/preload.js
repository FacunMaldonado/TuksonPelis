import {condiciones} from '../scripts/condiciones.js'



let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },3700)

    condiciones();