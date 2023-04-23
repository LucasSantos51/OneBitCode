
let baycar = prompt('Você decidiu comprar um carro onix! Mas, antes de comprar é necessario selecionar o carro: (onix, prisma, fan, s10)')

switch (baycar) {
  case 'onix':
    alert('Deseja realmente comprar o onix?')
    break

  case 'prisma':
    alert('Algo de errado! Você disse que queria comprar o prisma?')
    confirm('Você deseja comprar o prisma?')
    break

  case 'fan':
    alert('Algo de errado! Você disse que queria comprar a fan?')
    confirm('Você deseja comprar a moto fan?')

  case 's10':
    alert('Algo de errado! Você disse que queria comprar a S10?')
    confirm('Você deseja comprar a S10?')

  default:
    alert('Não temos esse veículo')
}