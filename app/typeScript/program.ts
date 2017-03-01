/*
* class program
*/
class Program {
  /*
  * attributes or properties
  */
  public name:string;
  public version:number;
  /*
  * get
  */
  public getName(){
    return this.name;
  }
  public getVersion(){
    return this.version;
  }
  /*
  * set
  */
  public setName(name:string){
    this.name = name;
  }
  public setVersion(version:number){
    this.version = version;
  }
}
/*
* class videoEditor
*/

class videoEditor extends Program {
  /*
  * attributes or properties
  */
  public timeLine:number;
  /*
  * get
  */
  public getTimeLine(){
    return this.timeLine;
  }
  /*
  * set
  */
  public setTimeLine(timeLine:number){
    this.timeLine = timeLine;
  }
  /*
  * get AllData
  */
  public getAllData():string{
    return this.getName()+" - "+ this.getVersion()+ " - "+this.getTimeLine();
  }
}
/*
* instantiate object
*/
var editor = new videoEditor();
editor.setName("Laravel");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());
/*
* practice example
*/
var programs = [];

function save(){
  var name = (<HTMLInputElement> document.getElementById("name")).value.toString();
  var program= new Program();
  program.setName(name);
  program.setVersion(10);
  programs.push(program);

  var list= "";

  for(var i=0; i < programs.length; i++){
    list = list +"<li>"+programs[i].getName()+"</li>";
  }

  var listado = <HTMLElement> document.getElementById("listado");
  listado.innerHTML = list;
  (<HTMLInputElement> document.getElementById("name")).value = "";
}

/*
* functions de flecha
*/

// setInterval(function(){
//   console.log("Hola sin flecha");
// },1000);

setInterval(() => {
  console.log("Hola con flecha");
},1000);

/*
* functions map
*/
var fruits = [
  'Manzana',
  'Naranja',
  'Platano',
  'Pera'
];

var recorrer = fruits.map(fruta => {
  console.log(fruta);
});
