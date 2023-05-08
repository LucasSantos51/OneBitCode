const operação = [
  soma = function (num1=0, num2=0){
    console.log(`${num1} + ${num2} = ${num1 +num2}`)
  },

  subtracao = function (num1=0, num2=0){
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
  },

  divisão = function (num1=0, num2=0){
    console.log(`${num1} + ${num2} = ${num1 / num2}`)
  },

  mutiplicacao = function (num1=0, num2=0){
    console.log(`${num1} . ${num2} = ${num1 * num2}`)
  }
]

soma(200, 39)
subtracao(42, 22)
divisão(100, 10)
mutiplicacao(15, 5)
