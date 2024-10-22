document.addEventListener('DOMContentLoaded', function() {
    var togglerIcon = document.querySelector('.toggler-icon');
    var navbarCollapse = document.getElementById('navbarContent');
    var toggler = document.querySelector('.navbar-toggler');

    // Cambiar el ícono del toggler
    navbarCollapse.addEventListener('shown.bs.collapse', function() {
        togglerIcon.innerHTML = '&times;'; // Cambia a 'x' al expandirse
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
        togglerIcon.innerHTML = '&#9776;'; // Vuelve al ícono de hamburguesa al cerrarse
    });

    // Cerrar el navbar al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        var isClickInsideNavbar = navbarCollapse.contains(event.target);
        var isNavbarExpanded = navbarCollapse.classList.contains('show');
        var isClickOnToggler = toggler.contains(event.target);

        if (!isClickInsideNavbar && isNavbarExpanded && !isClickOnToggler) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});