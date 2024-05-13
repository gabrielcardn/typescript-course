import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1> Company name: ${this.name} </h1>
      <h3> CatchPhrase: ${this.catchPhrase} </h3>
    </div>
    `;
  }
}
