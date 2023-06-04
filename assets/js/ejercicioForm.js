
// 1. acceder al formuladiro
let form = document.getElementById("frmvalidacion")


let fe1 = document.querySelector(".campoDoc .feedback")
let fe2 = document.querySelector(".campoNombre .feedback")

// 2. Establecer las reglas de validacion 
const $number = /^[0-9]{1,15}/
const $textos = /^[A - Za -zñÑáÁ]{ 10 , 50}/

//3. Validacion antes de enviar el formulario

form.noDoc.addEventListener('input', (e)=>{
  e.preventDefault();

  console.log(e.target.value)

  if($number.test(e.target.value)){
    form.noDoc.setAttribute ("class", "success")
    fe1.style.setProperty("visibility", "hidden")
    fe1.style.setProperty("opacity", "0")
  }
  else{
    form.noDoc.setAttribute ("class", "error")
    fe1.textContent= "Solo puede digitar numericos y la longitud debe ser minimo de 1"
    fe1.style.setProperty("visibility", "visible")
    fe1.style.setProperty("opacity", "1")
  }
})

//4. Validacion de campos vacios

form.addEventListener("submit", (e) =>{
  e.preventDefault() // detener propagacion

  const $noDoc = form.noDoc.value;

  if($noDoc == null || $noDoc == 0){
    alert("Debe ingresar un numero de documento")
    form.noDoc.focus()
    form.noDoc.setAttribute("class", "error")
  }

  else {
    form.submit()// Reanudar el envio del formulario
    alert("Datos enviados")
  }
})