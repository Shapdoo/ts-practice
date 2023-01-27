export class Car {
  public year: number;
  public color: string;
  public model: string;
  private _fuel!: number;

  constructor(year: number, color: string, fuel: number, model: string) {
    this.year = year;
    this.color = color;
    this._fuel = fuel;
    this.model = model
  }

  start(): void {

  }


  accelerate(): void {
    this._fuel--
  }


  stop(): void {
    
  }

  get fuel(): number {
    return this._fuel
  }
}
