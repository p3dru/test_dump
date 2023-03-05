class Retangulo {
    #altura;
    #largura;
  
    constructor(altura, largura) {
      this.#altura = altura;
      //this.altura = parseInt(altura); -> permite que a altura seja visível fora do método
      this.#largura = largura;
    }
  
    get area() {
      //return this.altura * this.#largura; -> calcula com base na altura visível
      return this.#altura * this.#largura;
    }
  }
  
  const ret = new Retangulo(3, 5);
  console.log(ret.altura);
  console.log('area:', ret.area);