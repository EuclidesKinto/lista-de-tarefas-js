let input = document.querySelector('input[name=tarefa]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');
let card = document.querySelector('.card');

let tarefas = [];

function renderizarTarefas(){
    //Limpar a lista antes de renderizar novamente
    lista.innerHTML = '';
    for (tarefa of tarefas) {
        // Criar o item da lista
        let itemLista = document.createElement('li');
        
        // Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        itemLista.onclick = function(){
            revomeTerefa(this);
        };

        //Criar o texto
        let itemTexto = document.createTextNode(tarefa);

        //adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        lista.appendChild(itemLista);

    }
}
// Executando a função para renderizar a lista de terefas
//renderizarTarefas();

btn.onclick = function(){
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
        tarefas.push(novaTarefa);
        renderizarTarefas();
        input.value = '';
        removeSpan();
    }else{
        removeSpan();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a Tarefa');

        span.appendChild(msg);
        card.appendChild(span);
        
    }    
}

function removeSpan(){
    let spans = document.querySelectorAll('span');

    for (let i = 0; i < spans.length; i++) {
        card.removeChild(spans[i]);        
    }
}

function revomeTerefa(tar){
    // console.log(tar.textContent);
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);
    renderizarTarefas();
}