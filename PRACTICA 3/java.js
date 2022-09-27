
window.onload = inicio;
var conection = require ('../')

function inicio() {
    var boton = document.getElementById("boton");
    boton.onclick = buscar;
    document.getElementById("nombre").onkeydown = enter;
}

function buscar (){
    let  nombre = document.getElementById("nombre").value;
    document.getElementById("datos").innerHTML = `hola mi nombre es ${nombre}`;

    }