class Bola(object):

    def __init__(self,cor: str, circuferencia: int, material: str):
        self.cor = cor
        self.circuferencia = circuferencia
        self.material = material

    def mostraCor(self):
        print(f'a cor da bola é {self.cor}')

    # def setCor(self, cor: str) -> None:
    #     return self.cor = cor

    def trocaCor(self) -> None:
        self.cor = str(input('troque a cor da bola: '))

    # def getCor(self, cor: str) -> None:
    #     return self.cor 


    def exibirInfos(self):
        print(f"circuferencia: {self.circuferencia}")
        print(f"material: {self.material}")