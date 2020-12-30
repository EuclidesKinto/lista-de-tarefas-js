let input = document.querySelector('input[name=tarefa]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');

let tarefas = [
    'Jogar Bola 1',
    'Jogar Bola 2',
    'Jogar Bola 3',
    'Jogar Bola 4',
];

function renderizarTarefas(){
    for (tarefa of tarefas) {
        // Criar o item da lista
        let itemLista = document.createElement('li');
        
        // Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //Criar o texto
        let itemTexto = document.createTextNode(tarefa);

        //adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        lista.appendChild(itemLista);
    }
}

renderizarTarefas();