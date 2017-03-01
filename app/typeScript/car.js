var Car = (function () {
    function Car() {
        this.speed = 0;
    }
    /*
    * get
    */
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    /*
    * set
    */
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    /*
    * accelerar
    */
    Car.prototype.speedUp = function () {
        this.speed++;
    };
    /*
    * frenar
    */
    Car.prototype.brake = function () {
        this.speed--;
    };
    return Car;
}());
/*
* instanciar objeto uno
*/
var carOne = new Car();
carOne.setColor("verde");
carOne.speedUp();
carOne.speedUp();
carOne.speedUp();
console.log("El color del coche 1 es: " + carOne.getColor());
console.log("La velocodad del coche 1 es: " + carOne.getSpeed());
carOne.brake();
console.log("La velocodad despues de frenar del coche 1 es: " + carOne.getSpeed());
/*
* instanciar objeto dos
*/
var carTwo = new Car();
carTwo.setColor("blanco");
console.log("El color del coche 2 es: " + carTwo.getColor());
