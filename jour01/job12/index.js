const http = require('http');
const fs = require('fs');
const path = require('path');

// Définition du port sur lequel le serveur écoutera
const port = 7777;

// Création du serveur
const server = http.createServer((req, res) => {
  // Lecture du fichier index.html
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      // En cas d'erreur, envoi d'une réponse avec le code 500 (Internal Server Error)
      res.writeHead(500);
      res.end('Erreur interne du serveur');
      return;
    }

    // Envoi de la réponse HTTP avec le contenu du fichier index.html
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

// Démarrage du serveur et écoute sur le port spécifié
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
