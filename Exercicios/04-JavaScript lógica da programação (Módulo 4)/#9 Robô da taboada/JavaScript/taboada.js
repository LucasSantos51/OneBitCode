alert('Seja bem-vindo ao Robô da taboada')
let number = parseFloat(prompt('Qual taboada você deseja consultar?'));
let taboada = ""

for (let fator = 1; fator <=20; fator++) {
  taboada += '-->' + number + ' * ' + fator + ' = ' + (number * fator) +"\n"
}
alert('O resultado da tabela' + number + '\n\n' + taboada)