// Crie uma classe generica que represente um herói de uma aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para o herói atacar
  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque indefinido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias de heróis
const mago = new Heroi("Gandalf", 100, "mago");
const guerreiro = new Heroi("Aragorn", 35, "guerreiro");
const monge = new Heroi("Bruce Lee", 32, "monge");
const ninja = new Heroi("Hanzo", 28, "ninja");

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
