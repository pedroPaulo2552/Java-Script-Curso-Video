let btn = document.getElementById('btn');
btn.addEventListener('click', gerarTabuada);

function gerarTabuada() {
    let numero = document.getElementById('inum').value;
    if (numero === '') {
        window.alert('ADICIONE UM NÚMERO!');
        return;
    }
    numero = Number(numero);
    let c = 0;

    let sele = document.getElementById('itab');
    sele.innerHTML = ' '
    while (c <=10) {
        let op = document.createElement('option');
        op.innerHTML = `${numero} x ${c} = ${numero * c}`;
        sele.appendChild(op);
        c++;
    }
}