const { MongoClient } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// Données d'exemple pour les étudiants
const studentsData = [
    { lastname: 'LeBricoleur', firstname: 'Bob', students_number: '123456', year_id: 'Bachelor 1' },
    { lastname: 'Doe', firstname: 'John', students_number: '789012', year_id: 'Bachelor 2' },
    { lastname: 'Dupont', firstname: 'Marine', students_number: '345678', year_id: 'Bachelor 3' }
];

// Données d'exemple pour les années (cursus)
const yearsData = [
    { year: 'Bachelor 1' },
    { year: 'Bachelor 2' },
    { year: 'Bachelor 3' }
];

// Fonction pour se connecter à la base de données MongoDB et insérer les données
async function connectToDatabase() {
    try {
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à MongoDB');

        // Sélection de la base de données
        const db = client.db(dbName);

        // Insertion des données d'exemple pour les années (cursus)
        await db.collection('year').insertMany(yearsData);
        console.log('Années insérées avec succès');

        // Insertion des données d'exemple pour les étudiants
        await db.collection('student').insertMany(studentsData);
        console.log('Étudiants insérés avec succès');

        // Fermer la connexion
        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

// Appel de la fonction pour se connecter à la base de données et insérer les données
connectToDatabase();