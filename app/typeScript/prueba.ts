function holaMundo(val)
{
  return "Hola mundo soy " +val;
}

let nombre = "jonny alex";
var result = holaMundo(nombre);

var etiqueta = document.getElementById("container");
etiqueta.innerHTML = result;

// variables and types

let city:string = "Medellin";
let years:number = 100;
let country:boolean = false;
let equipment: Array<string> = ["Nacional", "Medellin", "Envigado"];

etiqueta.innerHTML = city+ " - "+years;
