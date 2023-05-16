const form = document.getElementById('form_atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji desapontado"/>';
let contatos = [];
let total_contatos = []

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha(){
    const inputNomeContato = document.getElementById('nome_contato');
    const inputNumeroTelefone = document.getElementById('numero_telefone');

    if(contatos.includes(inputNomeContato.value)){
        alert(`o contato ${inputNomeContato.value} já foi inserida!`);
    }else{
        contatos.push(inputNomeContato.value);
        total_contatos.push(inputNumeroTelefone.value);
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
