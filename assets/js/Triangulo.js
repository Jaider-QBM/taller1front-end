let boton = document.getElementById("btnSaber")

boton.onclick = function saber(o){
    o.preventDefault()

    let lado1 = parseInt(document.getElementById("lado1").value)
    let lado2 = parseInt(document.getElementById("lado2").value)
    let lado3 = parseInt(document.getElementById("lado3").value)

    if(lado1 === lado2 && lado2 === lado3 && lado1 === lado3 ){
        alert(`Los valores ingresados son iguales entonces el triangulo es EQUILATERO, valores ingresados: ${lado1} ${lado2} ${lado3} `)
    }
    else if (lado1 !== lado2 && lado2 == lado3 || lado1 === lado3 && lado2 !== lado3 || lado1 === lado2 && lado2 !== lado3 ){
        alert(`los valores ingresados son: ${lado1} ${lado2} ${lado3} uno de ellos es diferente entonces el triangulo es ISÓSCELES  `)
    }
    else{
        alert(`los valores ingresados son difententes, valores: ${lado1} ${lado2} ${lado3} entonces el triangulo es ESCALENO `)
    }
    
}   
