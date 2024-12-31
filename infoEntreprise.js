// structure de la section présentation de l'entrepirse
export function configInfoEntreprise() {
  // parti du corp du site web ciblé la balise parent
  const parentMain = document.querySelector('main');
  // création des balises enfants du parent main pour la section info entreprise
  const sectionEntreprise = document.createElement('section');
  sectionEntreprise.classList.add('infoEntreprise_container');
  const dispoInfoEntreprise = document.createElement('div');
  dispoInfoEntreprise.classList.add('dispo_description');
  const title = document.createElement('h2');
  title.textContent = 'Qui Nous Somme ?';
  const paragrapheDescriptionEntreprise = document.createElement('p');
  paragrapheDescriptionEntreprise.classList.add('description_p');
  paragrapheDescriptionEntreprise.textContent = `Notre entreprise hanSport vous accompagne dans tous les événements sportifs que les centres de loisir, clubs de sport, séminaires d’entreprise… Notre équipe est là pour vous accompagner dans tous vos projets en lien avec la mobilité du sport pour tous et de tous âges. Venez nous contacter.`;
  // organisation structurel des balises enfants par rapport à son parent
  parentMain.appendChild(sectionEntreprise);
  sectionEntreprise.appendChild(dispoInfoEntreprise);
  dispoInfoEntreprise.appendChild(title);
  dispoInfoEntreprise.appendChild(paragrapheDescriptionEntreprise);
}