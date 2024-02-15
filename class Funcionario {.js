class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instâncias de Gerente e Desenvolvedor
const gerente1 = new Gerente('Carlos', 40, 'Gerente de Projetos', 'TI');
const desenvolvedor1 = new Desenvolvedor('Ana', 28, 'Desenvolvedora', 'JavaScript');

// Chamando métodos apropriados para cada funcionário
gerente1.seApresentar(); // Saída: Olá, meu nome é Carlos, tenho 40 anos e sou Gerente de Projetos.
gerente1.gerenciar();    // Saída: Carlos está gerenciando o departamento TI.

desenvolvedor1.seApresentar(); // Saída: Olá, meu nome é Ana, tenho 28 anos e sou Desenvolvedora.
desenvolvedor1.programar();    // Saída: Ana está programando em JavaScript.
