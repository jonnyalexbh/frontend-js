class Car
{
  public color: string;
  public model: string;
  public speed: number;

  /*
  * constructor
  */
  constructor(model:any = null){
    this.color = "blanco";
    this.speed = 0;
    if(model == null){
      this.model = "BMW";
    }
    else{
      this.model = model;
    }
  }
  /*
  * get
  */
  public getColor(){
    return this.color;
  }

  public getModel(){
    return this.model;
  }

  public getSpeed():number{
    return this.speed;
  }
  /*
  * set
  */
  public setColor(color: string){
    this.color = color;
  }

  public setModel(model: string){
    this.model = model;
  }
  /*
  * accelerar
  */
  public speedUp(){
    this.speed++;
  }
  /*
  * frenar
  */
  public brake(){
    this.speed--;
  }

}

/*
* instanciar objeto uno
*/
var carOne = new Car("FORD");
carOne.setColor("verde");
carOne.speedUp();
carOne.speedUp();
carOne.speedUp();
console.log("El modelo del coche 1 es: "+carOne.getModel());
console.log("El color del coche 1 es: "+carOne.getColor());
console.log("La velocodad del coche 1 es: "+carOne.getSpeed());
carOne.brake();
console.log("La velocodad despues de frenar del coche 1 es: "+carOne.getSpeed());

/*
* instanciar objeto dos
*/
var carTwo = new Car();
carTwo.setColor("blanco");
console.log("El color del coche 2 es: "+carTwo.getColor());
