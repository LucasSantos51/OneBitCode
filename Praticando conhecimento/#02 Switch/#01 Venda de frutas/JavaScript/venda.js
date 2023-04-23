const fruta = prompt(`Seja bem-vindo a feira!
Consute a disponibilidade e valor das frutas:
Banana
Maça
kiwi
Melancia
O que gostaria de comprar?`)

switch (fruta){
  case "Banana":
    alert('A duzia é 5 reais')
    break

  case "Maça":
    alert('Não vendemos esta fruta aqui')
    break

  case "Kiwi": 
    alert('Estamos com escassez de kiwis')
    break
  
  case "Melancia":
    alert('Aqui está, são 3 reais o quilo')
    break

  default:
    alert('Erro: O elemento escolhido não corresponde a nenhuma das frutas')
}

