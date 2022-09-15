const prompt = require(`prompt-sync`)()
const imc = require(`./imc`)

const peso = parseInt(prompt(`Informe seu peso: `))
const altura = parseInt(prompt(`Informe seu Altura: `))


const valorFinal = imc(peso,altura)

console.log(`seu imc é ${valorFinal} `)


