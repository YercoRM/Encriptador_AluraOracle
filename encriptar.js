var entrada = document.querySelector(".caja_encriptador")
var salida = document.querySelector(".caja_desencriptador")
var contenido_Noencontrado = document.querySelector(".contenido_no_encontrado")
var contenido_encontrado = document.querySelector(".contenido_encontrado")

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

document.querySelector(".contenido_inicial").style.display = 'block';
document.querySelector(".contenido_no_encontrado").style.display = 'none';
document.querySelector(".contenido_encontrado").style.display = 'none';
document.querySelector(".copiado").style.display = 'none';

function boton_encriptar(){
    if(entrada.value.trim() === ""){
        document.querySelector(".contenido_inicial").style.display = 'none';
        document.querySelector(".contenido_no_encontrado").style.display = 'block';
        document.querySelector(".contenido_encontrado").style.display = 'none';
        document.querySelector(".copiado").style.display = 'none';
    } else{
        document.querySelector(".contenido_inicial").style.display = 'none';
        document.querySelector(".contenido_no_encontrado").style.display = 'none';
        document.querySelector(".contenido_encontrado").style.display = 'block';
        document.querySelector(".copiado").style.display = 'none';
    }
    var texto = encriptar(entrada.value.trim());
    salida.value = texto;
    salida.style.backgroundImage = "none";
    entrada.value = ""
}

function encriptar(textoEncriptar){
    var matriz = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase();

    for(var i=0; i<matriz.length; i++){
        if(textoEncriptar.includes(matriz[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return textoEncriptar;
}

function boton_desencriptar(){
    if(entrada.value == ""){
        document.querySelector(".contenido_inicial").style.display = 'none';
        document.querySelector(".contenido_no_encontrado").style.display = 'block';
        document.querySelector(".contenido_encontrado").style.display = 'none';
        document.querySelector(".copiado").style.display = 'none';
    } else{
        document.querySelector(".contenido_inicial").style.display = 'none';
        document.querySelector(".contenido_no_encontrado").style.display = 'none';
        document.querySelector(".contenido_encontrado").style.display = 'block';
        document.querySelector(".copiado").style.display = 'none';
    }
    var texto = desencriptar(entrada.value);
    salida.value = texto;
    salida.style.backgroundImage = "none";
    entrada.value = ""
}

function desencriptar(textoEncriptar){
    var matriz = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase();

    for(var i=0; i<matriz.length; i++){
        if(textoEncriptar.includes(matriz[i][1])){
            textoEncriptar = textoEncriptar.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return textoEncriptar;
}

function copiar(){
    salida.select()
    navigator.clipboard.writeText(salida.value)
    document.querySelector(".copiado").style.display = 'block';
}

