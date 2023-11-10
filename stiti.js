let player = "X"

let table = [,"","","","","","","","",""]

function marcar(id){
    if(table[id] != "")
    table[id] = player

    if(player == "X"){
        player = "O"
    }else{
        jogador = "X"
    }
    render()
}

function render(){
    let tds = document.querySelectorAll("td")
    for(let lops = 0; lops<9; lops++){
        tds[lops].innerHTML = table[td]
    }

}