document.addEventListener("DOMContentLoaded", function() {

    // Obtener los elementos del DOM
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");

    // Función para abrir el menú lateral
    menuToggle.addEventListener("click", () => {
        sideMenu.classList.add("open"); // Agrega la clase "open" para mostrar el menú
    });

    // Función para cerrar el menú lateral
    closeMenu.addEventListener("click", () => {
        sideMenu.classList.remove("open"); // Elimina la clase "open" para ocultar el menú
    });

    // Función de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});
