const path = require('path');

const filePath = 'C:\\Users\\adelp\\Documents\\laplateforme\\runtrack-node\\jour01\\job05\\index.js';

// Récupérer le nom 
const fileName = path.basename(filePath);
console.log('Nom du fichier:', fileName);

// Récupérer l'extension 
const fileExtension = path.extname(filePath);
console.log('Extension du fichier:', fileExtension);

// Récupérer le répertoire parent 
const parentDirectory = path.dirname(filePath);
console.log('Répertoire parent du fichier:', parentDirectory);
