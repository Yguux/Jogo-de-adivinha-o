
function verificaChute(chute){

    const numero = +chute

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += `<div class="invalido">Valor inválido, precisa ser um número</div>`
    }

    if (numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div class="invalido">Valor inválido, o número precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML =
        `<div class="acertou">
            <h2>Você acertou!!</h2>
            <h3>o numero secreto era ${numeroSecreto}</h3>
        </div>
        <button id="jogarnovamente" class="jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<p class="img">O número é menor <img src="img/seta-alt-baixo.png"></p>`
    } else{
        elementoChute.innerHTML += `<p class="img">O número é maior <img src="img/seta-alt-cima(1).png"></p>`
    }
}

function chuteInvalido(numero){
   return Number.isNaN(numero)
}

function numeroMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarnovamente') {
        window.location.reload()
    }
})