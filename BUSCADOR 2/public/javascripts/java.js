window.onload = inicio;
var pool =require('./modelos/bd');


function inicio() {
    var boton = document.getElementById("boton");
    boton.onclick = buscar;
}

function buscar (){
    let  nombre = document.getElementById("dni").value;
    pool.query(`select * from empleados where apellido = ${nobmre}`).then(function (resultados){
        console.log (resultados);
      });}