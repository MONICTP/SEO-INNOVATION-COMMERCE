CSS

/* Variables y Reset Básico */
:root {
    /* Paleta Corporativa */
    --color-primary: #003366; /* Azul Marino */
    --color-secondary: #333333; /* Gris Oscuro */
    --color-accent: #007f5f; /* Verde Botella (Acento) */
    --color-light: #ffffff;
    --color-bg-light: #f4f7f6;
    --font-main: 'Open Sans', sans-serif;
    --spacing-unit: 1.5rem;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-main);
    color: var(--color-secondary);
    line-height: 1.6;
    background-color: var(--color-light);
    text-rendering: optimizeLegibility;
}

/* Utilidades */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-unit) 0;
}

.cta-button {
    display: inline-block;
    background-color: var(--color-accent);
    color: var(--color-light);
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 700;
    text-align: center;
    transition: background-color 0.3s ease, transform 0.2s ease;
    border: none;
    cursor: pointer;
}

.cta-button:hover, .cta-button:focus {
    background-color: #005f4c;
    transform: translateY(-2px);
}

/* Header y Navegación */
header {
    background-color: var(--color-primary);
    color: var(--color-light);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-light);
    text-decoration: none;
}

/* Menú Mobile */
nav ul {
    list-style: none;
    display: none;
    flex-direction: column;
    position: absolute;
    width: 100%;
    left: 0;
    top: 60px; 
    background-color: var(--color-primary);
    padding: 1rem 0;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}

nav ul.open {
    display: flex;
}

nav a {
    color: var(--color-light);
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 1rem;
    display: block;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--color-accent);
}

.menu-toggle {
    display: block;
    background: none;
    border: none;
    color: var(--color-light);
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
#hero {
    background-color: var(--color-primary);
    color: var(--color-light);
    text-align: center;
    padding: 4rem 0 6rem 0;
}

#hero h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: 700;
}

#hero h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #b3cde0;
}

/* Secciones Generales */
section {
    padding: 4rem 0;
}

section:nth-child(odd) {
    background-color: var(--color-bg-light);
}

h2.section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--color-primary);
    border-bottom: 3px solid var(--color-accent);
    padding-bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: fit-content;
}

/* Servicios */
.servicios-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.servicio-item {
    background-color: var(--color-light);
    padding: var(--spacing-unit);
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    text-align: center;
    border-top: 5px solid var(--color-accent);
    transition: transform 0.3s ease;
}

.servicio-item:hover {
    transform: translateY(-5px);
}

.servicio-item h3 {
    color: var(--color-primary);
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
}

/* Experiencia (Autoridad) */
#experiencia .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.profile-card {
    background-color: var(--color-light);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
}

.profile-card h3 {
    color: var(--color-primary);
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
}

.profile-card p {
    font-style: italic;
    color: var(--color-accent);
    margin-bottom: 1.5rem;
}

.profile-card ul {
    list-style: none;
    text-align: left;
    padding-left: 0;
}

.profile-card li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
}

.profile-card li::before {
    content: "✓";
    color: var(--color-accent);
    font-weight: 700;
    position: absolute;
    left: 0;
}

/* Footer y Formulario */
footer {
    background-color: var(--color-secondary);
    color: var(--color-light);
    padding: 3rem 0 1rem 0;
    text-align: center;
}

.form-content {
    max-width: 500px;
    margin: 0 auto 2rem auto;
    padding: 1rem;
}

.form-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-accent);
}

.contact-form input[type="text"],
.contact-form input[type="email"] {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: inherit;
}

.social-links a {
    color: var(--color-light);
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: var(--color-accent);
}

.footer-bottom {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.85rem;
}

/* Media Queries (Desktop) */
@media (min-width: 768px) {
    
    nav ul {
        display: flex;
        flex-direction: row;
        position: static;
        box-shadow: none;
        gap: 1.5rem;
    }

    .menu-toggle {
        display: none;
    }

    #hero h1 {
        font-size: 3rem;
    }

    .servicios-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    
    .servicios-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    #experiencia .content-wrapper {
        flex-direction: row;
        text-align: left;
        align-items: flex-start;
    }
    
    .profile-card {
        max-width: 350px;
        text-align: left;
    }
}
3. script.js (El Motor: Lógica de Inyección de Contenido)
Este código se encarga de leer el data.json y usar esa información para construir y poblar dinámicamente el HTML.

JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch de los datos (simulando una API o un archivo local)
    fetch('./data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderPage(data);
            setupMobileMenu();
        })
        .catch(error => console.error('Error fetching or rendering data:', error));
});


// Función principal para renderizar toda la página con los datos
function renderPage(data) {
    // ** A. Renderizar Metadatos y Brand **
    document.title = data.site_metadata.title;
    
    // ** B. Renderizar Header y Navegación **
    const headerElement = document.querySelector('header .nav-content');
    const navUl = document.getElementById('main-nav-list');
    
    // Logo
    const logo = document.createElement('a');
    logo.href = '#hero';
    logo.className = 'logo';
    logo.textContent = data.brand.name;
    headerElement.insertBefore(logo, headerElement.firstChild);

    // Navegación
    data.navigation.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.anchor;
        a.textContent = item.label;
        li.appendChild(a);
        navUl.appendChild(li);
    });

    // ** C. Renderizar HERO **
    const heroSection = document.getElementById('hero');
    heroSection.querySelector('h1').innerHTML = data.sections.hero.headline.replace('Ing. Mónica Toaza', `<strong>${data.brand.founder_name}</strong>`);
    heroSection.querySelector('h2').innerHTML = data.sections.hero.subheadline.replace('**Experiencia Comprobada**', '<strong>Experiencia Comprobada</strong>');
    
    const heroCta = heroSection.querySelector('.cta-button');
    heroCta.textContent = data.sections.hero.cta_text;
    heroCta.href = data.sections.hero.cta_link;

    // ** D. Renderizar SERVICIOS **
    const serviciosGrid = document.querySelector('.servicios-grid');
    serviciosGrid.innerHTML = ''; // Limpiar cualquier contenido por defecto
    data.sections.servicios.forEach(service => {
        const item = document.createElement('div');
        item.className = 'servicio-item';
        item.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;
        serviciosGrid.appendChild(item);
    });

    // ** E. Renderizar EXPERIENCIA **
    const experienciaSection = document.getElementById('experiencia');
    experienciaSection.querySelector('.section-title').textContent = data.sections.experiencia.title;
    
    const profileCard = experienciaSection.querySelector('.profile-card');
    profileCard.querySelector('h3').textContent = data.brand.founder_name;
    profileCard.querySelector('p').textContent = data.sections.experiencia.subtitle;
    
    const highlightsList = profileCard.querySelector('ul');
    highlightsList.innerHTML = '';
    data.sections.experiencia.highlights.forEach(highlight => {
        const li = document.createElement('li');
        // Usamos innerHTML para permitir el bolds (**) del JSON
        li.innerHTML = highlight.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        highlightsList.appendChild(li);
    });
    
    experienciaSection.querySelector('#experiencia-philosophy').textContent = data.sections.experiencia.philosophy;
    experienciaSection.querySelector('#experiencia-cta').textContent = data.sections.experiencia.secondary_cta_text;

    // ** F. Renderizar FOOTER **
    const footerElement = document.querySelector('footer');
    footerElement.querySelector('.form-content h3').textContent = data.footer.cta_headline;
    footerElement.querySelector('.form-content p:first-of-type').textContent = data.footer.cta_message;
    
    const socialLinks = footerElement.querySelector('.social-links');
    socialLinks.innerHTML = '';
    data.footer.social_media.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.setAttribute('aria-label', `${link.platform} de ${data.brand.founder_name}`);
        a.textContent = link.icon;
        socialLinks.appendChild(a);
    });

    footerElement.querySelector('.footer-bottom p').textContent = data.footer.copyright;
}

// Función para la funcionalidad del menú móvil
function setupMobileMenu() {
    const toggleButton = document.getElementById('toggleButton');
    const mainNavUl = document.getElementById('main-nav-list');
    const navLinks = mainNavUl.querySelectorAll('a');

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        mainNavUl.classList.toggle('open');
    });

    // Cerrar menú al hacer clic en un enlace (en mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                mainNavUl.classList.remove('open');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
}