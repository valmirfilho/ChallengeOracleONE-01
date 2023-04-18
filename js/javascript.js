const textoCriptografar = document.getElementById("texto-criptografar")
const enviarCriptografia = document.getElementById("enviar-Criptografia")



enviarCriptografia.addEventListener('click', function() {

    textoParaCriptografa   = textoCriptografar.value;
    console.log(textoParaCriptografa)

})



function criptografar() {
    let texto = document.getElementById("texto-criptografar");

    for ( let letra of texto ) {

        if(letra === a) {
            texto[letra] = "ai"
            
        }
        if(letra === e) {
            texto[letra] = "enter"
            
        }
        if(letra === i) {
            texto[letra] = "imes"
            
        }
        if(letra === o) {
            texto[letra] = "ober"
            
        }
        if(letra === u) {
            texto[letra] = "ufat"
            
        }
        console.log(texto)
        
    }
}
