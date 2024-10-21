// Orientação a Objetos (OO) é um jeito de organizar e estruturar o código, pensando nos objetos que existem no mundo real. É uma forma de dividir o código em pedaços que representam coisas (objetos), com características (dados) e ações (comportamentos) que essas coisas podem realizar. Aqui estão os quatro conceitos principais de Orientação a Objetos, explicados de forma simples:

// 1. Objeto
// Um objeto é como uma coisa no mundo real que tem características (chamadas de propriedades) e ações (chamadas de métodos). Por exemplo, um carro pode ser um objeto. Ele tem:

// Propriedades: cor, modelo, ano.
// Métodos: acelerar, frear, buzinar.
// 2. Classe
// A classe é como um molde ou receita para criar objetos. Ela define o que todos os objetos desse tipo terão. Usando o exemplo do carro, a classe Carro seria o modelo geral, dizendo que todos os carros terão uma cor, um modelo e podem acelerar ou frear. A partir da classe, criamos objetos específicos, como um carro vermelho ou azul.

// Exemplo em pseudocódigo:

// javascript
// Copiar código
// class Carro {
//   constructor(cor, modelo) {
//     this.cor = cor;
//     this.modelo = modelo;
//   }

//   acelerar() {
//     console.log("O carro está acelerando!");
//   }
// }
// Aqui, Carro é uma classe, e podemos criar objetos diferentes a partir dela:

// // javascript
// // Copiar código
// let meuCarro = new Carro("vermelho", "sedan");
// let outroCarro = new Carro("azul", "SUV");
// 3. Herança
// Herança é quando uma classe "filha" herda as propriedades e métodos de uma classe "pai". Isso evita a repetição de código. Por exemplo, se tivermos uma classe Veiculo com métodos comuns como acelerar e frear, podemos criar uma classe Moto que herda essas ações de Veiculo sem precisar reescrever tudo.

// javascript
// Copiar código
// class Veiculo {
//   acelerar() {
//     console.log("O veículo está acelerando!");
//   }
// }

// class Moto extends Veiculo {
//   empinar() {
//     console.log("A moto está empinando!");
//   }
// }
// 4. Encapsulamento
// Encapsulamento é a ideia de "esconder" os detalhes internos de como o objeto funciona e deixar acessíveis apenas o que é necessário. Isso significa proteger os dados de serem alterados de maneira inesperada. Por exemplo, você pode não querer que o usuário mude diretamente o número de portas de um carro, mas pode permitir que ele saiba quantas portas ele tem.

// 5. Polimorfismo
// Polimorfismo significa que objetos de diferentes classes podem ser tratados de forma semelhante. Por exemplo, tanto um Carro quanto uma Moto podem herdar de Veiculo e responder ao método acelerar(), mas cada um pode acelerar de uma maneira diferente (carro acelerando nas quatro rodas, moto acelerando em duas rodas).

// Resumo
// Objeto: uma coisa com dados e ações.
// Classe: o modelo de como criar objetos.
// Herança: quando uma classe "puxa" coisas de outra.
// Encapsulamento: esconder detalhes internos e proteger dados.
// Polimorfismo: tratar diferentes objetos de forma parecida.
// Isso tudo ajuda a organizar o código, deixando ele mais limpo, fácil de entender e de manter!

// Se precisar de mais exemplos ou quiser aplicar isso a algum código específico, é só falar!

// Praticando ......

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo(){
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if(valor > this._saldo) {
      return console.log('Saque negado; saldo insuficiente!');
    }
    this._saldo = this._saldo - valor;

    return this.saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this.saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, CartaoCredito) {
    super(agencia, numero);
    this.tipo = 'corrente';
    this.CartaoCredito = CartaoCredito;
  }

  get CartaoCredito() {
    return this.CartaoCredito;
  }

  set CartaoCredito(valor) {
    this.CartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'poupança';
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'universitária';
  }

  sacar(valor) {
    if(valor > 500) {
      return console.log('Saque negado; saldo insuficiente!');
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}

const minhaConta = new ContaPoupanca(4, 555);
minhaConta.depositar(1800);
minhaConta.depositar(3200);
minhaConta.sacar(20000);
console.log(minhaConta)

const contaUnimed = new ContaUniversitaria(33, 3232);
contaUnimed.depositar(1580);
contaUnimed.sacar(580);
console.log(contaUnimed);