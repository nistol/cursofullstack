window.onload=inicio;
let veces = 0;

function inicio(){
    fase0();
   var boton = document.getElementById("boton");
   boton.onclick=cambiar;
   
   
}
function fase0 (){
    document.getElementById("boton").innerHTML=`<section>
    <div class="precio"></div>
    <div class="imagen">
        <img id="imagen"src="" alt="">
    </div>
</section>
<div class="descripcion"></div>`;
document.querySelector(".descripcion").innerHTML="Cafe Colombiano";
    document.querySelector(".precio").innerHTML="3$";
    document.getElementById("imagen").src="https://www.html6.es/img/cafe1.png";
}

function cambiar (){
    veces++;
    if (veces == 1){
     document.getElementById("imagen").src="https://www.html6.es/img/cafe2.png";
    document.querySelector(".descripcion").innerHTML="Cafe para llevar";
    document.querySelector(".precio").innerHTML="5$";
    boton.classList.add("boton2");
    } 
    else 
        if (veces == 2){
            
            document.querySelector(".descripcion").innerHTML="Cafe + muffin " ;
            document.querySelector("section").insertAdjacentHTML("beforeend",`<div class="imagen2"><img src="https://www.html6.es/img/pasta.png"></div>`);
            document.querySelector(".precio").innerHTML="10$";
            boton.classList.add("bot3");
        }
    else {
        boton.classList.remove("bot3");
        boton.classList.remove("boton2");
        fase0 ();
        veces=0;
    } 
    
    
}