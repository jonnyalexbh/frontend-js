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
