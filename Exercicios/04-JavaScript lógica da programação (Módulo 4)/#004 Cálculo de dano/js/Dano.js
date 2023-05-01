                      // Pedir informações

// Primeiro personagem

const personagem1 = prompt("Informe o nome do personagem de ataque")

const poderAtaque = prompt("informe o seu poder de ataque:")



// Segundo personagem

const personagem2 = prompt("Informe o nome do segundo personagem (personagem de defesa)")
let quantidadeVida = prompt("Qual a sua quantidade de vida?")
const poderDeDefesa = prompt("Qual o seu poder de defesa?")
const escudo = prompt("O personagem possuir um escudo? (Sim/Não)")
 

let danoCausado = 0


// Luta

if(poderAtaque > poderAtaque && escudo === "Não") {
  danoCausado = poderAtaque - poderDeDefesa
} else if (poderAtaque > poderDeDefesa && escudo === "Sim") {
  danoCausado = (poderAtaque - poderDeDefesa) /2 
}

quantidadeVida -= danoCausado


alert(personagem1 + " causou " + danoCausado + " pontos de dano em " + personagem2)
alert(
  personagem1 + "\nPoder de ataque: " + poderAtaque + "\n\n" +
  personagem2 + "\nPontos de vida: " + quantidadeVida + 
  "\nPoder de defesa: " + poderDeDefesa + "\nPossuir escudo: " + escudo
)