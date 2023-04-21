const nota01 = prompt('Digite a sua primeira nota:')
const nota02 = prompt('Digite a sua Segunda nota:')

const nota1 = parseFloat(nota01)
const nota2 = parseFloat(nota02)

const resultado = (nota1 + nota2) /2

if (resultado === 10){
  alert(`Aprovado com Distinção! A sua média é equivalente a ${resultado}`)
} else if (resultado >= 7){
  alert(`Aprovado! A sua média é equivalente a ${resultado}`)
} else {
  alert(`Reprovado! A sua média é equivalente a ${resultado}`)
}