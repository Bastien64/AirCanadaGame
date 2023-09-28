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



// Détecter le défilement de la page
window.addEventListener("scroll", function () {
    var navSection = document.getElementById("nav-section");
    var boutonSection = document.querySelector(".bouton");
    var fleetSection = document.getElementById("fleet");
    var outfleetSection = document.querySelector(".outfleet");

    // Hauteur de défilement actuelle
    var scrollHeight = window.scrollY;

    // Hauteur de la section "fleet"
    var fleetSectionTop = fleetSection.offsetTop;

    // Hauteur de la section "outfleet"
    var outfleetSectionTop = outfleetSection.offsetTop;

    // Si l'utilisateur n'a pas encore atteint la section "fleet"
    if (scrollHeight < fleetSectionTop) {
        // Rendre la barre de navigation et la section "bouton" fixes en haut
        navSection.classList.add("fixed-top");
        boutonSection.classList.remove("hidden");
    } else if (scrollHeight >= fleetSectionTop && scrollHeight < outfleetSectionTop) {
        // Si l'utilisateur est dans la section "fleet", masquer la barre de navigation et la section "bouton"
        navSection.classList.remove("fixed-top");
        boutonSection.classList.add("hidden");
    } else {
        // Si l'utilisateur est dans la section "outfleet", masquer la barre de navigation et la section "bouton"
        navSection.classList.remove("fixed-top");
        boutonSection.classList.add("hidden");
    }
});


// Code pour thisWeek
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const thisWeekTableBody = document.getElementById('this-week-table-body');
        const thisWeekData = data.thisWeek;

        // Parcourir les données de points pour thisWeek
        thisWeekData.points.forEach(item => {
            const row = document.createElement('tr');

            // Trouver les données de temps, de vols et de bonus pour l'utilisateur actuel
            const timeResult = thisWeekData.time.find(timeItem => timeItem.id === item.id).result;
            const flightsResult = thisWeekData.flights.find(flightItem => flightItem.id === item.id).result;
            const bonusResult = thisWeekData.bonus.find(bonusItem => bonusItem.id === item.id).result;

            // Ajouter les données à la ligne du tableau
            row.innerHTML = `
                <td>${item.username}</td>
                <td>${item.result}</td>
                <td>${timeResult}</td>
                <td>${flightsResult}</td>
                <td>${bonusResult}</td>
            `;

            // Ajouter la ligne du tableau au corps du tableau pour thisWeek
            thisWeekTableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Une erreur s\'est produite pour thisWeek :', error);
    });

// Code pour thisMonth
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const thisMonthTableBody = document.getElementById('this-month-table-body');
        const thisMonthData = data.thisMonth;

        // Parcourir les données de points pour thisMonth
        thisMonthData.points.forEach(item => {
            const row = document.createElement('tr');

            // Trouver les données de temps, de vols et de bonus pour l'utilisateur actuel
            const timeResult = thisMonthData.time.find(timeItem => timeItem.id === item.id).result;
            const flightsResult = thisMonthData.flights.find(flightItem => flightItem.id === item.id).result;
            const bonusResult = thisMonthData.bonus.find(bonusItem => bonusItem.id === item.id).result;

            // Ajouter les données à la ligne du tableau
            row.innerHTML = `
                <td>${item.username}</td>
                <td>${item.result}</td>
                <td>${timeResult}</td>
                <td>${flightsResult}</td>
                <td>${bonusResult}</td>
            `;

            // Ajouter la ligne du tableau au corps du tableau pour thisMonth
            thisMonthTableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Une erreur s\'est produite pour thisMonth :', error);
    });

    // Code pour allTime
fetch('data.json')
.then(response => response.json())
.then(data => {
    const allTimeTableBody = document.getElementById('all-time-table-body');
    const allTimeData = data.allTime;

    // Parcourir les données de points pour allTime
    allTimeData.points.forEach(item => {
        const row = document.createElement('tr');

        // Trouver les données de temps, de vols et de bonus pour l'utilisateur actuel
        const timeResult = allTimeData.time.find(timeItem => timeItem.id === item.id).result;
        const flightsResult = allTimeData.flights.find(flightItem => flightItem.id === item.id).result;
        const bonusResult = allTimeData.bonus.find(bonusItem => bonusItem.id === item.id).result;

        // Ajouter les données à la ligne du tableau
        row.innerHTML = `
            <td>${item.username}</td>
            <td>${item.result}</td>
            <td>${timeResult}</td>
            <td>${flightsResult}</td>
            <td>${bonusResult}</td>
        `;

        // Ajouter la ligne du tableau au corps du tableau pour allTime
        allTimeTableBody.appendChild(row);
    });
})
.catch(error => {
    console.error('Une erreur s\'est produite pour allTime :', error);
});







  // Charger les données JSON depuis le fichier "airplane.json"
  fetch('airplane.json')
  .then(response => response.json())
  .then(data => {
      const tableBody = document.getElementById('table-body');

      // Parcourir les données JSON et les ajouter au tableau
      data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.id}</td>
              <td>${item.callsign}</td>
              <td>${item['flight-number']}</td>
              <td>${item.pax}</td>
              <td>${item.cargo}</td>
              <td>${item.route}</td>
              <td>${item.network}</td>
              <td>${item.currentLocation.altitude}</td>
              <td>${item.currentLocation.heading}</td>
              <td>${item.currentLocation.latitude}</td>
              <td>${item.currentLocation.longitude}</td>
              <td>${item.currentLocation.groundspeed}</td>
              <td>${item.currentLocation.distance_remaining}</td>
              <td>${item.currentLocation.time_remaining}</td>
              <td>${item.currentLocation.distance_flown}</td>
              <td>${item.currentLocation.departure_time}</td>
              <td>${item.currentLocation.estimated_arrival_time}</td>
              <td>${item.currentLocation.time_flown}</td>
              <td>${item.aircraft.registration}</td>
              <td>${item.aircraft.name}</td>
              <td>${item.aircraft.code}</td>
              <td>${item.aircraft.codename}</td>
              <td>${item.departure.name}</td>
              <td>${item.arrival.name}</td>
              <td>${item.pilot.username}</td>
          `;
          tableBody.appendChild(row);
      });
  })
  .catch(error => {
      console.error('Une erreur s\'est produite :', error);
  });