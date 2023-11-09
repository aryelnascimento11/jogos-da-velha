let jogador = "X"

let tabela = ["","","","","","","","",""]

function marcar(id){
 
    tabela[id] = jogador
    if(jogador == "X"){
        jogador = "O"
    }else{
        jogador = "X"
    }
    render()
}

function render(){
    let tds = document.querySelectorAll("tds")
    for(let id = 0;)
}