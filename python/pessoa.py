class Pessoa(object):

    def __init__(self, nome: str, idade: int, peso: int, altura: float, etnia: str):
        self.nome = nome
        self.etnia = etnia
        self.idade = idade
        self.peso = peso
        self.altura = altura

    def apresentar(self):
        print(f'Olá, meu nome é {self.nome}')

    def andar(self, distancia: float):
        print(f'Eu sai para caminhar. Voltarei quando completar {distancia} metros.')

    def cozinhar(self, receita: str):
        print(f'Estou cozinhando um {receita}')

# Exemplo de uso
pessoa = Pessoa(nome="Fulano", idade=25, peso=70, altura=1.75, etnia="Caucasiano")
pessoa.apresentar()
pessoa.andar(1000)
pessoa.cozinhar("bolo de chocolate")












# class Pessoa(object):

#     def __init__(self,nome: str,idade: int,peso: int,altura: float,etnia: str):
#         self.nome = nome
#         self.etnia = etnia
#         self.idade = idade
#         self.peso = peso
#         self.altura = altura

#         def apresentar(self):
#             print('Olá, meu nome é {self.nome}')

#         def andar(self, distancia: float):
#             print('Eu sai para caminhar, Voltarei quando completar {distancia} de metros ')

#         def cozinhar(self, receita: str):
#             print('Estou cozinhando um {receita} ')
