import MonsterBuilder from "./builder/MonsterBuilder";

interface Monster {
  atack(): number;
  defend(): number;
}

interface Effect {
  name: string;
}

//Una clase abstracta es una clase que no esta implementada, es decir no podemos crear una instancia de la misma, pero que si podemos crear instancias de una clase que hereda de esta.

//Puede ser util para crear una super clase es decir para una clase padre, en este caso, carta.
//Una clase abstracta debe de tener un metodo abstracto y estos son requeridos en nuestras subclases
abstract class Card {
  protected nombre: string = "";
  protected type: string = "";
  protected desc: string = "";

  constructor(nombre: string, type: string, desc: string) {
    this.nombre = nombre;
    this.type = type;
    this.desc = desc;
  }

  abstract setEffect(): Effect;
}

export default class MonsterCard extends Card implements Monster {
  static buildMonster(): MonsterBuilder {
    return new MonsterBuilder();
  }

  constructor(
    protected nombre: string,
    protected type: string,
    protected desc: string,
    private _atk: number,
    private _def: number,
    private _lvl: number
  ) {
    super(nombre, type, desc);
  }

  setEffect(): Effect {
    return { name: "none effect." };
  }

  atack(): number {
    return 0;
  }

  defend(): number {
    return 0;
  }

  set atk(atk: number) {
    this._atk = atk;
  }

  get atk() {
    return this._atk;
  }

  set def(defense: number) {
    this._def = defense;
  }

  get def() {
    return this._def;
  }

  set lvl(level: number) {
    this._lvl = level;
  }

  get lvl() {
    return this._lvl;
  }
}

const Monster = MonsterCard.buildMonster();

const blueEyesWhiteDragon = Monster.setNombre("Blue Eyes White Dragon!")
  .setAtk(3000)
  .setDef(3000)
  .setDesc("A Powerfull monster!.")
  .setLvl(12)
  .setType("Light")
  .build();
