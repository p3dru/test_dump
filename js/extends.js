/*
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log("Olá mundo");
    }
 }

class Professor extends Pessoa{
    constructor(nome, idade, materia){
        // Chamada do construtor da classe mãe(Pessoa)
        // o super é uma representação do construtor da classe mãe
        // E sempre deve ser a primeira linha na classe filha
        super(nome, idade);
        this.materia = materia;
    }
    darAula(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, e dou aula de ${this.materia}`);
    }
}

const prof = new Professor('adelio', 34, 'geografia');
console.log(prof);
prof.darAula();

*/

class Mamifero{
    constructor(patas, pelos){
        this.patas = patas;
        this.pelos = pelos;
    }
}

class Cachorro extends Mamifero{
    constructor(patas, pelos, nome, idade){
        super(patas, pelos);
        this.nome = nome;
        this.idade = idade;
    }
    
    falar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou um cachorro`);
    }
}

var cach = new Cachorro(4, 'sim', 'José', 34);
cach.falar();