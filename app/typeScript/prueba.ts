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

var a = 7;
var b = 2;

if(a === 7){
  let a = 4;
  var b = 1;
  console.log("DENTRO DEL IF: "+a+ " - "+b);
}

console.log("FUERA DEL IF: "+a+ " - "+b);

// functions and typing
function returnsNumber(num:number):string{
  return "Numero devuelto "+num;
}

function returnsString(texto:string):number{
  if(texto=="hola"){
    var num = 66;
  }
  else{
    var num = 90;
  }
  return num;
}

alert(returnsNumber(34));
alert(returnsString("hola"));
