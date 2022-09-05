window.onload=inicio;
    

function inicio (){
    
   var boton = document.getElementById("boton");
   boton.onclick=buscar;
   document.getElementById("nombre").onkeydown=enter;
}
    function enter (i){
        let letra = i.key;
        if (letra== "Enter"){
            buscar();
        }
    }
    function buscar (){
        const personas = [
    {
       dni:1111, nombre: "Juan Lopez",telefono:1526401525,mail: "juan@gmail.com",
    },
    {
        dni:2222,nombre: "Maxi Nistol ",telefono:1526301225,mail: "maxi@gmail.com",
    },
    {
        dni:3333, nombre: "Lorena Ruiz",telefono:1546201465,mail: "lore@gmail.com",
    },
    {
        dni:4444, nombre: "Pablo Ruiz",telefono:15462012345,mail: "pablo@gmail.com",
    },
 ] 
        let persona = document.getElementById("nombre").value.toLowerCase();
        
        for (e=0;e <= personas.length;e++){ 
            
            if (persona == personas[e].dni){
                document.getElementById("datos").innerHTML=`DNI: ${personas[e].dni} <br> Nombre: ${personas[e].nombre} <br> telefono: ${personas[e].telefono} <br> Mail: ${personas[e].mail} `;
                document.getElementById("nombre").value="";
                document.getElementById("nombre").focus();
                break;
            } else {
                document.getElementById("datos").innerHTML=` la persona no existe `;
            }
            
        } 
        
    }