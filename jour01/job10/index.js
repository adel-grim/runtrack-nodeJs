const url = require('url');

// Définition de l'URL initiale
const URL = "https://www.google.com&search=nodejs";

// Analyse de l'URL
const parsedUrl = url.parse(URL, true);

// Récupérer le protocole utilisé
const protocol = parsedUrl.protocol;
console.log('Protocole utilisé:', protocol);

// Récupérer le nom d'hôte
const hostname = parsedUrl.hostname;
console.log('Nom d\'hôte:', hostname);

// Récupérer les paramètres de l'URL
const params = parsedUrl.query;
console.log('Paramètres de l\'URL:', Object.keys(params).length > 0 ? params : 'Aucun');

// Reformater l'URL en une nouvelle URL valide en modifiant le nom d'hôte
parsedUrl.host = 'www.laplateforme.io';

// Afficher la nouvelle URL
console.log('Nouvelle URL:', url.format(parsedUrl));
