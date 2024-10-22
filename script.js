document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los enlaces del menú lateral
    const menuLinks = document.querySelectorAll('.menu-link');
    // Recorre cada enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // Oculta todas las secciones
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            // Muestra la sección correspondiente
            const sectionId = `${this.getAttribute('data-section')}-content`;
            document.getElementById(sectionId).classList.add('active');
        });
    });
});
