function mutiplicar(num){
  console.log(num)
  if(num * num <1000){
    mutiplicar(num*num)
  } else{
    console.log("Erro: o proximo valor mutiplicado é maior que 1000")
  }
}

mutiplicar(2)