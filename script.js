// Code pour changer l'image aléatoire et afficher la barre de navigation après 2 secondes

window.onload = function() {
    // Code pour changer l'image aléatoire
    var imagesAvion = [
        "avionaircanadatop.webp",
        "Fleetaircanadatopimage.jpg",
        "aviondaircanada.webp"
        // Ajoutez ici d'autres noms de fichiers d'images
    ];
    
    // Fonction pour obtenir un indice d'image aléatoire
    function getRandomImageIndex() {
        return Math.floor(Math.random() * imagesAvion.length);
    }
    
    // Fonction pour changer l'image affichée
    function changeRandomImage() {
        var randomIndex = getRandomImageIndex();
        var imageElement = document.getElementById("imageAvion");
        imageElement.src = "photo/" + imagesAvion[randomIndex];
    }

    // Appeler la fonction pour changer l'image
    changeRandomImage();

    // Afficher la barre de navigation après 2 secondes
    setTimeout(function() {
        document.getElementById("nav-section").style.opacity = 1;
    }, 1000);
};


//AFFICHAGE AU DEFILEMENT
function showElementIfInViewport(className) {
    const element = document.querySelector(className);
    if (isElementInViewport(element) && !element.classList.contains('appear')) {
        element.classList.add('appear');
    }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Écouteur d'événement pour vérifier lors du défilement
window.addEventListener('scroll', function() {
    showElementIfInViewport('.ourpartners');
    showElementIfInViewport('.texttop');
    showElementIfInViewport('.twodiv');
    showElementIfInViewport('.aboutus');
    showElementIfInViewport('.staff');

});

// Appeler la fonction initiale pour vérifier au chargement de la page
showElementIfInViewport('.ourpartners');
showElementIfInViewport('.texttop');
showElementIfInViewport('.twodiv');
showElementIfInViewport('.aboutus');
showElementIfInViewport('.staff');


window.addEventListener("scroll", function () {
    var navSection = document.getElementById("nav-section");
    var boutonSection = document.querySelector(".bouton");
    var fleetSection = document.getElementById("fleet");
    var outfleetSection = document.querySelector(".outfleet");
    var navbarPlaceholder = document.querySelector(".navbar-placeholder"); // Ajout de cette ligne

    var scrollHeight = window.scrollY;
    var fleetSectionTop = fleetSection.offsetTop;
    var outfleetSectionTop = outfleetSection.offsetTop;

    if (scrollHeight < fleetSectionTop) {
        navSection.classList.add("fixed-top");
        boutonSection.classList.remove("hidden");
        navbarPlaceholder.style.display = "block"; // Ajout de cette ligne
    } else if (scrollHeight >= fleetSectionTop && scrollHeight < outfleetSectionTop) {
        navSection.classList.remove("fixed-top");
        boutonSection.classList.add("hidden");
        navbarPlaceholder.style.display = "none"; // Ajout de cette ligne
    } else {
        navSection.classList.remove("fixed-top");
        boutonSection.classList.add("hidden");
        navbarPlaceholder.style.display = "none"; // Ajout de cette ligne
    }
});
