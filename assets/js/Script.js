console.log(" Hola desde afuera")

//Ejercicio 1
/*let numberOne = prompt("ingrese el primer numero")
let numberTwo = prompt("Ingrese el segundo numero")
let suma = parseInt(numberOne) + parseInt(numberTwo)
let nameStudents= "Jaider";
let age=19;
let state = true;
const IVA=19;

console.log(`mi nombre es ${nameStudents} y tengo ${age} años, el iva de mi edad es ${age*IVA/100}`)
alert(`el resultado es `+ suma)


document.write(`mi nombre es ${nameStudents} y tengo ${age} años, el iva de mi edad es ${age*IVA/100}`)*/


//Ejercicio 2
/*
let nameUsuario =prompt ("Como es tu nombre")
let numerotwo = 15;
let ageUsuario = prompt ("Cual es tu edad ")

let suma = parseInt(ageUsuario) + numerotwo

alert(`Tu nombre es ${nameUsuario} Tienes ${ageUsuario} años, en 15 tendras ${suma} ` )

*/

//Ejercicio 3
/*
let numberOne = prompt ("Ingrese el primer numero ")
let numberTwo = prompt("Ingrese el segundo numero ")

//Condicionales 
if (numberOne>numberTwo) {
   alert(`El numero mayor es ${numberOne}`)
} else if(numberOne==numberTwo){
  alert(`Los dos numeros son iguales`)
}else {
  console.log(`El numero mayor es ${numberTwo}`)
} 

// variacion condicionales dobles operadores temario

let numMayor = (numberOne>numberTwo) 
?"El numero mayor es el primero"://cuando se cumple
"El numero mayor es el segundo"//cuando ña condicion no se cumple 


console.log(numMayor)
*/

//Ejercicio 4


/*
let usuario = prompt(`Ingrese su usuario`)
let password = prompt(`Ingrese la contraseña`)

if (usuario==("jaider123") && password==("123456")) {
  alert(`Bienvenido a mi app`)
} else if(usuario==("jaider123")&& password!==("123456")){
  alert(`upps! parece que tus datos de acceso son incorrectos`)
} else if(usuario!==("jaider123")&& password==("123456")){
  alert (`Nombre de usuario invalido`)
}else{
  alert(`acceso denegado`)
}
*/

/* 
 let nameEstudiante
 let apellido
 let tipoDoc
 let numeroDoc
 let eleccionP = "1";


while(eleccionP == "1"){
  let op =prompt (`1 ingresar estudiante 
  2 ver estudainte 
  3 modificar estudiante`)
  switch(op){
    case "1":
      nameEstudiante = prompt(`Ingrese el nombre`)
      apellido = prompt (`Ingrese el apellido`)
      tipoDoc = prompt(`Cual es el tipo de documento`)
      numeroDoc = prompt (`Cual es el numero de documento`)
  
    break;
  
    case "2":
      let busc = prompt(`Cual estudiante quieres ver `)
  
      if (busc == nameEstudiante) {
        alert(`${nameEstudiante}+ ${apellido}+ ${tipoDoc}+ ${numeroDoc}`)
      } else {
        alert(`El estudiante no se encontro`)
      }
    
    break;
  
    case "3":
      let actualizar = prompt (`Cual es el dato que quieres actualizar 
      1 Nombre
      2 apellido
      3 tipo de documneto
      4 numero de documento`)
  
      if (actualizar=="1") {
        nameEstudiante = prompt(`ingrese el nombre a modificar`)
      } else if(actualizar=="2") {
        apellido == prompt(`ingrese el apellido a modificar`)
      }
      else if (actualizar=="3"){
        tipoDoc ==prompt (`Ingrese el tipo de documento a modificar`)
      }
      else if (actualizar=="4"){
        numeroDoc == prompt (`Ingrese el numero de documento a modificar`)
      }
  
    break;
  
    default:
      alert(`Opcion seleccionada no existe`)
  
    break;
  }

  eleccionP= prompt(`Quieres ser las opciones 1 si  2 no `)
} 

*/