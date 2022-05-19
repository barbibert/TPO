
var boton = document.getElementById("volver")
var barra = document.getElementById("botonera")

window.onscroll = function (){
    var mov = document.documentElement.scrollTop

    if (mov > 180) {
        boton.style.display = "block"
        barra.style.position = "fixed"
        barra.style.top="0"
        
    }
    else{
        boton.style.display = "none"
        barra.style.position = "relative"
    }
    
}

var envio_form = document.getElementById("env_ok")
var a=1
var b=1
var formulario = document.getElementsByName('forms')[0]

envio_form.onclick = function(e){
    validarNombre(e)
    validarMail(e)
    validarForm(e)
}

var validarNombre = function(e){
    if(formulario.nombre.value == 0){
      alert('Completa el campo nombre');
      b=0
    }else{b=1}  };

var validarMail = function(e){
    if(formulario.mail.value == 0){
      alert('Completa el campo mail');
      a=0
    } else{a=1}  };

var validarForm = function(e){
    if(a+b == 2){
      alert('¡Su mensaje fue enviado correctamente!');
    }};