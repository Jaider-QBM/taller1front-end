let boton = document.getElementById("btnCalcular")

boton.onclick = function calcular(u){
    u.preventDefault()
    let temp = document.getElementById("temp").value
    let op = parseInt(document.getElementById("op").value)
    let op2 = parseInt(document.getElementById("op2").value)

    if(op === 1 & op2 === 2){
        let fc = (temp -32)/1.8
        let decimal = fc.toFixed(2)
        alert(`Vas a convertir de Fahrenheit a Celsius, grados Fahrenheit es ${temp} el resultado en celsius es ${decimal}`)
    }
    else if(op === 1 & op2 === 3){
        let fk = ((temp -32)/1.8)+ 273.15
        let decimal = fk.toFixed(2)
        alert(`Vas a convertir de Fahrenheit a Kelvin, grados Fahrenheit es ${temp} el resultado en Kelvin es ${decimal}`)
    }
    else if (op === 2 & op2 === 1){
        let cf = (temp * 1.8) +32
        let decimal = cf.toFixed(2)
        alert(`Vas a convertir de Celsius a Fahrenheit, grados Celsius es ${temp} el resultado en Fahrenheit es ${decimal}`)
    }
    else if (op === 2 & op2 === 3){
        let cek = temp + 273.15
        alert(`Vas a convertir de Celsius a Kelvin, grados Celsius es ${temp} el resultado en Kelvin es ${cek}`)
    }
    else if (op === 3 & op2 === 1){
        let kf = ((temp -273.15)*1.8)+32
        let decimal = kf.toFixed(2)
        alert(`Vas a convertir de kelvin a Fahrenheit, grados kelvin es ${temp} el resultado en Celsius es ${decimal}`)
    }
    else if (op === 3 & op2 === 2){
        let kc = temp - 273.15
        let decimal = kc.toFixed(2)
        alert(`Vas a convertir de Kelvin a Celsius, grados Kelvin es ${temp} el resultado en Celsius es ${decimal}`)
    }
    else{
        alert(`Esta convirtiendo al misma Temperatura`)
    }
}