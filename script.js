document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración para animaciones de revelado al hacer scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Cuántos píxeles antes de entrar en viewport se activa

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Llamar una vez al inicio por si los elementos ya están en la pantalla
    revealOnScroll();

    // Efecto sutil de Navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 10, 0.8)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Interacción suave para el ancla 'Descargar'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Los botones de descarga ahora apuntan a GitHub Releases
    // Ya no se requiere chequeo local.
});
