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
// Appeler la fonction au chargement de la page
window.onload = changeRandomImage;


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

