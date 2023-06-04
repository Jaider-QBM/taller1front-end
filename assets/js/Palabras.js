let boton = document.getElementById("btnSaber")

boton.onclick = function saber(i){
    i.preventDefault()
    let pala1 = document.getElementById("pala1").value
    let op = parseInt(document.getElementById("op").value)

    switch(op){
        case 1:
            alert(`La longitud de la palabra es ${pala1.length}`)
        break;

        case 2:
            alert(`El nombre que escribiste fue ${pala1}, la convertimos en mayuscula el resultado fue ${pala1.toUpperCase()}`)
        break;

        case 3:
            alert(`El nombre que escribiste fue ${pala1}, la convertimos en miniscula el resultado fue ${pala1.toLowerCase()} `)
        break;

        case 4:
            alert(`El nombre que escribiste fue ${pala1}, La primera letra que tiene la palabra ${pala1.charAt()} `)
        break;
    }

}   