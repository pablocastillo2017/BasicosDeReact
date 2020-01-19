import React from 'react';

// JSX = Version Mejorada de JS , si quieres mostrar dentro del return algo de JS
// se debe colocar entre {}

function Header({titulo}) {
    // JSX
    /*
    const edad = 18;

    let mensaje;

    if (edad >= 18) {
        mensaje = "Eres Mayor de Edad"
    }else{
        mensaje = "Eres Menor de Edad"
    }*/

    // Este return es lo que se ve en pantalla
    
    return(

        <h1 className ="encabezado">{titulo}</h1>
        // <h1 id ="encabezado" className ="encabezado">{mensaje}</h1>
    )
}

export default Header;
