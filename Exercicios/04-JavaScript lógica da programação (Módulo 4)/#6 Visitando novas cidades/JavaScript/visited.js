const name = prompt('Qual o seu nome?')
let cidades = ""
let quantidade = 0

let visited =prompt('Você já visitou alguma cidade? (Sim/Não)')

while (visited == "Sim"){
  let cidade = prompt ('Qual é o nome da cidade?')
  cidades += ` - ${cidade}\n`
  quantidade++;
  visited =prompt('Você já visitou alguma outra cidade? (Sim/Não)')
}

alert(`Chegamos ao fim.
${name} foi um praser saber as cidades que você visitou!
Você visitou ${quantidade} de cidades!
O nome delas estarão abaixo:
${cidades}
`)