abstract class Base {
  abstract getNombre(): string;

  imprimirNombre() {
    console.log(`Mi nombre es ${this.getNombre()}`);
  }
}

abstract class Base1 extends Base {
    abstract model(): void

    setModel(): void{
        console.log("Model has been setted")
    }
}




// const miInstancia = new Base(); // <- esta línea generara un error pues
// no se puede instanciar una clase abstaracta

class Derivada extends Base1 {
    model(): void {
        
    }

    getNombre(): string {
        return "Piero"
    }
    
}

const derivada = new Derivada()

const arrayDeBases: Base[] = [derivada]


derivada.imprimirNombre()






