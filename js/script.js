document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos una referencia al botón y a la sección de la galería
    var button = document.getElementById("scrollToGallery");
    var gallerySection = document.querySelector(".gallery");

    // Agregamos un evento de clic al botón
    button.addEventListener("click", function() {
        // Hacemos scroll suave a la sección de la galería
        gallerySection.scrollIntoView({ behavior: 'smooth' });
    });
});
