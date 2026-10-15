// Cuando se envia el formulario de contacto, se muestra un mensaje de gracias
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    document.getElementById("mensaje-enviado").style.display = "block";
    formulario.reset();
});
