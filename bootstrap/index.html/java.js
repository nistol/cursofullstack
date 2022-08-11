window.onload = inicio;

function inicio () {
    const boton = document.getElementById ("valido");
    boton.onclick=leer;
    
} function leer () {
    let ok = document.getElementById ("vali").value
    if ( ok == "maxi"){
    document.getElementById("all").style.visibility="visible";
    document.getElementById("registro").style.visibility="hidden";
    document.getElementById("registro").style.position="absolute";
    } 

    else {
        document.getElementById("bod").innerHTML+="te equivocaste"
    }
}