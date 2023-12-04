from humano import Humano

class Principal():

    def main():
        pessoa1 = Humano(nome="Alice", idade=15, peso=60, altura=1.60)


        print(f"Nome: {pessoa1.nome}, Idade: {pessoa1.idade}, Peso: {pessoa1.peso}, Altura: {pessoa1.altura}")

        pessoa1.envelhecer(3)

        pessoa1.engordar(5)

        pessoa1.emagrecer(2)

        print(f"Nome: {pessoa1.nome}, Idade: {pessoa1.idade}, Peso: {pessoa1.peso}, Altura: {pessoa1.altura}")
    if __name__ == '__main__':
        main()
