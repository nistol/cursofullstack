

window.onload = inicio;


function inicio() {
    var boton = document.getElementById("boton");
    boton.onclick = buscar;
    document.getElementById("nombre").onkeydown = enter;
}

function buscar (){
    let  nombre = document.getElementById("nombre").value;
    document.getElementById("datos").innerHTML = `hola mi nombre es ${nombre}`;

    /* var conection = require ('./mysql') */
    
    /* var boton = document.getElementById("boton");
    boton.onclick = buscar;
    document.getElementById("nombre").onkeydown = enter;
    
}
function enter(i) {
    let letra = i.key;
    if (letra == "Enter") {
        buscar();
    }
}
 function buscar (){
    let  nombre = document.getElementById("nombre").value;
    document.getElementById("datos").innerHTML = `hola mi nombre es ${nombre}`;
    /* let dni = document.getElementById("nombre").value */
    /* conection.query(`SELECT * from personas where DNI like "26951023"`).then (function (err, datos) {
        if (err) throw err
        document.getElementById("datos").innerHTML = datos;
       
    }) 
 } 
/* for (e = 0; e <= personas.length; e++) {

    if (persona == personas[e].dni) {
        document.getElementById("datos").innerHTML = `DNI: ${personas[e].dni} <br> Nombre: ${personas[e].nombre} <br> telefono: ${personas[e].telefono} <br> Mail: ${personas[e].mail} `;
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();
        break;
    } else {
        document.getElementById("datos").innerHTML = ` la persona no existe `;
    }*/

} 

