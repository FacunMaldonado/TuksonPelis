import {condiciones} from '../scripts/condiciones.js'

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: true,
    timer: 1500
})

/* Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
) */


let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },3700)

    condiciones();