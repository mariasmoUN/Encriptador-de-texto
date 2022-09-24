function focus() {
    let input = document.getElementById("input-texto");
    input.focus();
}

function value() {
    let input = document.getElementById("input-texto");
    input.value = "";
}

function encriptar() {
    let texto = document.getElementById("input-texto").value;
    let txt_cifrado = texto.replace(/e/gm, "enter");
    txt_cifrado = txt_cifrado.replace(/o/gm, "ober");
    txt_cifrado = txt_cifrado.replace(/i/gm, "imes");
    txt_cifrado = txt_cifrado.replace(/a/gm, "ai");
    txt_cifrado = txt_cifrado.replace(/u/gm, "ufat");

    if (/[^a-zñ ]/.test(texto)) {
        Swal.fire({
            icon: 'error',
            iconColor: '#b9ab9c',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#b9ab9c',
            text: 'Solo se permiten letras minusculas y sin acento',
          });
    }
    else if (texto.length === 0) {
        Swal.fire({
            icon: 'error',
            iconColor: '#b9ab9c',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#b9ab9c',
            text: 'El campo de texto está vacio, escriba el texto que desea encriptar',
          });
    }
    else {
        document.getElementById("texto1-contder").style.display = "none";
        document.getElementById("texto2-contder").style.display = "none";
        document.getElementById("output-texto").style.display = "inline-block";
        document.getElementById("output-texto").innerHTML = txt_cifrado;
        
        value();
    }
}

function desencriptar() {
    let texto = document.getElementById("input-texto").value;
    let txt_cifrado = texto.replace(/enter/gm, "e");
    txt_cifrado = txt_cifrado.replace(/ober/gm, "o");
    txt_cifrado = txt_cifrado.replace(/imes/gm, "i");
    txt_cifrado = txt_cifrado.replace(/ai/gm, "a");
    txt_cifrado = txt_cifrado.replace(/ufat/gm, "u");

    if (texto.length === 0) {
        Swal.fire({
            icon: 'error',
            iconColor: '#b9ab9c',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#b9ab9c',
            text: 'El campo de texto está vacio, escriba el texto que desea desencriptar',
        });
    }

    else {
    document.getElementById("texto1-contder").style.display = "none";
    document.getElementById("texto2-contder").style.display = "none";
    document.getElementById("output-texto").style.display = "inline-block";
    document.getElementById("output-texto").innerHTML = txt_cifrado;

    value();    
    }
}

function copiar() {
    let contenido = document.querySelector("#output-texto");
    contenido.select();
    document.execCommand("copy");
    Swal.fire({
        icon: 'success',
        iconColor: '#b9ab9c',
        background: '#E3E0DE',
        title: '¡Bien!',
        confirmButtonColor: '#b9ab9c',
        text: 'Texto copiado correctamente',
    });
}

focus();
value();