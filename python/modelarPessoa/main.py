from pessoa import Pessoa

def main():
    pessoa1 = Pessoa('Ana', 13, 55, 1.45)

    print(f'Nome: {pessoa1.nome}, idade: {pessoa1.idade}, altura: {pessoa1.altura}, peso: {pessoa1.peso}')

    pessoa1.nome = 'Paula'

    print(f'Nome: {pessoa1.nome}, idade: {pessoa1.idade}, altura: {pessoa1.altura}, peso: {pessoa1.peso}')

    pessoa1.envelhercer()

    print(f'Nome: {pessoa1.nome}, idade: {pessoa1.idade}, altura: {pessoa1.altura}, peso: {pessoa1.peso}')

if __name__== '__main__':
    main()