import { Card } from "../02-overriding/Card";
import { Monster } from "../02-overriding/interfaces";

export class MonsterCard extends Card implements Monster {

  constructor(
    _name: string,
    _type: string,
    public atk: number,
    public def: number,
    public level: number
  ) {
    super(_name, _type);
  }

  atack(): number {
    return 0;
  }

  defend(): number {
    return 0;
  }

  useSpell(): string {
    return "";
  }

  useUltimate(habilityName: string, powerUp: number): string {
    return "";
  }
}
