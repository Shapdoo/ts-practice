export interface Monster {
  level: number;
  atk: number;
  def: number;
  atack(): number;
  defend(): number;
  useSpell(): string;
}
