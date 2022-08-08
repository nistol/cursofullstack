direnerocofla = prompt ("cuanto dinero tienes?");


if (direnerocofla >= 1 && direnerocofla < 2 ){

    document.write (`Cofla comprate un helado de agua y tu vuelto son ${direnerocofla - 1}` );
}

else if (direnerocofla >= 2 &&  direnerocofla < 3){

    alert (`Cofla comprate un helado de crema y tu vuelto son ${direnerocofla - 2}` );
}

else if (direnerocofla >= 3){

    alert (`Cofla comprate un helado de oro  y tu vuelto son ${direnerocofla - 3}` );
}


else {
    alert ("no tenes dinero pobre");
}