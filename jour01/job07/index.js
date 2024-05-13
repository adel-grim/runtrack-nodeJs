const fs = require('fs');

// Chemin du fichier
const filePath = 'data.txt';

// Lecture du contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Une erreur s\'est produite lors de la lecture du fichier:', err);
    return;
  }
  console.log('Contenu du fichier:');
  console.log(data);
});
