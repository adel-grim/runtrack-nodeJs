const { MongoClient } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// Données d'exemple pour les étudiants
const studentsData = [
    { lastname: 'LeBricoleur', firstname: 'Bob', students_number: '123456', year_id: null },
    { lastname: 'Doe', firstname: 'John', students_number: '789012', year_id: null },
    { lastname: 'Dupont', firstname: 'Marine', students_number: '345678', year_id: null }
];

// Fonction pour se connecter à la base de données MongoDB
async function connectToDatabase() {
    try {
        // Logs pour la tentative de connexion à MongoDB
        console.log('Tentative de connexion à MongoDB...');
        
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();

        // Logs pour la connexion réussie
        console.log('Connecté à MongoDB avec succès !');

        // Sélection de la base de données
        const db = client.db(dbName);

        // Insérer les données d'exemple pour les étudiants dans la collection "student"
        const result = await db.collection('student').insertMany(studentsData);
        console.log(`${result.insertedCount} étudiants insérés`);

        // Fermer la connexion
        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

// Appel de la fonction pour se connecter à la base de données
connectToDatabase();