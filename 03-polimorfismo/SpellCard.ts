import { Card } from "../02-overriding/Card";

export interface Spell {
  manaCost: number;
  state: boolean;
  doAction(mana: number): void
}

export class SpellCard extends Card implements Spell {
  public state = false
  
  constructor(
    _name: string,
    _type: string,
    public manaCost: number,
  ) {
    super(_name, _type);
  }

  doAction(mana: number): void {
    this.state = true
    const updateMana = mana - this.manaCost
  }
}
