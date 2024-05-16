const { MongoClient, ObjectId } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017'; // Assurez-vous que MongoDB est en cours d'exécution sur le port par défaut

// Nom de la base de données
const dbName = 'LaPlateforme';

// ID de l'étudiant dont le cursus doit être mis à jour (à remplacer par l'ID réel de l'étudiant)
const studentIdToUpdate = '6645ea554a6872459fe9590a'; // Exemple d'ID d'étudiant

// Nouveau cursus auquel l'étudiant doit être inscrit
const newYear = 'Master 1'; // Exemple de nouveau cursus

// Fonction pour se connecter à la base de données MongoDB et mettre à jour le cursus de l'étudiant
async function updateStudentYearById(studentId, newYear) {
    try {
        // Connexion au serveur MongoDB
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à MongoDB');

        // Sélection de la base de données
        const db = client.db(dbName);

        // Requête pour mettre à jour le cursus de l'étudiant en fonction de son ID
const result = await db.collection('student').updateOne(
    { _id: new ObjectId(studentId) },
    { $set: { year_id: newYear } }
);


        // Vérifier si la mise à jour a réussi
        if (result.modifiedCount > 0) {
            console.log('Cursus mis à jour avec succès pour l\'étudiant avec l\'ID', studentId);
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

// Appel de la fonction pour mettre à jour le cursus de l'étudiant
updateStudentYearById(studentIdToUpdate, newYear);
