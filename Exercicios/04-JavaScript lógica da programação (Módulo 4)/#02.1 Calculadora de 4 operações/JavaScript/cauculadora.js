alert('Seja bem-vindo a calculadora online')
const numero1 = prompt('Digite o primeiro numero:')
const numero2 = prompt('Digite o segundo numero:')

// Resultados

const soma = parseFloat(numero1) + parseFloat(numero2), subtracao = numero1 - numero2, mutiplicacao = numero1 * numero2, divisao = numero1 / numero2


// Resultado na tela

alert(`A soma de ${numero1} + ${numero2} = ${soma}\n
A subitração de ${numero1} - ${numero2} = ${subtracao}\n
A multiplicação de ${numero1} * ${numero2} = ${mutiplicacao}\n
A divisão de ${numero1} / ${numero2} = ${divisao}\n

`)