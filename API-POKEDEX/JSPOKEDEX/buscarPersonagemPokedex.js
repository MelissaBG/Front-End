function buscarPersonagem(){
    const nomePersonagem = document.getElementById("nome_personagem").value
    $.ajax({
        url: " https://pokeapi.co/api/v2/pokemon/" + nomePersonagem,
            type: "get",
            success: function (result) {

                construirImagemHtml(result.sprites.front_default)
                construirNomeHtml(result.name)
                construirTiposHtml(result.types)
                construirGolpesHtml(result.moves)                
            }
    });
    
}

function construirImagemHtml(urlImagem){
    console.log("construindo imagem")
    document.getElementById("imagem_personagem").src = urlImagem
}

function construirNomeHtml(nome){
    console.log("construindo nome")
    document.getElementById("container_nome").innerHTML = nome
}

function construirTiposHtml(tiposPokemon){
    console.log("construindo tipo")
    //Elemento do HTML para alterar//
    const containerTipos = document.getElementById("container_tipos")
    //Tipos do pokemon//
    containerTipos.innerHTML = ""   
    tiposPokemon.forEach(tipo => {
        containerTipos.innerHTML += `<div class="tipoBox cor-${tipo.type.name}">${tipo.type.name}</div>`
    });
    //Passar por todos os tipos para pegar o nome de cada um e guardar no elemento do html

}


function construirGolpesHtml(golpes){
    console.log("construindo golpes")
    const containerGolpes = document.getElementById("container_golpes")
    containerGolpes.innerHTML = ""
    golpes.forEach(function(golpe){
        console.log(golpe.move.name)
        containerGolpes.innerHTML += `<div>${golpe.move.name}</div>`
    })
    console.log(golpes)
    
}

function construirNomesTipos(tipos){
    
    let textoTipos = "<ol>"
    tipos.forEach(tipo => {
        textoTipos += "<li>" + tipo.type.name + "</li>"
    });
    return `${textoTipos}</ol>`
}
