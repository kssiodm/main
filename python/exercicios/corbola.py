from bola import Bola

class Principal():

    bola1 = Bola('azul', 76, 'plastico')

    # print(f'cor da bola{bola1.getCor()}')
    # bola1.setCor('vermelho')

    bola1.mostraCor()
    bola1.trocaCor()
    bola1.mostraCor()
    bola1.exibirInfos()