/*let nombre = "Pedro";
let apellido = "Jiménez";
let edad = 26;
let matricula = true;
let math = 10;
let chemistry = 10;
let tecnology = 10;

let average = (math + chemistry + tecnology) / 3;

console.log(average);

// Operadores de condicionales (comparación) < , > , == , != , <= , >= , ===
if(apellido == "Jiménez" || average >= 11 && edad > 25 ){
    matricula = true;
}
else{
    matricula = false;
}
console.log(matricula)
*/



document.getElementById("btnJsIfElse").addEventListener("click", () => {
    clearOutput();

    printTitle("Js Condicionales");

    let edad = document.getElementById("inpEdad").value;
    edad = Number(edad);
    let nota = document.getElementById("inpNota").value;
    nota = Number(nota);
    let rol = document.getElementById("inpRol").value;
    
    /*Mostrar en la consola web si el usuario es mayor de 18 y su nota es mayor de 5 y es alumno
       "Alumno aprobado"
     Si es alumno nota menor que 5 y mayor de 18 "Alumno supenso"
     Si es Admin, nota 12 la edad es 352178 "Bienvenido Super Usuario"
     Si es Profesor, nota media =>9, edad mayor de 30 "Bienvenido profesor"
     cualquier otra opción "Login incorrecto" 



    
})