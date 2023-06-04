let boton = document.getElementById("btnVerificar")

boton.onclick = function  verificar(e){
    e.preventDefault()

    let name = parseInt(document.getElementById("name").value)
    let lastname = parseInt (document.getElementById("lastname").value)
    let actividad = parseInt (document.getElementById("acti").value)


    if(name === 1 && lastname === 1 && actividad === 4 ){
        alert(`La respuesta es correcta`)
    }
    else if(name === 2 && lastname === 4 && actividad ===3){
        alert(`La respuesta es correcta`)
    }
    else if(name === 3 && lastname === 2 && actividad === 2 ){
        alert(`La respuesta es correcta`)
    }
    else if(name === 4 && lastname === 3 && actividad === 1 ){
        alert(`La respuesta es correcta`)
    }
    else{
        alert(`La respuesta es incorrecta.`)
    }

}
