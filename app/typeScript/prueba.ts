function holaMundo(nam)
{
  return "Hola mundo soy " +nam;
}

let name = "jonny alex";

document.getElementById('container').innerHTML = holaMundo(name);
