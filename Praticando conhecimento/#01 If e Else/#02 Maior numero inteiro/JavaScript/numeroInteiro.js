alert('Informe as informações a seguir, e verá qual desses numeros é maior graças a utilização do JS')

const num01 = prompt ("Digite o primeiro numero")
const num02 = prompt ("Digite o segundo numero")
const num03 = prompt ("Digite o terceiro numero")

const num1 = parseFloat(num01)
const num2 = parseFloat(num02)
const num3 = parseFloat(num03)

let maior = num1

if(num2 > maior && num03 < maior) {
  maior = num2
} else if(num03 > maior){
  maior = num3
}

alert(`O valor maior é correspondente a ${maior}`)