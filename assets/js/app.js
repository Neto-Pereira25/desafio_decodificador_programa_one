const divImg = document.querySelector('.decript-texto div');
const divMsg = document.querySelector('.decript-texto div+div');

// criptografia
const btnCript = document.querySelector('.cript');

btnCript.addEventListener('click', function() {
    const texto = document.querySelector('.texto-inserido').value;
    const textoCriptografado = criptografar(texto);
    exibirTexto(textoCriptografado);
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
    const texto = document.querySelector('.texto-inserido').value;
    const textoDescriptografado = descriptografar(texto);
    exibirTexto(textoDescriptografado);
});

function descriptografar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// copiar
// const btnCopiarTexto = document.querySelector('.decript-texto > button');

// console.log(btnCopiarTexto);

// btnCopiarTexto.addEventListener('click', function() {
//     alert('O COPIAR PEGOU');

//     const section = document.querySelector('.decript-texto');
//     const divMsgCripto = section.querySelector('div');

//     section.removeChild(divMsgCripto);
//     section.appendChild(divImg);
//     section.appendChild(divMsg);
// });

// exibir texto na tela
function exibirTexto(texto) {
    const section = document.querySelector('.decript-texto');

    section.removeChild(divImg);
    section.removeChild(divMsg);

    const div = document.createElement('div');
    const p = document.createElement('p');
    const btnCopiar = document.createElement('button');

    for (const letra of texto) {
        p.innerText += letra;
    }

    p.classList.add('texto-criptografado');

    div.appendChild(p);
    section.appendChild(div);

    btnCopiar.classList.add('btn-copiar');
    btnCopiar.textContent = 'Copiar';

    section.appendChild(btnCopiar);
    section.style.justifyContent = 'space-between';

    btnCopiar.addEventListener('click', function() {
        const texto = document.querySelector('.texto-criptografado').textContent;

        navigator.clipboard.writeText(texto)
            .then(() => {
                alert('Texto copiado com sucesso');
            })
            .catch(err => {
                console.error('Falha ao copiar o texto', err);
            });
    });

    btnCopiar.addEventListener('click', function(event) {

        const button = event.target;
        const section = document.querySelector('.decript-texto');
        const divMsgCripto = section.querySelector('div');
        const textarea = document.querySelector('.texto-inserido');

        section.style.justifyContent = 'center';
        textarea.value = '';
    
        section.removeChild(divMsgCripto);
        section.appendChild(divImg);
        section.appendChild(divMsg);
        button.remove();
    });

    
}