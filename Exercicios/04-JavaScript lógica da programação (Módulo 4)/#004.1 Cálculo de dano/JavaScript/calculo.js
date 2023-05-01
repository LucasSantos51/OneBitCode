alert(`Seja bem-vindo ao cálculo de dano
Informe as informações a seguir corretamente sobre os personagens.

`)
// Personagem de ataque
const personagemAtaque = prompt('Digite o nome do personagem de ataque:')
const poderDeAtaque = prompt('Digite o poder de ataque desse personagem:')


// Personagem 2
const personagemDefesa = prompt('DIgite o nome do personagem de defesa:')

let pontosDeVida = prompt('Informe a quantidade de vida desse personagem')

const poderDeDefesa = prompt('Informe a quantidade de pontos de defesa:')

const escudo = prompt('O personagem tem um escudo? (SIm/Não)')

let danoCausado = 0


// Luta
if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(`${personagemAtaque} causou ${danoCausado} potos de dano em ${personagemDefesa}`)

alert(`${personagemAtaque} 
Poder de ataque: ${poderDeAtaque}

${personagemDefesa}
Pontos de vida: ${pontosDeVida}
Poder de defesa: ${poderDeDefesa}
Possuir escudo: ${escudo}`)
