print("informe o tempo estacionado")

entrada = int(input("hora entrada: "))

saida = int(input("hora de saida:"))

tempo =  saida - entrada
print(tempo)

if (tempo > 0) & (tempo <= 2):
  tempo *= 10
elif (tempo > 3) & (tempo <= 4):
  tempo *= 11
else:
  tempo *= 5

print(f"total a ser pago R$ {tempo}" )
