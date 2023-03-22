
const idade = prompt("Quantos anos você tem?")

if (idade > 17){
  console.log("Tenho +18 anos")
  alert("Você é maior de idade")
}else{
  console.log("Tenho " + idade)
  alert("Você é uma Adolecente")}

if (idade < 12){
  console.log("Tenho " + " " + idade)
  alert("Você é uma criança")
} else{
  alert("Continue navegando")
}
