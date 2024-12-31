export async function infoEmployed() {
  const parentMain = document.querySelector('main');

  try {
    // Requête fetch pour récupérer le fichier teams.json
    const response = await fetch('/grouped.json');

    // Vérifie si la réponse est OK
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    // Convertit la réponse en JSON
    const data = await response.json();
    const group = data.teams;

    // Création de la section pour afficher les équipes
    const infoTeams = document.createElement('section');
    infoTeams.classList.add('infoTeams');

    // Boucle pour parcourir les équipes et créer les éléments HTML
    group.forEach(team => {
      const BaliseArticle = document.createElement('article');
      const baliseImg = document.createElement('img');
      baliseImg.src = team.picture[0].src;
      baliseImg.alt = team.picture[0].alt;

      const divP = document.createElement('div');
      divP.classList.add('card_p');
      const baliseP = document.createElement('p');
      baliseP.textContent = team.description;
      divP.appendChild(baliseP);

      BaliseArticle.appendChild(baliseImg);
      BaliseArticle.appendChild(divP);
      infoTeams.appendChild(BaliseArticle);

      // Événement pour afficher ou masquer le paragraphe au clic sur l'image
      baliseImg.addEventListener('click', (event) => {
        event.stopPropagation();
        if (baliseP.style.display === 'none' || baliseP.style.display === '') {
          baliseP.style.display = 'block';
        } else {
          baliseP.style.display = 'none';
        }
      });

      // Cacher le paragraphe si on clique ailleurs que sur l'image
      document.addEventListener('click', (event) => {
        if (baliseP.style.display === 'block') {
          if (!baliseImg.contains(event.target)) {
            baliseP.style.display = 'none';
          }
        }
      });
    });

    // Ajoute la section infoTeams au parent main
    parentMain.appendChild(infoTeams);

  } catch (error) {
    // Gestion des erreurs
    console.error('Erreur lors de la récupération du fichier teams.json', error);
  }
}
