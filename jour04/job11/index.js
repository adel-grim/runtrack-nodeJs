const { MongoClient } = require('mongodb');
const fs = require('fs');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// Nom de la collection à exporter
const collectionName = 'student'; // Nom de la collection

// Fonction pour exporter les données de la collection vers un fichier JSON
async function exportCollectionToJson(collectionName) {
    try {
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à MongoDB');

        // Sélection de la base de données
        const db = client.db(dbName);

        // Récupération des données de la collection
        const collectionData = await db.collection(collectionName).find({}).toArray();

        // Écriture des données dans un fichier JSON
        const jsonFilePath = `${collectionName}.json`;
        fs.writeFile(jsonFilePath, JSON.stringify(collectionData, null, 2), (err) => {
            if (err) throw err;
            console.log(`Données de la collection ${collectionName} exportées avec succès vers ${jsonFilePath}`);
        });

        // Fermer la connexion
        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

// Appel de la fonction pour exporter les données de la collection "student" vers un fichier JSON
exportCollectionToJson(collectionName);
