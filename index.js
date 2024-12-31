// importation fonctions des fichiers structurel + interractive du header
import { configHeader } from './header';
import { affichageCategorie } from './header.js';
import { configInfoEntreprise } from './infoEntreprise.js';
import { infoEmployed } from './employed.js';

// appel fonctions structurel + interractive du site via leur fichier js
configHeader();
affichageCategorie();
//  importation fonction du fichier structurel de la section info entreprise
configInfoEntreprise();
// importation de la fonction du fichier qui présente l'équipe
infoEmployed();