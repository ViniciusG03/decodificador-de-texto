function criptografar(event) {
    event.preventDefault();
    try {
        let textoParaCriptografar = document.querySelector('.paraCriptografar').value;
        let img = document.querySelector('.retangulo_img');
        let h2 = document.querySelector('.info_h2');
        let p = document.querySelector('.info_p');
        let campoDoTexto = document.querySelector('.texto');
        let copiar = document.querySelector('.copiar');

        if (textoParaCriptografar != '') {

            img.style.display = 'none';
            h2.style.display = 'none';
            p.style.display = 'none';

            let textoCriptografado = textoParaCriptografar.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

            campoDoTexto.innerHTML = textoCriptografado;
            campoDoTexto.style.display = 'flex';  
            copiar.style.display = 'flex';

        }

    } catch (error) {
        console.log("Erro ao criptografar: " + error);
    }
}

function copiarTexto() {
    let campoDoTexto = document.querySelector('.texto');
    
    let textoParaCopiar = document.createElement('textarea');
    textoParaCopiar.value = campoDoTexto.textContent;
    document.body.appendChild(textoParaCopiar);
    textoParaCopiar.select();
    document.execCommand('copy');
    document.body.removeChild(textoParaCopiar);
    
    alert('Texto copiado com sucesso!');
    location.reload();
}

function descriptografar() {
    event.preventDefault();
    try {
        let textoParaDescriptografar = document.querySelector('.paraCriptografar').value;
        let img = document.querySelector('.retangulo_img');
        let h2 = document.querySelector('.info_h2');
        let p = document.querySelector('.info_p');
        let campoDoTexto = document.querySelector('.texto');
        let copiar = document.querySelector('.copiar');

        if (textoParaDescriptografar != '') {

            img.style.display = 'none';
            h2.style.display = 'none';
            p.style.display = 'none';

            let textoDescriptografado = textoParaDescriptografar.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

            campoDoTexto.innerHTML = textoDescriptografado;
            campoDoTexto.style.display = 'flex';  
            copiar.style.display = 'flex';

        }

    } catch (error) {
        console.log("Erro ao criptografar: " + error);
    }
}

document.getElementById('copiar').addEventListener('click', copiarTexto);
document.getElementById('criptografar').addEventListener('click', criptografar);
document.getElementById('descriptografar').addEventListener('click', descriptografar);