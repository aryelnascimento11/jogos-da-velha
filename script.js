let jogador = "X"

let table = ["","","","","","","","",""]

function marcar (id){
    if(table[id] != "")return
    table[id] = jogador

    if(jogador == "X"){
        jogador = "O"
    }else{
        jogador = "X"
    }
 render()
    
}

function render(){
    let tds = document.querySelectorAll("td")
    for(let lops = 0 ; lops<9; lops++){
        tds[lops].innerHTML = table[lops]
    }
}