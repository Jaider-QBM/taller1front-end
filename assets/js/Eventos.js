window.addEventListener("load", function(){
    // eventos para botones
    //evento click
    document.getElementById("btnEnvio").addEventListener("click", function(){
        document.getElementById("mensaje").innerHTML= "el genero que ha seleccionado ha sido hombre";
    })
     // evento doble click
    document.getElementById("btnDoble").addEventListener("dblclick", function(){
        document.getElementById("mensaje").innerHTML= "Hello word!";
    })
    // maouse over si se pasa encima el mouse
    document.getElementById("btnMause").addEventListener("mouseover", function(){
        document.getElementById("mensaje").innerHTML= "Hola profe";
    })
    //mouseout
    document.getElementById("btnMouse").addEventListener("mouseout", function(){
        document.getElementById("mensaje").innerHTML= "Hola profesora";
    })
     //eventos para caja de texto
    
    // keyup
    document.getElementById("caja").addEventListener("keyup", function(){
        document.getElementById("mensaje").innerHTML= "Hello word";
    })
     //focus
    document.getElementById("cajaOne").addEventListener("focus", function(){
        document.getElementById("mensaje").innerHTML= "Jaider Quimbaya";
    })
     //blur al seleccionar una caja de texto
    document.getElementById("cajaTwo").addEventListener("blur", function(){
        document.getElementById("mensaje").innerHTML= "Evento blur";
    })
     //listas desplegables
    
     //change cada vez que hay un cambio
     document.getElementById("op").addEventListener("change", function(){
        document.getElementById("mensaje").innerHTML= "Este fue su eleccion";
    })
   
});