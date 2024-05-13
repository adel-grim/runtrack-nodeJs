const fs = require('fs');

// Nouveau contenu à écrire dans le fichier
const newContent = "Je manipule les fichiers avec un module node ! Wohouuuuuu!";

// Chemin du fichier
const filePath = 'data.txt';

// Écriture du nouveau contenu dans le fichier
fs.writeFile(filePath, newContent, (err) => {
  if (err) {
    console.error('ERREUR', err);
    return;
  }
  console.log('Le contenu du fichier a été modifié');
});
