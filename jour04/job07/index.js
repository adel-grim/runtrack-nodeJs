const { MongoClient } = require('mongodb');
const readline = require('readline');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// Fonction pour se connecter à la base de données MongoDB et récupérer les informations de l'étudiant
async function getStudentByLastName(lastName) {
    try {
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à MongoDB');

        // Sélection de la base de données
        const db = client.db(dbName);

        // Requête pour récupérer les informations de l'étudiant avec le nom de famille saisi
        const student = await db.collection('student').findOne({ lastname: lastName });

        // Affichage des résultats dans la console
        if (student) {
            console.log('Informations de l\'étudiant avec le nom de famille', lastName, ':');
            console.log(student);
        } else {
            console.log('Aucun étudiant trouvé avec le nom de famille', lastName);
        }

        // Fermer la connexion
        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

// Création de l'interface pour lire depuis la console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Demander à l'utilisateur de saisir le nom de famille de l'étudiant
rl.question('Entrez le nom de famille de l\'étudiant : ', async (lastName) => {
    // Appel de la fonction pour récupérer les informations de l'étudiant
    await getStudentByLastName(lastName);

    // Fermer l'interface de lecture de la console
    rl.close();
});
