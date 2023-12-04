from contaConrrente import ContaCorrente

def main():

    conta1 = ContaCorrente(564, 'Carlos', 0)

    print(f'Numero da conta: {conta1.numero_da_conta}, Nome do correntista: {conta1.nome_do_correntista}, Saldo: {conta1.saldo}')

    conta1.alterarNome()
    conta1.deposito()
    conta1.saque()

    print(f'Numero da conta: {conta1.numero_da_conta}, Nome do correntista: {conta1.nome_do_correntista}, Saldo: {conta1.saldo}')

if __name__== '__main__':
    main()