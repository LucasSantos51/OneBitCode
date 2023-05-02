function parImp (n){
  if(n%2==0){
    return 'Número par'
  } else{
    return 'Número impar'
  }
}

let res = parImp(15)
console.log(res)