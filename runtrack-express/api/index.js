const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000; // ou tout autre port de votre choix
const url = 'mongodb://localhost:27017';
const dbName = 'LaPlateforme';

// Route GET "/etudiants" pour récupérer tous les étudiants de la collection "student"
app.get('/etudiants', async (req, res) => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const students = await db.collection('student').find({}).toArray();
        res.json(students);
        client.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des étudiants' });
    }
});

// Route GET "/etudiant/:id" pour récupérer un étudiant spécifique en fonction de son ID
app.get('/etudiant/:id', async (req, res) => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const student = await db.collection('student').findOne({ _id: ObjectId(req.params.id) });
        if (!student) {
            return res.status(404).json({ message: 'Étudiant non trouvé' });
        }
        res.json(student);
        client.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'étudiant' });
    }
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
