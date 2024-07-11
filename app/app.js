const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('primeiro_numero')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("segundo_numero")
elementoMaiorValor.innerHTML = maiorValor