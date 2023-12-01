class Humano(object):

    def __init__(self,nome: str,idade: int,peso: int,altura: float):
        self.nome = nome
        self.idade = idade
        self.peso = peso
        self.altura = altura

    def mostrarDados():
        print(f'nome:{self.nome},idade: {self.idade}, peso: {self.peso}, altura: {self.altura} ')
