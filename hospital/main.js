const form = document.getElementById('form_atividade');
const imgAprovado = '<img src="midia/aprovado.png" alt="simbolo aprovado"/>';
const imgNegado = '<img src="midia/negado.png" alt="simbolo negado"/>';
let produto = [];
let soma = [];
let custoTotal = [];
const orcamento = parseInt(prompt("Informe o orçamento: "));

const spanAceito = '<span class="total autorizado">Aprovado</span>';
const spanNegado = '<span class="total n_autorizado">Negado</span>';

let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
    calcularQuantidade()
    atualizarGasto();
});

function adicionarLinha(){
    const inputNomeRemedio = document.getElementById('nome_remedio');
    const inputQuantidade = document.getElementById('quantidade');
    const inputCusto = document.getElementById('custo');

    if(produto.includes(inputNomeRemedio.value)){
        alert(`A atividade ${inputNomeRemedio.value} já foi inserida!`);
    }else{
        produto.push(inputNomeRemedio.value);
        soma.push(parseFloat(inputQuantidade.value));
        custoTotal.push(parseFloat(inputCusto));
        let linha = '<tr>';
        linha += `<td>${inputNomeRemedio.value}</td>`;
        linha += `<td>${inputQuantidade.value}</td>`;
        linha += `<td>${inputCusto.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeRemedio.value = '';
    inputQuantidade.value = '';
    inputCusto.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarGasto(){
    const custoFinal = totalGasto();

    document.getElementById('total_gasto').innerHTML = custoFinal;
    document.getElementById('total_possui').innerHTML = custoFinal >= orcamento ? spanAceito : spanNegado;
}

function calcularQuantidade(){
    let somaPrecos = 0;

    for(let i = 0; i < soma.length; i ++){
        somaPrecos += soma[i];
    }

    return somaPrecos + soma.length;
}

function calcularCusto(){
    let somaPrecos = 0;

    for(let i = 0; i < soma.length; i ++){
        somaPrecos += custoTotal[i];
    }

    return somaPrecos + custoTotal.length;
}

function totalGasto(){
    return calcularCusto() + custoTotal.length
}