var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaEsquerda.style = "display:flex; margin-top:50px"
    setaDireita.style = "diplay:none"
}

function RolarParaEsquerda() {
Leonardo.style = "display: flex"
Bruna.style = "display: none"
setaDireita.style = "display:flex; margin-top:50px"
setaEsquerda.style = "display:none"
}