const fs = require('fs');

const filePath = 'data.txt';

// Lecture du contenu du fichier en asynchrone
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Une erreur s\'est produite lors de la lecture du fichier:', err);
    return;
  }

  // Afficher une lettre sur deux
  let letters = '';
  for (let i = 0; i < data.length; i += 2) {
    letters += data[i];
  }
  console.log('Lettres sur deux du contenu du fichier:');
  console.log(letters);
});
