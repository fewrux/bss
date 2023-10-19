function calcular() {
  const espacoAmostral = [1, 8, 18, 15, 32, 1, 1, 8, 9, 16, 19, 1, 80, 51, 1, 3, 2, 8, 1, 5]

  const soma = espacoAmostral.reduce((total, elemento) => total += elemento)
  const media = soma / espacoAmostral.length

  const variancia = espacoAmostral
    .reduce((total, elemento) => total += Math.pow((elemento - media), 2))
    / espacoAmostral.length - 1

  const desvioPadrao = Math.sqrt(variancia)

  console.log(`Soma: ${soma}`)
  console.log(`Media: ${media}`)
  console.log(`Variancia: ${variancia}`)
  console.log(`Devio Padrao: ${desvioPadrao}`);
}

calcular()
