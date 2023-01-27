export class Card {
  constructor(protected _name: string, protected _type: string) {}

  useUltimate(habilityName: string, powerUp: number) {
    const name = habilityName
    const ap = powerUp  
    return  `${name} upgrade the atack power by ${ap}`
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get type(): string {
    return this._type;
  }

  set type(type: string) {
    this._type = type;
  }
}

const card = new Card("New card", "darkness")
card.type = "light"
card.name = "Cat of happiness"
