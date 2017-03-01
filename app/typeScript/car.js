/*
* class CarBase
*/
var Car = (function () {
    /*
    * constructor
    */
    function Car(model) {
        if (model === void 0) { model = null; }
        this.color = "blanco";
        this.speed = 0;
        if (model == null) {
            this.model = "BMW";
        }
        else {
            this.model = model;
        }
    }
    /*
    * get
    */
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getModel = function () {
        return this.model;
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
    Car.prototype.setModel = function (model) {
        this.model = model;
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
var carOne = new Car("FORD");
carOne.setColor("verde");
carOne.speedUp();
carOne.speedUp();
carOne.speedUp();
console.log("El modelo del coche 1 es: " + carOne.getModel());
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
