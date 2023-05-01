alert('Seja bem-vindo ao menu interativo')
let option = 5


do{
  option = prompt(`Selecione uma das opções:
  1 Inicio
  2 Endereço
  3 Contato
  4 Sobre 
  5 Encerrar
  `)

  switch (option){
    case "1":
      confirm('Você acessou a parte: INICIO')
      break
  
    case "2":
      confirm('Você acessou a parte: ENDEREÇO')
      break
  
    case "3":
      confirm('Você acessou a parte: CONTATO')
      break
  
    case "4":
      confirm('Você acessou a parte: SOBRE')
      break
    
    default:
    alert('Opção inválida.')
  }
}while(option !== "5")