class Aluno:
    def __init__(self, nome, matricula, notas):
        self.nome = nome
        self.matricula = matricula
        self.notas = notas

    def calcular_media(self):
        return round(sum(self.notas) / len(self.notas), 1)

    def exibir_informacoes(self):
        print(f"Nome: {self.nome}")
        print(f"Matrícula: {self.matricula}")
        print(f"Notas: {', '.join(map(str, self.notas))}")
        print(f"Média: {self.calcular_media()}")

aluno1 = Aluno("João", "12345", [8.5, 7.0, 9.2, 6.8, 8.0])
aluno2 = Aluno("Maria", "54321", [9.5, 8.0, 7.5, 8.2, 9.0])
aluno3 = Aluno("Eurídice", "67890", [6.3, 9.0, 5.5, 4.2, 7.0])

aluno1.exibir_informacoes()
print("------------------------")
aluno2.exibir_informacoes()
print("------------------------")
aluno3.exibir_informacoes()
