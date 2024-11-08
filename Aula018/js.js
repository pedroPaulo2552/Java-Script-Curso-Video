let botao = document.getElementById('btn');
let block = document.getElementById('block-tarefas');
botao.addEventListener('click', addTarefa);
let tarefas = [];

function addTarefa() {
    let trf = document.getElementById('itext').value;
    if (trf === '') {
        window.alert('ERRO! DIGITE UMA TAREFA');
        return;
    };

    if(tarefas.indexOf(trf) !== -1) {
        window.alert('ERRO! TAREFA JÁ ADICIONADA');
        return;
    }

    tarefas.push(trf);
    let input = document.createElement('input')
}