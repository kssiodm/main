class Humano(object):
    def __init__(self, nome: str, idade: int, peso: int, altura: float):
        self.nome = nome
        self.idade = idade
        self.peso = peso
        self.altura = altura

    def envelhecer(self, anos):
        self.idade += anos
        if self.idade < 21:
            self.crescer(0.05 * anos)

    def engordar(self, peso_ganho):
        self.peso += peso_ganho

    def emagrecer(self, peso_perdido):
        self.peso -= peso_perdido

    def crescer(self, altura_ganha):
        self.altura += altura_ganha