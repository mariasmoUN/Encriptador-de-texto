function focus() {
    var input = document.getElementById("input-texto");
    input.focus();
}

function value() {
    var input = document.getElementById("input-texto");
    input.value = "";
}

function encriptar() {
    var texto = document.getElementById("input-texto").value;
    var txt_cifrado = texto.replace(/e/gm, "enter");
    var txt_cifrado = txt_cifrado.replace(/o/gm, "ober");
    var txt_cifrado = txt_cifrado.replace(/i/gm, "imes");
    var txt_cifrado = txt_cifrado.replace(/a/gm, "ai");
    var txt_cifrado = txt_cifrado.replace(/u/gm, "ufat");

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
    var texto = document.getElementById("input-texto").value;
    var txt_cifrado = texto.replace(/enter/gm, "e");
    var txt_cifrado = txt_cifrado.replace(/ober/gm, "o");
    var txt_cifrado = txt_cifrado.replace(/imes/gm, "i");
    var txt_cifrado = txt_cifrado.replace(/ai/gm, "a");
    var txt_cifrado = txt_cifrado.replace(/ufat/gm, "u");

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
    var contenido = document.querySelector("#output-texto");
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