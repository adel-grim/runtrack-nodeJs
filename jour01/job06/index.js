const fs = require('fs');

const filePath = 'data.txt';

// Lecture du contenu du fichier en  synchrone
try {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log('Contenu du fichier:');
  console.log(data);
} catch (error) {
  console.error('ERREUR', error);
}
