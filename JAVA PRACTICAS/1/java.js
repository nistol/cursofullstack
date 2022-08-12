
window.onload = inicio;
var sumacorrecta;

function inicio() {
    preguntar();
    let contenido = document.getElementById("contenido");
    let bot = document.getElementById("boton");
    bot.onclick = chequear;
    document.getElementById("respuesta").onkeydown=teclado;
}

function teclado (e){
   let tecla=e.key;
   if (tecla == "Enter") { 
     chequear();
   }

}
function preguntar () {
     let a= Math.floor(Math.random() * 10);
     let b= Math.floor(Math.random() * 10);
     sumacorrecta=a+b;
     document.querySelectorAll(".random")[0].value=a;
     document.querySelectorAll(".random")[1].value=b;
     document.getElementById("respuesta").value="";
     document.getElementById("respuesta").focus ();
}
function chequear() {
     let respuesta = document.getElementById("respuesta").value;
     
     if (respuesta == sumacorrecta) {
        
        contenido.innerHTML += '<div class="verde">CORRECTO <br></div>';

    } else {
        contenido.innerHTML += ` <div class="rojo">INCORRECTO , EL RESULTADO ES ${sumacorrecta} <br></div>`;
    } 
    preguntar();
} 