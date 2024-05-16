const { MongoClient } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// Fonction pour se connecter à la base de données MongoDB
async function connectToDatabase() {
    try {
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();

        // Sélection de la base de données
        const db = client.db(dbName);
        console.log('Connecté à la base de données');

        // Ici, vous pouvez exécuter d'autres opérations sur la base de données

        // Fermer la connexion
        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

// Appel de la fonction pour se connecter à la base de données
connectToDatabase();