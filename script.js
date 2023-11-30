const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();

}); 

function mostrarMenu() {
    hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('ocultar');
    });
}

// Definición de la función cerrarMenu
function cerrarMenu() {
    // Iterar sobre cada enlace en el array enlaces
    enlaces.forEach(enlace => {
        // Agregar un event listener para el evento 'click' en cada enlace
        enlace.addEventListener('click', (e) => {
            // Verificar si el elemento clickeado es una etiqueta 'A' (hipervínculo)
            if (e.target.tagName === 'A') {
                // Si es un hipervínculo, agregar la clase 'ocultar' a la navegación
                navegacion.classList.add('ocultar');
            }
        });
    });
}





