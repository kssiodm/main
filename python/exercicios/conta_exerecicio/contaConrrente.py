class ContaCorrente(object):
    def __init__(self, numero_da_conta, nome_do_correntista, saldo) -> None:
        self.__numero_da_conta = numero_da_conta
        self.__nome_do_correntista = nome_do_correntista
        self.__saldo = saldo


    @property
    def numero_da_conta(self):
        return self.__numero_da_conta
    
    @numero_da_conta.setter
    def numero_da_conta(self, numero_da_conta):
        self.__numero_da_conta = numero_da_conta

    @property
    def nome_do_correntista(self):
        return self.__nome_do_correntista
    
    @nome_do_correntista.setter
    def nome_do_correntista(self, nome_do_correntista):
        self.__nome_do_correntista = nome_do_correntista

    @property
    def saldo(self):
        return self.__saldo
    
    @saldo.setter
    def saldo(self, saldo):
        self.__saldo = saldo

    def alterarNome(self):
        self.nome_do_correntista = input('Nome do correntista: ')

    def deposito(self):
        self.saldo += float(input('saldo do deposito: '))

    def saque(self):
        self.saldo -= float(input('saldo do saque: '))


