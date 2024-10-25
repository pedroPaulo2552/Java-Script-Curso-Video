let botao = document.getElementById('btn');
botao.addEventListener('click', calcMedia);

function calcMedia() {
    let nome = document.getElementById('inome').value;
    if (nome === '') {
        window.alert("NOME INVALIDO! Adicione o nome do aluno(a) no campo correspondente")
        return;
    }
    let nota1 = document.getElementById('inota1').value;
    nota1 = Number(nota1);
    if (nota1 === 0) {
        window.alert('NOTA INVALIDA! Adicione a nota no campo correspondente');
        return;
    }

    let nota2 = document.getElementById('inota2').value;
    nota2 = Number(nota2);
    if (nota2 === 0) {
        window.alert('NOTA INVALIDA! Adicione a nota no campo correspondente');
        return;
    }

    let nota3 = document.getElementById('inota3').value;
    nota3 = Number(nota3);
    if (nota3 === 0) {
        window.alert('NOTA INVALIDA! Adicione a nota no campo correspondente');
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3
    let blocoResp = document.getElementById('block-resp');
    if (media <= 4) {
        blocoResp.innerHTML = `<h2>A média do aluno(a) ${nome} foi ${media}. <strong>REPROVADO!</strong></h2>`;
        return
    } else if(media < 6) {
        blocoResp.innerHTML = `<h2>A média do aluno(a) ${nome} foi ${media}. <strong>RECUPERAÇÃO!</strong></h2>`;
    } else {
        blocoResp.innerHTML = `<h2>A média do aluno(a) ${nome} foi <strong>${media}</strong>. <strong>APROVADO!</strong></h2>`; 
    }
};