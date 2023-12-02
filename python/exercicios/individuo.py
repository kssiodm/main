from humano import Humano

# Criando uma pessoa
pessoa1 = Humano(nome="Alice", idade=18, peso=60, altura=160)

# Exibindo informações iniciais
print(f"Nome: {pessoa1.nome}, Idade: {pessoa1.idade}, Peso: {pessoa1.peso}, Altura: {pessoa1.altura}")

# Envelhecendo a pessoa por 3 anos
pessoa1.envelhecer(3)

# Engordando a pessoa em 5 quilos
pessoa1.engordar(5)

# Emagrecendo a pessoa em 2 quilos
pessoa1.emagrecer(2)

# Exibindo informações finais
print(f"Nome: {pessoa1.nome}, Idade: {pessoa1.idade}, Peso: {pessoa1.peso}, Altura: {pessoa1.altura}")
