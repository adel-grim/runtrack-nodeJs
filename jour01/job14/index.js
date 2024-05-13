const http = require('http');
const fs = require('fs');
const path = require('path');

// Définition du port sur lequel le serveur écoutera
const port = 8888;

// Création du serveur
const server = http.createServer((req, res) => {
  // Récupération de l'URL demandée par le client
  const url = req.url;

  // Détermination du chemin du fichier à renvoyer en fonction de l'URL
  let filePath;
  if (url === '/' || url === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
  } else if (url === '/about' || url === '/about.html') {
    filePath = path.join(__dirname, 'about.html');
  } else {
    // Si l'URL demandée n'est pas prise en charge, renvoyer vers error.html
    filePath = path.join(__dirname, 'error.html');
  }

  // Lecture du fichier correspondant
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // En cas d'erreur, envoi d'une réponse avec le code 500 (Internal Server Error)
      res.writeHead(500);
      res.end('Erreur interne du serveur');
      return;
    }

    // Envoi de la réponse HTTP avec le contenu du fichier
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

// Démarrage du serveur et écoute sur le port spécifié
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
