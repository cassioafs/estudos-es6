class Mensagem {
  constructor(texto = '', data = Date.now()) {
    console.log('-----------------------');
    this.texto = texto;
    this.data = data;
  }

  toString() {
    return `Mensagem: ${this.texto} - criada em: ${this.data}`;
  }


}

class ImageMessage extends Mensagem {
  constructor(texto = '', data = Date.now(), url = '', thumbnail = '') {
    super(texto, data);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `Photo ${super.toString()}` +
      ` - Url ${this.url}` +
      ` - Thumbnail ${this.thumbnail}`;
  }


}

var mensagemVazia = new Mensagem();
var mensagem = new Mensagem('Nova mensagem', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(mensagemVazia + '');
console.log(String(mensagem));
console.log(String(photoMessage));

console.log(mensagemVazia instanceof Mensagem);
console.log(mensagemVazia instanceof ImageMessage);
console.log(mensagem instanceof Mensagem);
console.log(mensagem instanceof ImageMessage);
console.log(photoMessage instanceof Mensagem);
console.log(photoMessage instanceof ImageMessage);