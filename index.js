class Mensagem{

  constructor(texto = '',data=Date.now()){
    this.texto = texto;
    this._data = data;
  }

  toString(){
    return `Mensagem: ${this.texto} - criada em: ${this.data}`;
  }

}
var mensagemVazia = new Mensagem();

var mensagem = new Mensagem('Nova mensagem', Date.now() - 86400);

console.log(mensagemVazia+'');
console.log(`${mensagem}`);