let btn = document.getElementById("btnCalcular")

btn.onclick = function calcular(e){
  e.preventDefault()
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value
  let op = parseInt(document.getElementById("op").value) 

  // console.log(`El numero 1 es ${num1} el numero 2 es ${num2} y la op es ${op}`)
  switch(op){
    case 1:
      let suma = parseInt(num1) + parseInt (num2)
      alert(`La suma entre ${num1} y ${num2} es ${suma}`)
    break;

    case 2:
      let resta = parseInt(num1) - parseInt(num2)
      
      let res = document.querySelector(".resultado")
      res.innerHTML = `<p> la resta entre ${num1} y ${num2} es ${resta} `
    break;

    case 3:
      let multiplicacion = parseInt(num1) * parseInt(num2)
      alert(`La resta entre ${num1} y ${num2} es ${multiplicacion}`)
    break;

    case 4:
      let division = parseInt(num1) / parseInt(num2)
      alert(`La resta entre ${num1} y ${num2} es ${division}`)
    break;
  }
}