/**
 * Archivo: js/script.js
 * Funcionalidad para la Ing. Mónica Toaza P. Web:
 * 1. Navegación fluida (Smooth Scrolling).
 * 2. Funcionalidad básica del carrito (Placeholder).
 */

document.addEventListener('DOMContentLoaded', () => {
    // Offset para el encabezado fijo (ajusta el destino del scroll)
    const headerOffset = 80; 

    // 1. Navegación Fluida (Smooth Scrolling)
    const navLinks = document.querySelectorAll('.nav-link.scrollto');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Funcionalidad Básica de Carrito (Placeholder)
    const cartButton = document.querySelector('.navbar .btn-cta');

    if (cartButton) {
        cartButton.addEventListener('click', (e) => {
            alert("🛒 ¡Redirigiendo al Carrito de Compras! (Funcionalidad completa requiere eCommerce backend)");
        });
    }

    // [INTEGRACIÓN DE CHATBOT]
    // Aquí es donde se agregaría el script de inicialización de la plataforma de IA (ej. Botpress).
    // Por ahora, solo se ejecuta la lógica estática.
});