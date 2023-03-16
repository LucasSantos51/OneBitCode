
window.alert("Seja bem-vindo a inscrição para ser um astronauta")

// Questionario
const nome = window.prompt("Digite seu nome:")
const sobreNome = window.prompt ("Digite seu Sobrenome:")
const motivo = window.prompt("Porque você gostaria de ser um (a) astronauta?")
const sobreVoce = window.prompt("Fale-me um pouco sobre você:")
const dataDeNascimento = window.prompt("Digite sua Data de nascimento:")

// Informações no console
console.log(nome)
console.log(dataDeNascimento)
console.log(motivo)
console.log(sobreVoce)


// Informações

window.alert(
  "Suas informações:\n" + 
  "Seu nome completo" + nome + " " + sobreNome+
  "\nMotivo pelo qual gostaria de ser um astronalta" + motivo +
  "\nSobre você:" + sobreVoce +
  "\nSua data de nascimento" + (2023 - dataDeNascimento)
)