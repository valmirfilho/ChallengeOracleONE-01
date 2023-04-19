
function criptografar(texto) {
    let resultado = ""
    
    for ( let letra of texto ) {
        

        if(letra === "a") {
            letra = "ai"

        }
        else if(letra === "e") {
            letra = "enter"
            
        }
        else if(letra === "i") {
            letra = "imes"
            
        }
        else if(letra === "o") {
            letra = "ober"
            
        }
        else if(letra === "u") {
            letra = "ufat"
            
        }
      
        resultado += letra
        
    } 
    console.log(resultado)
    return resultado
    
}
function descriptografar(textoParaDescriptografar) {
    let textoDescriptografado = textoParaDescriptografar.replace(/enter/g, "e")
                                                        .replace(/imes/g, "i")
                                                        .replace(/ai/g, "a")
                                                        .replace(/ober/g, "o")
                                                        .replace(/ufat/g, "u")
                                                     
    return textoDescriptografado;
}


const textoCriptografar = document.getElementById("texto-criptografar")
const enviarCriptografia = document.getElementById("enviar-Criptografia")



enviarCriptografia.addEventListener('click', function() {

    textoParaCriptografa   = textoCriptografar.value
    const resultadoCriptografia = criptografar(textoParaCriptografa)
    document.getElementById("texto-decriptografar").value = resultadoCriptografia;

})

const textoDescriptografar = document.getElementById("texto-decriptografar")
const enviarDescriptografia = document.getElementById("enviar-desciptografia")

enviarDescriptografia.addEventListener('click', function() {

    textoParaDescriptografar = textoDescriptografar.value
    const resultadoDescriptografia = descriptografar(textoParaDescriptografar)
    document.getElementById("texto-criptografar").value = resultadoDescriptografia

})