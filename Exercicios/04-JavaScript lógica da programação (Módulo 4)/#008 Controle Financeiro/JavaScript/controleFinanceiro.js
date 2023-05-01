alert('Seja bem-vindo ao controle financeiro')
let saldo = prompt('Quanto de dinheiro você tem disponivel?')
saldo = parseFloat(saldo)
let opcao = ""


// Operação
do{
  opcao = prompt(`Você tem R$ ${saldo} em dinheiro
  Gostaria de:
  1 Adicionar dinheiro
  2 Remover dinheiro
  3 sair
  `)
  
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt ('Quanto gostaria de adicionar?'))
      break;
    
    case "2":
      saldo -= prompt("Quanto deseja remover?")
      break;

    case "3":
      alert('Agradecemos a sua presença, até logo!')
      break

    default:
      alert('Opção inválida')
    }
} while(opcao !== "3")