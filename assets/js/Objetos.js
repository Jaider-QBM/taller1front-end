/*
const instructor={
  nombre:"Jaider",
  apellido:"Quimbaya",
  materi:"Javascript",

  imprimirInstructor(){
    console.log(`El nombre del instructor ${instructor.nombre}, el apellido del instructor es ${this.apellido}, la materia de dicta es ${instructor.materi} `)
  }
}

*/

// crear un array, dentro ese array guardar objetos 
/*
let instructores=[
  // objeto 1
  {
    name: "Jennifer",
    lasname:"Fajardo",
    signature:"Javascript",
  },

  // objeto 2 
  {
    name: "Tatiana ",
    lasname:"Cabrera",
    signature:"Java",
  }
]

/*
const instructor={
  nombre:"Jaider",
  apellido:"Quimbaya",
  materi:"Javascript",
}
*/

// array constraint 
/*
eleccion = 1;

while(eleccion==1){

  let instructor={

    nombre:prompt("Nombre al ingresar"),
    apellido:prompt("Apellido al ingresar"),
    asignatura:prompt("Materia") 
  }

  instructores.push(instructor)
  console.log(instructores)
  

  eleccion= parseInt(prompt("Quiere ingresar mas datos?"))
}
*/

// Ejercicio lista de modificaciones

let instructores=[
    // objeto 1
    {
      name: "Jennifer",
      lasname:"Fajardo",
      signature:"Javascript",
    },
  
    // objeto 2 
    {
      name: "Tatiana ",
      lasname:"Cabrera",
      signature:"Java",
    }
  ]
  
  op=1;
  
  while(op==1){
    
    let eleccion= parseInt(prompt("¿Elige una opcion? 1. Agregar un instructor al final lista 2. Ver un Instructor 3. Bsucar instructor 4. Modificar a un instructor 5. Borrar a un instructor 6. Orden listado A-Z "))
  
    switch(eleccion){
      case 1:
  
        let instructor={
  
          nombre:prompt("Nombre al ingresar"),
          apellido:prompt("Apellido al ingresar"),
          asignatura:prompt("Materia") 
        }
      
        instructores.push(instructor)
        console.log(instructores)
  
      break;
  
      case 2:
  
        alert(`Estos son los instructores estas ${instructores}`)
  
      break;
  
      case 3:
  
      break;
  
      case 4:
  
      break;
  
      case 5:
  
      break;
  
      case 6:
  
      break;
  
      default:
  
      break;
    }
  
    eleccion = parseInt(prompt("Quiere continuar con el menu 1. Si 2. No"))
  }