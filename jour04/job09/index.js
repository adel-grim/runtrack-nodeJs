const { MongoClient, ObjectId } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// ID de l'étudiant à supprimer (à remplacer par l'ID réel de l'étudiant)
const studentIdToDelete = '6645ea554a6872459fe95909'; // Exemple d'ID d'étudiant

// Fonction pour se connecter à la base de données MongoDB et supprimer l'étudiant
async function deleteStudentById(studentId) {
    try {
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à MongoDB');

        // Sélection de la base de données
        const db = client.db(dbName);

        // Requête pour supprimer l'étudiant en fonction de son ID
        const result = await db.collection('student').deleteOne({ _id: new ObjectId(studentId) });

        // Vérifier si la suppression a réussi
        if (result.deletedCount > 0) {
            console.log('Étudiant supprimé avec succès avec l\'ID', studentId);
        } else {
            console.log('Aucun étudiant trouvé avec l\'ID', studentId);
        }

        // Fermer la connexion
        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

// Appel de la fonction pour supprimer l'étudiant
deleteStudentById(studentIdToDelete);
