from pessoa import Pessoa  

class Principal(object):

    pessoa1 = Pessoa(nome='José', altura=1.82, idade=56, etnia='eslavo', peso=70)

    def executa_atividades(self):
        self.pessoa1.apresentar()
        self.pessoa1.cozinhar('Feijão')
        self.pessoa1.andar(250.5)

principal = Principal()
principal.executa_atividades()

