let jogador = "X"

function marcar(id){
    let celula = document.getElementById(id)

    if(celula.innerHTML === ""){
        celula.innerHTML = jogador
    }else{
        return
    }
    if(jogador == "X"){
        jogador = "O"
    } else{
        jogador = "X"
    }
}

() => {
    isCircleTurn = false;
  
    for (const cell of cellElements) {
      cell.classList.remove("circle");
      cell.classList.remove("x");
      cell.removeEventListener("click", handleClick);
      cell.addEventListener("click", handleClick, {
        once: true
      });
    }
  
    setBoardHoverClass();
    winningMessage.classList.remove("show-winning-message");
  }