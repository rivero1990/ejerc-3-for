const cantMensajes = document.querySelector("#numero-msjs");
const mensajesRecicibidos = document.querySelector("#contenedor-msjs");

function mensajesGenerados() {
    let eleccionMensajes = cantMensajes.value;
    mensajesRecicibidos.innerHTML = "";

    for (let i = 0; i < eleccionMensajes; i++) {
        mensajesRecicibidos.innerHTML += "<h2>Javascript</h2>";
    }
    
}