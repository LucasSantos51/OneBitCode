window.alert("Seja bem-vindo a calculadora online")


const numero1 = window.prompt("Digite o primeiro numero:")
const numero2 = window.prompt("Digite o segundo numero:")

const num1 = parseFloat (numero1)
const num2 = parseFloat (numero2)

const soma = num1 + num2 
const subitracao = numero1 - numero2
const mutiplicacao = numero1 * numero2
const divisão = numero1 / numero2



window.alert(
"Resultados: \n" +  
"\nO resultado da soma é:" + soma + "\n"+
"\nO resultado da subitração é:" + subitracao + "\n" +
"\nO resultado da mutiplicação é:" + mutiplicacao + "\n" +
"\nO resultado da divisão é:" + divisão)

