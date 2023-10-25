let jogador = "X"


function marcar(id) {
    let celula = document.getElementById(id)
    
     
    if(celula.innerHTML === ""){
        celula.innerHTML = jogador
    } else{
        return
    }

    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"    
    }
}
 //  === valor de comparar