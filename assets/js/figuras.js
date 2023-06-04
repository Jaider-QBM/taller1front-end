/* CIRCULO */

/* PERIMETRO*/

let btn = document.getElementById("abrirModal")
let btn2 = document.getElementById("btnCalcular")
let ventanaModal=document.getElementById("ventanaModal")
let cerrarModal=document.querySelector(".cerrarModal")
let cerrar=document.querySelector(".cerModal")

btn2.onclick  = function calcular(e){
    e.preventDefault()
    let dia = document.getElementById("dia").value
    let pi = 3.1416;
    let resultado = parseFloat(pi) * parseInt(dia);

    alert(`el diametro que eligio fue: ${dia} y el resultado es ${resultado}`)
}


btn.addEventListener("click",()=>{
    ventanaModal.style.display="block";
})

cerrarModal.addEventListener("click",()=>{
    ventanaModal.style.display="none";
})

cerrar.addEventListener("click",()=>{
    ventanaModal.style.display="none";
})

/* AREA */

let ventana = document.getElementById("ventanaModal1")
let btn3 = document.getElementById("abrir")
let btn4 = document.getElementById("btnCalcular1")
let cerrar1=document.querySelector(".cerModal1")
let cerrarModal1 =document.querySelector(".cerrarModal1")

btn4.onclick  = function calcular(e){
    e.preventDefault()
    let radio = document.getElementById("rad").value
    let pi = 3.1416;
    let resultado = parseFloat(pi) * (parseInt(radio) * parseInt(radio) );

    alert(`el radio que eligio fue: ${radio} y el resultado es ${resultado}`)
}

btn3.addEventListener("click",()=>{
    ventana.style.display="block";
})

cerrarModal1.addEventListener("click",()=>{
    ventana.style.display="none";
})

cerrar1.addEventListener("click",()=>{
    ventana.style.display="none";
})

/* TRIANGULO*/

/*  Perimetro */ 

let ventana1 = document. getElementById("ventanaModal2")
let btn5 = document.getElementById("abrirModal2")
let btn6 = document.getElementById("btnCalcular2")
let cerrar2 = document.getElementById("cerModal2")

btn6.onclick = function calcular (e){
    e.preventDefault()

    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value

    let suma = parseInt(num1) + parseInt(num2) + parseInt(num3)

    alert(`la suma de sus tres lados es: ${suma}`)
}

btn5.addEventListener("click",()=>{
    ventana1.style.display="block";
})

cerrar2.addEventListener("click",()=>{
    ventana1.style.display="none";
})

/* AREA */  
let ventana2 = document. getElementById("ventanaModal3")
let btn7 = document.getElementById("abrirModal3")
let btn8 = document.getElementById("btnCalcular3")
let cerModal3 = document.getElementById(".cerrarModal3")
let cerrar3 = document.getElementById("cerModal3")

btn8.onclick = function calcular (e){
    e.preventDefault()

    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let suma = parseInt(number1) * parseInt(number2)
    let division = suma/2

    alert(`la suma es: ${suma}, dividido por en dos eso nos da: ${division} ` )
}

btn7.addEventListener("click",()=>{
    ventana2.style.display="block";
})

cerrar3.addEventListener("click",()=>{
    ventana2.style.display="none";
})

/* RECTANGULO*/

/* PERIMETRO*/

let ventana3 = document. getElementById("ventanaModal4")
let btn9 = document.getElementById("abrirModal4")
let btn10 = document.getElementById("btnCalcular4")
let cerrar4 = document.getElementById("cerModal4")

btn10.onclick = function calcular (e){
    e.preventDefault()

    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    let suma = parseInt(numero1) + parseInt(numero2)

    alert(`la suma de su altura mas la base: ${suma}`)
}

btn9.addEventListener("click",()=>{
    ventana3.style.display="block";
})

cerrar4.addEventListener("click",()=>{
    ventana3.style.display="none";
})

/* AREA */

let ventana4 = document. getElementById("ventanaModal5")
let btn11 = document.getElementById("abrirModal5")
let btn12 = document.getElementById("btnCalcular5")
let cerrar5 = document.getElementById("cerModal5")

btn12.onclick = function calcular (e){
    e.preventDefault()

    let numero3 = document.getElementById("number3").value
    let numero4 = document.getElementById("number4").value

    let multi = parseInt(numero3) * parseInt(numero4)

    alert(`la suma de su altura mas la base: ${multi}`)
}

btn11.addEventListener("click",()=>{
    ventana4.style.display="block";
})

cerrar5.addEventListener("click",()=>{
    ventana4.style.display="none";
})


/* Cuadrado */

/* PERIMETRO*/

let ventana5 = document. getElementById("ventanaModal6")
let btn13 = document.getElementById("abrirModal6")
let btn14 = document.getElementById("btnCalcular6")
let cerrar6 = document.getElementById("cerModal6")

btn14.onclick = function calcular (e){
    e.preventDefault()

    let number = document.getElementById("number").value

    let suma = parseInt(number) + parseInt(number) + parseInt(number) + parseInt(number)

    alert(`la suma de su altura mas la base: ${suma}`)
}

btn13.addEventListener("click",()=>{
    ventana5.style.display="block";
})

cerrar6.addEventListener("click",()=>{
    ventana5.style.display="none";
})

/* AREA */


let ventana6 = document. getElementById("ventanaModal7")
let btn15 = document.getElementById("abrirModal7")
let btn16 = document.getElementById("btnCalcular7")
let cerrar7 = document.getElementById("cerModal7")

btn16.onclick = function calcular (e){
    e.preventDefault()

    let number6 = document.getElementById("number6").value
    let multi = parseInt(number6) * parseInt(number6) 

    alert(`la suma de su altura mas la base: ${multi}`)
}

btn15.addEventListener("click",()=>{
    ventana6.style.display="block";
})

cerrar7.addEventListener("click",()=>{
    ventana6.style.display="none";
})

// cerrarModal.addEventListener("click",()=>{
//     ventanaModal.style.display="none";
// })

// ventanaModal.addEventListener("click",()=>{
//     ventanaModal.style.display="none"
// })  

