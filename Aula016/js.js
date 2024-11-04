let btn = document.getElementById('btn');
btn.addEventListener('click', gerarTabuada);

function gerarTabuada() {
    let numero = document.getElementById('inum').value;
    if (numero === '') {
        window.alert('ADICIONE UM NÚMERO!');
        return;
    }
    numero = Number(numero);
    let c = numero;

    let sele = document.getElementById('itab');

    let op = document.createElement('tab', 'option');
    op.innerHTML = 'teste'
    sele.appendChild(op);
}