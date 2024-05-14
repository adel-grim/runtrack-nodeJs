const server = require('./server');

const PORT = process.env.PORT || 3001;

// Démarrage du serveur
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
