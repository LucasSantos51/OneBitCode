alert(`Bem-vindo ao teste de velocidade baseada na velocidade de carros\n
Instruções
\nInforme o nome do primeiro piloto e a sua velocidade
\nDepois, informe o nome do segundo piloto e a sua velocidade`)
const piloto1 = prompt('Digite o nome do piloto do primeiro carro')
const car1 = prompt ('Digite a velocidade do primeiro carro em km/h')

const piloto2 = prompt('Digite o nome do piloto do segundo carro')
const car2 = prompt ('Digite a velocidade do primeiro carro em km/h')

const carro1 = parseFloat(car1)
const carro2 = parseFloat(car2)

if (carro1 > carro2){
  alert(`O piloto ${piloto1} com velocidade de ${carro1}km/h é mais veloz`)
} else{
  alert(`O piloto ${piloto2} com velocidade de ${carro2}km/h é mais veloz`)
}