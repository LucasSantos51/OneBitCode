alert("Seja bem-vindo ao jogo de carro\n" +
"O jogo é baseado em calculos")
alert("Instruções: \n"+
"Informe o nome e a velocidade de 1 a 10 atribuidos ao primeiro carro \n" +
"\nInforme o nome e a velocidade de 1 a 10 atribuidos ao Segundo carrro"
)


// Carro1

const nameCar = prompt("Digite o nome pilo do primeiro carro:")
const velocidadeCar = prompt ("Digite velocidade constante do primeiro carro")

const velocidade1 = parseFloat (velocidadeCar)

const car1 = (nameCar + " " + velocidadeCar) 

console.log(car1)

// Carro2

const nameCar2 = prompt("Digite o nome pilo do Segundo carro:")
const velocidadeCar2 = prompt ("Digite velocidade constante do Segundo carro de 1 a 10")

const velocidade2 = parseFloat (velocidadeCar2)

const car2 = (nameCar2 + " " + velocidadeCar2) 


console.log(car2)

const resultado = (velocidade1 - velocidade2)

// Resultado

if(resultado > 0){
  alert("O carro de " + nameCar + " é o vencedor")
}else{
  alert("O carro de " + nameCar2 +" é o vencedor")
}

