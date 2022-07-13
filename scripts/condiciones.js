const condiciones =  () => {
    let  terminos = document.getElementById('terminos');
    let  box = document.querySelector('.condiciones');
    let ok = false;
    
    terminos.addEventListener('click',function(){
        ok = true;
        localStorage.setItem('terminos', ok);
        box.classList.add('boxCondiciones_active')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Terminos y condiciones ACEPTADAS',
          showConfirmButton: false,
          timer: 1500,
        })
    })
  if (localStorage.getItem('terminos') == 'true'){
    box.style.display = 'none'
  }
} 


export {condiciones}