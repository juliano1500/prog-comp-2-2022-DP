let sistemaImobiliaria = () => {
    let opcao
    let vetImoveis = [] // vetor de imoveis
    do {
        opcao = Number(prompt(`Informe \n1. Cadastra \n2. Consulta A \n3. Consulta B \n4. Consulta C \n5. Sair`))
        switch(opcao){
            case 1: cadastraImovel(vetImoveis)
                    break
            case 2:
            case 3:
            case 4:
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5){

    }
} 
let cadastraImovel = (vetImoveis) => {
    let objeto = {
        codigo: Number(prompt(`Informe código do imóvel`)),
        tamanho: Number(prompt(`Informe tamanho do imóvel`)),
        tipo: prompt(`Informe tipo do imóvel. A para Apartamento e C para Casa`).toUpperCase(),
        valor: Number(prompt(`Informe valor do imóvel`)),
    }
    let achou = false
    for(let i=0;i<vetImoveis.length;i++){
        if (vetImoveis[i].codigo == objeto.codigo){
            achou = true
            alert(`Código já existente`)
        }
    }
    if(!achou){
        vetImoveis.push(objeto)
        alert(`Imóvel cadastrado com sucesso`)
    }
    vetImoveis.push(objeto)
}