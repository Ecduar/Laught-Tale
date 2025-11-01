// Importamos el CSS para que Webpack lo procese
import './style.css';

// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Funcionalidad del Menú Desplegable ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Añade o quita la clase 'active' al menú
            navMenu.classList.toggle('active');
            
            // Opcional: Accesibilidad (ARIA)
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- 2. Efecto Parallax en Scroll ---
    const parallaxBg = document.querySelector('.parallax-bg');

    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            // Obtiene la posición de scroll vertical
            const scrollPosition = window.pageYOffset;
            
            // Mueve la imagen de fondo más lento que el scroll
            // El '0.5' es la velocidad. Puedes ajustarlo.
            // Usamos 'translateY' para mover el fondo verticalmente
            parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    }

    // Nota: El carrusel se maneja puramente con la animación CSS
    // que definimos en 'style.css'. No requiere JS para este diseño.

});