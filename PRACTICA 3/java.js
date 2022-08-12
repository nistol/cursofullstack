
window.onload = inicio;
const NOMBRE = "maxi";
const PASSCORRECTA= "nistol";


function inicio() {
    const boton = document.getElementById("bot");
    boton.onclick = leer;
    var contenido = document.getElementById("contenido");


}
function leer() {
    let max = document.getElementById("inp").value;
    let pass= document.getElementById("pass").value;
    let input = document.getElementById("inp");
    let nombreM = max.toLowerCase();
    let nombreMi = max.substr(0, 1).toUpperCase() + max.substr(1).toLowerCase();
    if (nombreM == NOMBRE && pass == PASSCORRECTA ) {
        contenido.innerHTML = `hola ${nombreMi}`;
       location.href = "https://mnsitol.000webhostapp.com/";
    } else {
        contenido.innerHTML = "Usuario o contraseña incorrectos";
        input.value = "";
        input.focus();

    }
}
