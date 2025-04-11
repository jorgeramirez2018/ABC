let colorEstado = 0;

function cambiarColor() {
    const titulo = document.getElementById("titulo");

    if (colorEstado === 0) {
        titulo.style.color = "tomato";
        colorEstado = 1;
    } else if (colorEstado === 1) {
        titulo.style.color = "yellow";
        colorEstado = 2;
    } else {
        titulo.style.color = "green";
        colorEstado = 0;
    }
}














































