// alert('Olá Mundo');
let formValido = false;
function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')

    return nomeComoArray.length >= 2;
}

const form = document.getElementById('form_dep')

form.addEventListener('submit', function(e){

    let formValido = false;

    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome_beneficiario');
    const numeroConta = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');
    const menssagemSucesso = `valor  de: ${valorDeposito.value} foi depositado para o cliente ${nomeBeneficiario.value} - conta nº: ${numeroConta.value}`

    formValido = validaNome(nomeBeneficiario.value)

    if(formValido){
        alert(menssagemSucesso)
        nomeBeneficiario.value = '';
        valorDeposito = '';
        numeroConta = '';
    }else{
        alert('o nome não está completo')
    }
})