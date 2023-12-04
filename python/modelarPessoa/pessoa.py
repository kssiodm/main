class Pessoa:
    def __init__(self, nome, idade, peso, altura) -> None:
        self.__nome = nome
        self.__idade = idade
        self.__peso = peso
        self.__altura = altura

    @property
    def nome(self):
        return self.__nome
    
    @nome.setter
    def nome(self, nome):
        self.__nome = nome

    @property
    def idade(self):
        return self.__idade
    
    @idade.setter
    def idade(self, idade):
        self.__idade = idade

    @property
    def peso(self):
        return self.__peso
    
    @peso.setter
    def peso(self, peso):
        self.__peso = peso

    @property
    def altura(self):
        return self.__altura
    
    @altura.setter
    def altura(self, altura):
        self.__altura = altura

    def envelhercer(self):

        if self.idade < 21:
            self.idade += 1
            self.crescer()
        else:
            pass

    def engordar(self):
        self.peso += 1

    def emagrecer(self):
        self.peso -= 1

    def crescer(self):
        self.altura += 0.05