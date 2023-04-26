const turno = prompt('Em qual turno você está visitando esse site? (Matutino/Vespertino/noturno')

switch (turno){
  case "Matutino" && "matutino":
    alert('Bom dia, seja bem-vindo')
    break

  case "Vespertino" && "vespertino":
    alert('Boa tarde, seja bem-vindo')
    break

  case "Noturno" && "noturno":
    alert('Boa noite, seja bem-vindo')
    break
  default:
    alert('Aconteceu um erro, recarregue a pagina e tente novamente')
}