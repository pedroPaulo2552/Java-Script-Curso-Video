let botao = document.getElementById('btn');
botao.addEventListener('click', contagem);

function contagem() {
    let blockResp = document.getElementById('block-contagem');
    let i = document.getElementById('iinicio').value;
    if (i === '') {
        blockResp.innerHTML = ''
        blockResp.innerHTML = 'Impossivel Contar!'
        return;
    }
    i = Number(i);
    
    let f = document.getElementById('ifim').value;
    if (f === '') {
        blockResp.innerHTML = ''
        blockResp.innerHTML = 'Impossivel Contar!'
        return;
    }
    f = Number(f);

    let pass = document.getElementById('ipasso').value;
    if (pass === '') {
         blockResp.innerHTML = ''
        blockResp.innerHTML = 'Impossivel Contar!'
        return;
    }
    pass = Number(pass);

    if (f > i) {
        blockResp.innerHTML = ''
        while (i <= f) {
            blockResp.innerHTML += `${i}...`;
            i = i + pass;
        }
    } else {
        blockResp.innerHTML = ''
        while (i >= f) {
            blockResp.innerHTML += `${i}...`;
            i = i - pass;
        }
    }
}