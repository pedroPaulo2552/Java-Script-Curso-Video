let btn = document.getElementById('btnAdd');
btn.addEventListener('click', addNumero);
let numeros = [];
let btnAnalise = document.getElementById('btn-abalisar');
btnAnalise.addEventListener('click', analisadorNumeros);
let blockRes = document.getElementById('bloco-resultado');

function addNumero() {
    blockRes.innerHTML = '';
    let num = document.getElementById('inum').value;
    if (num === '') {
        window.alert('DIGITE UM NÚMERO');
        return;
    }

    if (numeros.indexOf(Number(num)) ==! -1) {
        window.alert(`O VALOR ${num} JÁ FOI ADICIONADO! DIGITE OUTRO NÚMERO`);
        return;
    }

    num = Number(num);
    if (num < 1 || num > 100) {
        window.alert('NÚMERO INVALIDO! DIGITE UM NÚMERO ENTRE 1 E 100');
        return;
    }
    numeros.push(num);
    let sele = document.getElementById('numeros');
    let op = document.createElement('option');
    op.innerHTML = `Valor ${num} adicionado`;
    sele.appendChild(op);
} 

function analisadorNumeros() {  
    if (numeros.length === 0) {
        window.alert('NENHUM VALOR ADICIONADO! ADICIONE VALORES');
        return;
    }
    let soma = 0;
    let menorV = 101;  
    let maiorV = 0;
    blockRes.innerHTML = `Ao todo temos ${numeros.length} valores cadastrados`;
    for (let c in numeros) {
        if (numeros[c] > maiorV || menorV === '') {
            maiorV = numeros[c];
        };   

        if (numeros[c] < menorV || menorV === '') {
            menorV = numeros[c];
        };

        soma = soma + numeros[c];
    }
    let media = soma / numeros.length;
    blockRes.innerHTML += `<p>O menor valor digitado foi ${menorV}</p>`;
    blockRes.innerHTML += `<p>O maior valor digitado foi ${maiorV}</p>`;
    blockRes.innerHTML += `<p>A soma dos valores foi ${soma}</p>`;
    blockRes.innerHTML += `<p>A media dos valores foi ${media.toFixed(2)}</p>`;
}
