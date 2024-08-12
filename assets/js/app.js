const divResultado = document.querySelector('.resultado');
const mensagemInicial = document.querySelector('.mensagem-inicial');

divResultado.style.display = 'none';

// criptografia
const btnCript = document.querySelector('.cript');

btnCript.addEventListener('click', function () {
    const texto = document.querySelector('.texto-inserido');

    // falta validar texto com acento e maiúscula

    if (texto.value) {
        const textoCriptografado = criptografar(texto.value);
        exibirTexto(textoCriptografado);
    }
    texto.value = '';

});

function criptografar(texto) {
    if (temLetraMaiusculaOuAcentuada(texto)) {
        alert('Não é possível criptografar este texto, pois ele contém letra maiúsucla ou letras acentuadas');
        return;
    }
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// descriptografia
const btnDescript = document.querySelector('.decript');
btnDescript.addEventListener('click', function () {
    const texto = document.querySelector('.texto-inserido');

    // falta validar texto com acento e maiúscula

    if (texto.value) {
        const textoDescriptografado = descriptografar(texto.value);
        exibirTexto(textoDescriptografado);
    }
    texto.value = '';
});

function descriptografar(texto) {
    if (temLetraMaiusculaOuAcentuada(texto)) {
        alert('Não é possível descriptografar este texto, pois ele contém letra maiúsucla ou letras acentuadas');
        return;
    }
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// função para verificar letras maiúsculas e acentuadas
function temLetraMaiusculaOuAcentuada(texto) {
    const regra = /[A-ZÀ-ÖØ-ÝÀ-ÿ!@#$%^&*()_+={}\[\]:;"'<>?/\\|`~\-]/;

    return regra.test(texto);
}

// exibir texto na tela
function exibirTexto(texto) {
    if (texto) {
        document.querySelector('.texto-criptografado').innerText = texto;
        mensagemInicial.style.display = 'none';
        divResultado.style.display = 'flex';
    } else {
        mensagemInicial.style.display = 'flex';
        divResultado.style.display = 'none';
    }
}

document.querySelector('.btn-copiar').addEventListener('click', function () {
    const texto = document.querySelector('.texto-criptografado').textContent;

    navigator.clipboard.writeText(texto)
        .then(() => {
            document.querySelector('.texto-criptografado').innerText = 'Nenhuma messagem encontrada';
        })
        .catch(err => {
            alert('Erro ao copiar mensagem');
        });
});