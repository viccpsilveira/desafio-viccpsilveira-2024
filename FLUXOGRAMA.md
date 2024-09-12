*Fluxograma*

1 - *Início*

2 - *Verificar se o animal é válido*
    Sim: Continue para o próximo passo
    Não: Retorne "Animal inválido"

3 - *Verificar se a quantidade é válida*
    Sim: Continue para o próximo passo
    Não: Retorne "Quantidade inválida"

4 - *Aplicar regras do zoológico*
    
    Verificar compatibilidade de bioma
        Sim: Continue para o próximo passo
        Não: Passe para o próximo recinto
        
    Verificar se o recinto contém algum animal
           
        Sim:
            Se o animal é carnívoro e o animal que já está no recinto não é carnívoro
                Sim: Passe para o próximo recinto
                Não: Continue para o próximo passo
                
            Se o animal é carnívoro e o animal no recinto é de outra espécie
                Sim: Passe para o próximo recinto
                Não: Continue para o próximo passo
            
        Não: Continue para o próximo passo
   
    Verificar espaço disponível no recinto
        
        Suficiente: Adicione o recinto à lista de recintos viáveis
        Não Suficiente: Passe para o próximo recinto

5 - *Verificar se há recintos viáveis*
    
    Sim: Retorne a lista de recintos viáveis
    Não: Retorne "Não há recinto viável"

*Fim*