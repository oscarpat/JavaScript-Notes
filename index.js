const employees = [
  {
    nombre: 'Oscar',
    apellido: 'Paternina',
    edad: 39,
    empresa: 'xy'
  },
  {
    nombre: 'Manuel',
    apellido: 'perez',
    edad: 35,
    empresa: 'srl'
  },
  {
    nombre: 'Ana',
    apellido: 'Gomez',
    edad: 32,
    empresa: 'we'
  }
  
]
//recorrido con for
/*for(let i = 0; i < employees.length; i++){
  console.log(employees[i]);
}*/

//recorido con forEach
/*employees.forEach(function(employees){
  console.log(employees)
})*/

//recorrido utilizando la funcion anonima
/*employees.forEach((employees) => {console.log(employees)})*/

const nombreCompleto = []

employees.forEach((employees) => {nombreCompleto.push(employees.nombre + ' ' + employees.apellido)})

console.log(nombreCompleto);