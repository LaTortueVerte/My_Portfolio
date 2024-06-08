
let isScrolling;
let user_scroll = true;
let is_English = false;

// get year

document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
});

// is Scrolling 

window.addEventListener('scroll', function() {
    // Effacez le précédent timer
    window.clearTimeout(isScrolling);

    // Démarrez un nouveau timer qui se déclenche après le délai défini
    isScrolling = setTimeout(function() {
        console.log('Défilement terminé');
        // Ajoutez ici le code à exécuter lorsque le défilement est terminé
    }, 4000);

    user_scroll = true;
    console.log("znd")
});

// smooth scroll

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les liens du menu
    const links = document.querySelectorAll('nav ul li a');

    // Pour chaque lien, ajoutez un écouteur d'événements au clic
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Empêchez le comportement par défaut du lien (téléportation)
            event.preventDefault();
            
            // Obtenez l'ID de la section cible à partir de l'attribut href
            const targetId = link.getAttribute('href').substring(1);
            
            // Sélectionnez la section cible
            const targetSection = document.getElementById(targetId);

            // Réinitialisez la variable user_scroll
            user_scroll = false;
            
            // Défilez jusqu'à la section cible en douceur
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Alignez la section en haut de la fenêtre
            });

            // Ajoutez les classes CSS appropriées
            document.querySelector('nav ul').classList.add('collapsed');
            document.querySelector('header').classList.add('collapsed');
        });
    });
});

// collapsing navigation menu

let lastScrollTop = 0;

// Fonction pour gérer le défilement
function handleScroll() {
    if (user_scroll == true)
    {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Vérifie si l'utilisateur fait défiler vers le haut ou vers le bas
    if (currentScroll > lastScrollTop) {
        // Scroll vers le bas - replie le menu
        document.querySelector('nav ul').classList.add('collapsed');
        document.querySelector('header').classList.add('collapsed');
    } else {
        // Scroll vers le haut - déplie le menu
        document.querySelector('nav ul').classList.remove('collapsed');
        document.querySelector('header').classList.remove('collapsed');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
}

// Ajoute un écouteur d'événement de défilement
window.addEventListener('scroll', handleScroll);


// blur img 

document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll(".image-container-prj");

    imageContainers.forEach(function(container) {
        const projectImage = container.querySelector(".project-img");

        container.addEventListener("mouseenter", function() {
            projectImage.style.filter = "blur(8px)";
            projectImage.style.webkitFilter = "blur(8px)";
        });

        container.addEventListener("mouseleave", function() {
            projectImage.style.filter = "none";
            projectImage.style.webkitFilter = "none";
        });
    });
});

// menu 

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les liens de la liste de navigation
    const links = document.querySelectorAll('#menu a');

    // Parcourez chaque lien et ajoutez un écouteur d'événements au clic
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Empêchez le comportement par défaut du lien (téléportation)
            event.preventDefault();
            
            // Obtenez l'ID de la section cible à partir de l'attribut href du lien
            const targetId = link.getAttribute('href').substring(1);
            
            // Sélectionnez la section cible
            const targetSection = document.getElementById(targetId);
            
            // Déterminez la position de défilement en y soustrayant 50 pixels
            const offsetTop = targetSection.offsetTop + 200;
            
            // Faites défiler jusqu'à la section cible en douceur avec le décalage
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

/* french / english */ 

document.getElementById('language-toggle').addEventListener('click', function() {
    // Détermine la langue actuelle de la page
    const currentLang = document.documentElement.lang;

    // Redirige vers la page appropriée en fonction de la langue actuelle
    if (currentLang === 'fr') {
        window.location.href = 'index.html';
    } else if (currentLang === 'en') {
        window.location.href = 'index-fr.html';
    }
});