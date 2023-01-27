import { Card } from "../02-overriding/Card";
import { Spell } from "./SpellCard";

interface Trap extends Spell {
  sideEffect(): string
}

export class TrapCard extends Card implements Trap {
  public state: boolean = false;

  constructor(_name: string, _type: string, public manaCost: number) {
    super(_name, _type);
  }

  doAction(mana: number): void {
    this.state = true
    const manaUpdated = mana - this.manaCost
  }

  sideEffect(): string {

    return ""
  }
}
