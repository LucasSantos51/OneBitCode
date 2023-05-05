let pessoa = {
  nome: 'Lucas Santos',
  idade: 17,
  mensagem(){
    console.log(`Seja bem-vindo ${this.nome}. Você tem ${this.idade} anos de idade`)
  }
}

pessoa.mensagem()