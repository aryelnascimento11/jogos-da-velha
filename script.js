var jogador = "X"


function marcar(id) {
    var celula = document.getElementById(id)
    celula.innerHTML = jogador
    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
        
}
 
 }   

