import { Card } from "./Card";
import { Monster } from "./interfaces";

class DragonOfSevenSeas extends Card implements Monster {

  public spell = {
    name: "water flow",
    effect: this.def + 1500
  }

  constructor(public atk: number, public def: number, public level: number) {
    super("Dragon of Seven Seas", "water");
  }

  //Sobreescritura de metodos, el metodo del hijo tiene que tener la misma firma que el metodo del padre
  //Con misma firma quiero decir que tiene que tener, los mismos parametros (nombre y tipo de dato) y mismo valor de retorno
  //Asi tambien como mismo nombre.

  useUltimate(habilityName: string, powerUp: number){
    const atackPower = this.atk * powerUp
    return `${super.useUltimate(habilityName, powerUp)}, damage up to ${atackPower}`
  }

  atack(): number {
    alert(`${super.name} atack!`)
    return this.atk
  }

  defend(): number {
    alert(`${super.name} defend!`)
    return this.def
  }

  useSpell(){
    return `${super.name} use ${this.spell.name} defensive stats up to ${this.spell.effect}`
  }
}

const ultimate = "Water shock"
const dragon7seas = new DragonOfSevenSeas(1200, 800, 3)
const useUltimate = dragon7seas.useUltimate(ultimate, 30)

console.log(useUltimate)