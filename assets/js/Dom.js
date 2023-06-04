// Acceder al elemento de su id 

let contenido= document.getElementById("features")
console.log(contenido)

// Acceder al elemento de su selector 

let con1 = document.querySelector("p");
console.log(con1)

// Acceder al elemento por su selector id

let con2 = document.querySelector("#features")
console.log(con2)

// Acceder al elemento por su selector class

let con3 = document.querySelector(".features")
console.log(con3)


// Acceder a varios elementos por su selector 

let con4 = document.querySelectorAll("p");
console.log(con4)

// Acceder a uno de los elementos del nodelist

let con5 = document.querySelectorAll("p")[1];

// Recorrer nodelist

document.querySelectorAll("P").forEach ((el)=> console.log(el))


// Ejemplo de acceso a campo de formula

let numero1 = document.getElementById("num1") .vules
console.log(numero1)

// Acceder y cambiar al campo de un atributo

// Acceder a un atributo
document.querySelector("h1").getAttribute("h1")

// cambiar el valor 

document.querySelector("h1").setAttribute("h1", "Titulo Jaider ")

// Acceder al atributo style para cambiar estilos css interno 

let mys = document.querySelector("#features")
mys.style.setProperty("color", "#0000FF")

let mys2 = document.querySelector("#features")
mys.style.setProperty("background", "aqua")

// Acceder a un selector y cambiar su contenido(nodo de tecto)

// let camb = document.querySelector(".features")

// let text  =`
// <h1> titulo Jaider Quimbaya<h1>
// <p> un parrafo sencillo</p>
// <p> otro parrafo </p>
// `

// camb.innerHTML = text


let camb = document.querySelector("h1")
camb.textContent ="Este es el feature1"


let camb2 =  document.querySelector(".feature-2")

let text =`
<h1> Jaider Quimbaya </h1>
<p> Aprendiz Ficha 2687390  De ADSO</p>

`
camb2.innerHTML = text

// Crear contenido en el Dom

let img1 = document.createElement("img");
img1.src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
img1.style.setProperty("height", "1000px")
document.body.appendChild(img1)

let caja = document.createElement("div")
caja.innerHTML=`<img src="../assets/img/j.png"/>`

camb2.appendChild(caja)
camb2.remove(caja)