/* Modifiers methods
public: is default -> can be called any where, any time
private: can be only called by other methos in THIS class
protected: can be called only by other methos in THIS calss, or
by other methods in child classes

*/
class Vehicle {
  //    public drive(): void {
  //     console.log("drive function!");
  //   }

  //   public honk(): void {
  //     console.log("honk function");
  //   }
  protected honk(): void {
    console.log("honk function");
  }

  //   color: string = "red"; // initial value
  color: string;
  // constructor with initial value
  constructor(color: string = "red") {
    this.color = color;
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
    this.wheels = wheels;
  }
  private drive(): void {
    console.log("car override drive function!");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");

car.startDrivingProcess();
console.log(car.color);
// car.honk(); cant call is protected
