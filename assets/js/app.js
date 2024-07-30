const divResultado = document.querySelector('.resultado');
const mensagemInicial = document.querySelector('.mensagem-inicial');

divResultado.style.display = 'none';

// criptografia
const btnCript = document.querySelector('.cript');

btnCript.addEventListener('click', function() {
    const texto = document.querySelector('.texto-inserido');

    if(texto.value){
        const textoCriptografado = criptografar(texto.value);
        exibirTexto(textoCriptografado);
    } 
    texto.value = '';

});

function criptografar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// descriptografia
const btnDescript = document.querySelector('.decript');
btnDescript.addEventListener('click', function() {
    const texto = document.querySelector('.texto-inserido');

    if(texto.value){
        const textoDescriptografado = descriptografar(texto.value);
        exibirTexto(textoDescriptografado);
    } 
    texto.value = '';
});

function descriptografar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// exibir texto na tela
function exibirTexto(texto) {
    if(texto) {
        document.querySelector('.texto-criptografado').innerText = texto;
        mensagemInicial.style.display = 'none';
        divResultado.style.display = 'flex';
    } else {
        mensagemInicial.style.display = 'flex';
        divResultado.style.display = 'none';
    }
}

document.querySelector('.btn-copiar').addEventListener('click', function() {
    const texto = document.querySelector('.texto-criptografado').textContent;

    navigator.clipboard.writeText(texto)
        .then(() => {
            document.querySelector('.texto-criptografado').innerText = 'Nenhuma messagem';
        })
        .catch(err => {
            alert('Erro ao copiar mensagem');
        });
});