const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
  // Envoi de la réponse HTTP avec le code 200 (OK) et le contenu "Asmaa la branleuse!""
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Asmaa la branleuse!\n');
});

// Définition du port 8888
const port = 8888;

// Démarrage du serveur sur le port spécifié au dessus
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
