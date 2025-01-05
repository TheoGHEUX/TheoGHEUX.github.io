document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    // Récupère les données du formulaire
    const formData = new FormData(this);

    // Crée un objet JSON à partir des données du formulaire
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Envoie les données sous forme de JSON
    fetch('https://formspree.io/f/mzzzkavy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Formulaire envoyé avec succès', result);
        
        // Affiche le pop-up de remerciement
        document.getElementById('popup').style.display = 'flex';

        // Réinitialise le formulaire
        document.getElementById('form').reset();
    })
    .catch(error => {
        console.error('Erreur lors de l\'envoi du formulaire', error);
        // Message d'erreur à afficher à l'utilisateur
    });
});

// Fonction pour fermer le pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}