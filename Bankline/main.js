
const nomeBeneficiario = document.getElementById('nome_beneficiario');
let formValido = false;
const form = document.getElementById('form_dep')


function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')

    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const numeroConta = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');
    const menssagemSucesso = `valor  de: <b>${valorDeposito.value}</b> foi depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta nº: <b>${numeroConta.value}</b>`

    formValido = validaNome(nomeBeneficiario.value)

    if(formValido){
        const containerMenssagemSucesso = document.querySelector('.mensagem_sucesso');
        containerMenssagemSucesso.innerHTML = menssagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        // valorDeposito = '';
        // numeroConta = '';
    }else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.mensagem_erro').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup',function(e){
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if(!formValido){
        nomeBeneficiario.classList.remove('error');
        document.querySelector('mensagem_erro').style.display = 'block';
    }else{
        nomeBeneficiario.classList.add('error');
        document.querySelector('mensagem_erro').style.display = 'none';
    }
})