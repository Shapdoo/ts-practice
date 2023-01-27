import { Card } from "../02-overriding/Card";
import { MonsterCard } from "./MonsterCard";
import { SpellCard } from "./SpellCard";
import { TrapCard } from "./TrapCard";

const trapCard = new TrapCard("Glory Dark Spell", "trap", 2);
const monster = new MonsterCard("700 army bloody man", "normal", 1200, 2000, 4);
const spellCard = new SpellCard("healing", "spell", 5);

// El polimorfismo es la capacidad de un objeto de tomar múltiples formas y comportarse de manera diferente en consecuencia. En el contexto de la programación orientada a objetos, el polimorfismo se refiere a la capacidad de una clase o interfaz para tener múltiples implementaciones de un mismo método o atributo.

//En este caso nosotros tenemos un array de Cards, Cards es una clase padre que se implementa a diferentes clases que son diferentes tipos de cardas, monstruos, cartas trampa, o cartas mágicas, en el caso de cartas de monstruo Card tiene un metodo llamado useUltimate el cual es heredado al hijo que es MosterCard, que hace uso del metodo de useUltimate a su propia manera. 

//Tambien un ejemplo de polimorfismo en una interfaz es cuando nosotros usamos la interfaz Spell para heredarla a la interfaz Trap, esta interfaz ahora dispone de todas las caracteristicas de Spell, que se deben de cumplir en la clase TrapCard, entre ellas los metodos de doAction, cuyo uso del mismo debe tener la misma firma que la interfaz Spell pero implementado de otra forma ocasionando un comportamiento diferente.


//Aqui como todos son Cards en si corresponde el tipado y typescript nos deja hacer esto.
const arrayOfCards: Card[] = [trapCard, monster, spellCard]; 
