function holaMundo(val) {
    return "Hola mundo soy " + val;
}
var nombre = "jonny alex";
var result = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = result;
// variables and types
var city = "Medellin";
var years = 100;
var country = false;
var equipment = ["Nacional", "Medellin", "Envigado"];
etiqueta.innerHTML = city + " - " + years;
var a = 7;
var b = 2;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("DENTRO DEL IF: " + a_1 + " - " + b);
}
console.log("FUERA DEL IF: " + a + " - " + b);
