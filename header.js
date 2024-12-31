// fonction pour la configuration du header qu'on vient exporté dans le fichier index.js

export function configHeader() {
  // sélectionné la balise parent de tous les enfants du header
  const header = document.querySelector('header');

  // création des balises enfants avec l'ajout de leur class
  const posiIcone = document.createElement('div');
  posiIcone.classList.add('dispo_bars');
  const icone = document.createElement('i');
  icone.classList.add('fa-solid', 'fa-bars');
  const nav = document.createElement('nav');
  nav.classList.add('dispo_categorie');
  const ul = document.createElement('ul');
  const service = document.createElement('li');
  service.classList.add('service');
  service.textContent = 'Service';
  const realisation = document.createElement('li');
  realisation.classList.add('realisation');
  realisation.textContent = 'Réalisation';
  const contact = document.createElement('li');
  contact.classList.add('contact');
  contact.textContent = 'Contact';

  // organisation de la structure du header
  header.appendChild(posiIcone);
  posiIcone.appendChild(icone);
  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(service);
  ul.appendChild(realisation);
  ul.appendChild(contact);
}
export function affichageCategorie() {
  const icon = document.querySelector('i');
  const affichageNav = document.querySelector('nav');
  // condition du changement d'etat de la class dispo_categorie qui vient s'afficher au clic de l'icone
  if (icon && affichageNav) {
    affichageNav.style.display = 'none';
    icon.addEventListener('click', () => {
      event.stopPropagation();
      if (affichageNav.style.display === 'none') {
        affichageNav.style.display = 'flex';
      } else {
        affichageNav.style.display = 'none';
      }
    });
    document.addEventListener('click', (event) => {
      // on utilise contains pour vérifier si le click ce trouve bien sur la nav ou sur l'icone
      const clickInsideNav = affichageNav.contains(event.target);
      const clickInsideIcone = icon.contains(event.target);
      // la condition vérifie si le click à eu lieu en dehors de c'est deux éléments (nav et icone)
      if (!clickInsideNav && !clickInsideIcone) {
        affichageNav.style.display = 'none';
      }
    });
  }
}