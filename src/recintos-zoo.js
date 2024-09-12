class RecintosZoo {

    constructor() {
        // Definindo os animais válidos
        this.animaisValidos = {
            LEAO: { tamanho: 3, biomas: ['savana'], carnivoro: true },
            LEOPARDO: { tamanho: 2, biomas: ['savana'], carnivoro: true },
            CROCODILO: { tamanho: 3, biomas: ['rio'], carnivoro: true },
            MACACO: { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
            GAZELA: { tamanho: 2, biomas: ['savana'], carnivoro: false },
            HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
        };
  
        // Definindo os recintos disponíveis
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanhoTotal: 10, ocupacao: 3, especies: ['MACACO'] },
            { numero: 2, bioma: 'floresta', tamanhoTotal: 5, ocupacao: 0, especies: [] },
            { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, ocupacao: 2, especies: ['GAZELA'] },
            { numero: 4, bioma: 'rio', tamanhoTotal: 8, ocupacao: 0, especies: [] },
            { numero: 5, bioma: 'savana', tamanhoTotal: 9, ocupacao: 3, especies: ['LEAO'] }
        ];
    }
  
    analisaRecintos(animal, quantidade) {
        // Verifica se o animal é válido
        if (!this.animaisValidos[animal]) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }
  
        // Verifica se a quantidade é válida
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }
  
        const especie = this.animaisValidos[animal];
        let recintosViaveis = [];
  
        // Verifica os recintos
        for (let recinto of this.recintos) {
            // Exclui os recintos que não têm um bioma compatível
            if (!especie.biomas.includes(recinto.bioma) && recinto.bioma !== 'savana e rio') {
                continue;
            }
  
            // Verifica se o recinto já contém algum animal
            if (recinto.especies.length > 0) {
                 // Verifica se o recinto já tem um animal carnívoro e o novo animal não é carnívoro
                 if (!especie.carnivoro && this.animaisValidos[recinto.especies[0]].carnivoro) {
                     continue;
                 }
  
                 // Verifica se o animal a ser adicionado é carnívoro e o recinto já contém uma espécie diferente
                 if (especie.carnivoro && recinto.especies[0] !== animal) {
                     continue;
                 }
            }
  
            // Espaço restante no recinto
            let espacoRestante = recinto.tamanhoTotal - recinto.ocupacao;
            // Espaço necessário para acomodar novos animais
            let espacoNecessario = especie.tamanho * quantidade;
  
            // Adiciona 1 ao espaço necessário se já houver animais
            if (recinto.especies.length > 0 && recinto.especies[0] !== animal) {
                espacoNecessario += 1;
            }
  
            // Verifica se o recinto tem espaço suficiente
            if (espacoRestante >= espacoNecessario) {
                // Se for viável, adiciona o recinto à lista
                recintosViaveis.push(
                    `Recinto ${recinto.numero} (espaço livre: ${espacoRestante - espacoNecessario} total: ${recinto.tamanhoTotal})`
                );
            }
        }
  
        // Se não houver recintos viáveis, retorna a mensagem de erro
        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: null };
        }
  
        // Se houver recintos viáveis, retorna a lista
        return { erro: null, recintosViaveis };
    }
  }
  
  export { RecintosZoo as RecintosZoo };
  