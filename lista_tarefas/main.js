const positivo = '<img src="imagens/legal.png" alt="positivo"/>'
const negativo = '<img src="./imagens/negativo.png" alt="negativo"/>'

$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa= $('#tarefa_nova').val();
        const tarefaAtualizada = $('<li style = "display: none"></li>');
        $(`<p${novaTarefa}></p>`).appendTo(tarefaAtualizada);
        $(`
            <li id="lista">
                ${novaTarefa}
            </li>
        `).appendTo(tarefaAtualizada);
        $(tarefaAtualizada).appendTo('ul');
        $(tarefaAtualizada).fadeIn(100);
        $('#tarefa_nova').val('');
        $('li').click(function(){
            $(this).css("text-decoration","line-through");
        });
    });
});