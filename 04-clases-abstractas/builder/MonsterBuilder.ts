import MonsterCard from "../AbstractCard";

export default class MonsterBuilder {
  private nombre: string = "";
  private type: string = "";
  private desc: string = "";
  private atk: number = 0;
  private def: number = 0;
  private level: number = 0;

  setNombre(n: string) {
    this.nombre = n;
    return this;
  }

  setType(t: string) {
    this.type = t;
    return this;
  }

  setDesc(d: string) {
    this.desc = d;
    return this;
  }

  setAtk(a: number) {
    this.atk = a;
    return this;
  }

  setDef(e: number) {
    this.def = e;
    return this;
  }

  setLvl(lvl: number) {
    this.level = lvl;
    return this;
  }

  build(): MonsterCard {
    return new MonsterCard(
      this.nombre,
      this.type,
      this.desc,
      this.atk,
      this.def,
      this.level
    );
  }
}
