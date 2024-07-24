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
    const textoCript = [];

    for(let letra of texto) {
        if (letra.toLowerCase() === 'a') {
            letra = 'ai';
        }

        if (letra.toLowerCase() === 'e') {
            letra = 'enter';
        }
        
        if (letra.toLowerCase() === 'i') {
            letra = 'imes';
        }
        
        if (letra.toLowerCase() === 'o') {
            letra = 'ober';
        }
        
        if (letra.toLowerCase() === 'u') {
            letra = 'ufat';
        }

        textoCript.push(letra);
    }
    return textoCript;
}

// descriptografia
const btnDescript = document.querySelector('.decript');
btnDescript.addEventListener('click', function() {
    const texto = document.querySelector('.texto-inserido').value;
    const textoDescriptografado = descriptografar(texto);
    exibirTexto(textoDescriptografado);
});

function descriptografar(texto) {
    if(texto.indexOf('ai')) {
        texto = texto.split('ai').join('a');
    }

    if(texto.indexOf('enter')) {
        texto = texto.split('enter').join('e');
    }

    if(texto.indexOf('imes')) {
        texto = texto.split('imes').join('i');
    }

    if(texto.indexOf('ober')) {
        texto = texto.split('ober').join('o');
    }

    if(texto.indexOf('ufat')) {
        texto = texto.split('ufat').join('u');
    }

    return texto;
}

// copiar
const btnCopiar = document.querySelector('.btn-copiar');
btnCopiar.addEventListener('click', function() {
    // let textoCopiado = document.querySelector('.texto-exibido');
    // console.log(textoCopiado);
    console.log('kkkk');
});

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

    p.classList.add('texto-exibido');

    div.appendChild(p);
    section.appendChild(div);

    btnCopiar.classList.add('btn-copiar');
    btnCopiar.textContent = 'Copiar';

    section.appendChild(btnCopiar);
}