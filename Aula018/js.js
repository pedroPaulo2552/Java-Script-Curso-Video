let botao = document.getElementById('btn');
let block = document.getElementById('block-tarefas');
botao.addEventListener('click', addTarefa);
let tarefas = [];

function addTarefa() {
    let iptTxt = document.getElementById('itext');
    let c = 0;
    let trf = document.getElementById('itext').value;
    if (trf === '') {
        window.alert('ERRO! DIGITE UMA TAREFA');
        return;
    };

    if(tarefas.indexOf(trf) !== -1) {
        window.alert('ERRO! TAREFA JÁ ADICIONADA');
        return;
    }

    for (c in tarefas) {
        if (trf.toLowerCase() === tarefas[c].toLowerCase()) {
            window.alert('ERRO! TAREFA JÁ ADICIONADA');
            return;
        }
    }

    block.innerHTML += '<br>';
    tarefas.push(trf);
    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute('id', trf);
    input.setAttribute('class', 'inp-check');
    let lbl = document.createElement('label');
    lbl.setAttribute("for", trf);
    lbl.innerHTML = trf;
    block.appendChild(input);
    block.appendChild(lbl);
    iptTxt.value = '';
    iptTxt.focus()
}