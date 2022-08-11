
window.onload = inicio;


function inicio() {
    document.querySelector(".contenedor").insertAdjacentHTML("beforeend", `   
    <input id="inp" type="text">
    <button id="bot"> Boton </button>
    <div id="contenido"> </div>`);

    const boton = document.getElementById("bot");
    boton.onclick=leer;
    var contenido = document.getElementById("contenido");
    
   
}
function leer() {
    let max = document.getElementById("inp").value;
    let input = document.getElementById("inp");
    if (max == "maxi"){
        contenido.innerHTML = `hola ${max}`;
    }else {
        contenido.innerHTML ="";
        input.style.background="blue";
    }
        
}
