let sistemaAgencia = () => {
    let opcao
    let vetViagem = []
    do {
        opcao = Number(prompt(`Informe \n1. Cadastra Viagem \n2. Consulta Preço Médio \n3. Consulta viagem de acordo com o tipo: A ou T \n4. Consulta a viagem mais barata de um determinado País \n5. Sair`))
        switch(opcao){
            case 1: cadastraViagem(vetViagem)
                    break
            case 2: consultaPrecoMedio(vetViagem)
                    break
            case 3: let tipo = prompt(`Qual o tipo de viagem A ou T?`).toUpperCase()
                    consultaViagemTipo(vetViagem, tipo)
                    break
            case 4: let pais = prompt(`Qual o país que vôce deseja consultar?`).toUpperCase()
                    consultaViagemBrt(vetViagem, pais)
                    break
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5){

    }
}
let cadastraViagem = (vetViagem) => {
    let objeto = {
        codigo: Number(prompt(`Informe código da viagem`)),
        pais: prompt(`Informe o país`).toUpperCase(),
        cidade: prompt(`Informe a cidade`),
        preco: Number(prompt(`Informe o preço da viagem`)),
        tipo: prompt(`Informe o tipo de viagem. A para aérea T para terrestre`).toUpperCase(),
    }
    let achou = false
    for(let i=0;i<vetViagem.length;i++){
        if (vetViagem[i].codigo == objeto.codigo){
            achou = true
            alert(`Código já existente`)
        }
    }
    if(!achou){
        vetViagem.push(objeto)
        alert(`Viagem cadastrada com sucesso`)
    }

}
let consultaPrecoMedio = (vetViagem) => {
    let soma = 0
    for(let i=0;i<vetViagem.length;i++){
        soma = soma + vetViagem[i].preco
        medio = (soma)/(i+1)
    }
    alert(`O preço médio das viagens é de ${medio}`)
}
let consultaViagemTipo = (vetViagem, tipo) => {
    for(let i=0;i<vetViagem.length;i++){
        if (vetViagem[i].tipo == tipo){
            console.log(vetViagem[i])
        }   
    }
}
let consultaViagemBrt = (vetViagem, pais) => {
    for(let i=0;i<vetViagem.length;i++){
        if (vetViagem[i].pais == pais) {
            console.log(vetViagem[i])
        }
    }
}
