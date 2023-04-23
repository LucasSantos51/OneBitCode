


alert(`Seja bem-vindo ao conversor de medidas
INTROÇÕES:

Coloque o valor correspondente em metros. 
Depois escolha qual unidade de medida esse valor dever ser convertido.
`)

let valorEmMetros = prompt('Digite o valor em metros: (Apenas numeros)')

const conversão = prompt(`Escolha um das opções a baixo para converter:
1. milímetro
2. centímetro
3. decímetro
4. decâmetro
5. hectômetro
6. quilômetro`)


switch (conversão){
  case "1":
    alert(`O resultado da conversão de ${valorEmMetros} metros = ${valorEmMetros * 1000}mm`)
    break

  case "2":
    alert(`O resultado da conversão de ${valorEmMetros} metros = ${valorEmMetros * 100}cm`)
    break

  case "3":
    alert(`O resultado da conversão de ${valorEmMetros} metros = ${valorEmMetros *10000}dm`)
    break

  case "4":
    alert(`O resultado da conversão de ${valorEmMetros} metros = ${valorEmMetros / 10}dam`)
    break

  case "5":
    alert(`O resultado da conversão de ${valorEmMetros} metros = ${valorEmMetros / 100}hm`)
    break

  case "6":
    alert(`O resultado da conversão de ${valorEmMetros} metros = ${valorEmMetros /1000}km`)
    break

  default:
    alert("Aconteceu um erro, recarregue a pagina e tente novamente")
}