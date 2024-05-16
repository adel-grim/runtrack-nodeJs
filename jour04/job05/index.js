const { MongoClient } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// Fonction pour se connecter à la base de données MongoDB et récupérer les données des étudiants avec leurs cursus
async function getStudentsWithYears() {
    try {
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à MongoDB');

        // Sélection de la base de données
        const db = client.db(dbName);

        // Requête pour récupérer les étudiants avec leurs cursus
        const studentsWithYears = await db.collection('student').aggregate([
            {
                $lookup: {
                    from: 'year',
                    localField: 'year_id',
                    foreignField: 'year',
                    as: 'year_info'
                }
            },
            {
                $project: {
                    _id: 0,
                    lastname: 1,
                    firstname: 1,
                    year: { $arrayElemAt: ['$year_info.year', 0] }
                }
            }
        ]).toArray();

        // Affichage des résultats dans la console
        console.log('Étudiants avec leurs cursus :');
        console.log(studentsWithYears);

        // Fermer la connexion
        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

// Appel de la fonction pour récupérer les données des étudiants avec leurs cursus
getStudentsWithYears();