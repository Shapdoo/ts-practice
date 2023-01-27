import { Car } from "./Car";

export class Ferrari extends Car {
  constructor(year: number, color: string, fuel: number, model: string) {
    super(year, color, fuel, model);
  }

  openSunRoof() {
    console.log(true);
  }
}
