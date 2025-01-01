// ******************************PARTI HEADER*************************
// fonction pour la configuration du header qu'on vient exporté dans le fichier index.js
function configHeader() {
  // sélectionné la balise parent de tous les enfants du header
  const header = document.querySelector('header');

  // création des balises enfants avec l'ajout de leur class
  const posiIcone = document.createElement('div');
  posiIcone.classList.add('dispo_bars');
  const icone = document.createElement('i');
  icone.classList.add('fa-solid', 'fa-bars');
  const nav = document.createElement('nav');
  nav.classList.add('dispo_categorie');
  // création de la liste des catégories
  const ul = document.createElement('ul');
  // text vient initialisé le tableau des catégorie qui vient crée chaque li
  ['service', 'realisation', 'contact'].forEach((text, index) => {
    const li = document.createElement('li');
    // index vient attribué la bonne class css par rapport à ça position 
    li.classList.add(['service', 'realisation', 'contact'][index]);
    li.textContent = text;
    ul.appendChild(li);
  })
  // organisation de la structure du header
  header.appendChild(posiIcone);
  posiIcone.appendChild(icone);
  header.appendChild(nav);
  nav.appendChild(ul);
} configHeader();

function affichageCategorie() {
  const icon = document.querySelector('i');
  const affichageNav = document.querySelector('nav');
  // condition du changement d'etat de la class dispo_categorie qui vient s'afficher au clic de l'icone
  if (icon && affichageNav) {
    affichageNav.style.display = 'none';
    icon.addEventListener('click', (event) => {
      event.stopPropagation(event);
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
} affichageCategorie();

// ******************************PARTI INFO ENTREPRISE*************************
// structure de la section présentation de l'entrepirse
function configInfoEntreprise() {
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
} configInfoEntreprise();

// ******************************PARTI AFFICHAGE TEAMS*************************
async function infoEmployed() {
  const parentMain = document.querySelector('main');

  try {
    // Requête fetch pour récupérer les données du fichier data
    const response = await fetch('./data.json');

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
      const Article = document.createElement('article');
      const img = document.createElement('img');
      img.src = team.picture[0].src;
      img.alt = team.picture[0].alt;

      const divP = document.createElement('div');
      divP.classList.add('card_p');
      const p = document.createElement('p');
      p.textContent = team.description;
      divP.appendChild(p);

      Article.appendChild(img);
      Article.appendChild(divP);
      infoTeams.appendChild(Article);

      // Événement pour afficher ou masquer le paragraphe au clic sur l'image
      img.addEventListener('mouseenter', () => {
        p.style.display = 'block';
        img.style.transition = 'transform 0.8s ease, margin 0.8s ease';
        img.style.transform = 'scale(1)';

      });
      img.addEventListener('mouseleave', () => {
        p.style.display = 'none';
        img.style.transition = 'transform 0.5s ease, margin 0.5s ease';
        img.style.transform = 'scale(0.80)';

      });
    });
    // Ajoute la section infoTeams au parent main
    parentMain.appendChild(infoTeams);

  } catch (error) {
    // Gestion des erreurs
    console.error('Erreur lors de la récupération du fichier teams.json', error);
  }
} infoEmployed();

// ******************************PARTI Slider *************************
async function affichageSlider() {
  const parentMain = document.querySelector('main');
  try {
    const response = await fetch('./data.json');

    // Vérifie si la réponse est OK
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    const cardSlider = data.slider;
    // structure html du slider
    const slider = document.createElement('section');
    slider.classList.add('slide');

    cardSlider.forEach(slide => {
      const img = document.createElement('img');
      img.src = slide.picture[0].src;
      img.alt = slide.picture[0].alt;

      // organisation parent enfants
      slider.appendChild(img);
    })

    parentMain.appendChild(slider);

  } catch (error) {
    console.error('erreur élément slider', error);
  }
} affichageSlider();

// ******************************PARTI FOOTER*************************
const footer = document.querySelector('footer');
