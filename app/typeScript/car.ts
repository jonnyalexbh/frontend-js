class Car
{
  public color: string;
  public model: string;
  public speed: number = 0;

  /*
  * get
  */
  public getColor(){
    return this.color;
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
var carOne = new Car();
carOne.setColor("verde");
carOne.speedUp();
carOne.speedUp();
carOne.speedUp();
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
