const fs = require('fs');
const path = require('path');

// Chemin vers le fichier JSON contenant les tâches
const tasksFilePath = path.join(__dirname, 'data.json');

// Fonction pour lire les tâches depuis le fichier JSON
function readTasksFromFile() {
    try {
        const tasksData = fs.readFileSync(tasksFilePath, 'utf8');
        return JSON.parse(tasksData);
    } catch (error) {
        return [];
    }
}

// Fonction pour écrire les tâches dans le fichier JSON
function writeTasksToFile(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
}

// Récupérer toutes les tâches
function getAllTasks(req, res) {
    const tasks = readTasksFromFile();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tasks));
}


// Créer une nouvelle tâche
function createTask(req, res) {
    let tasks = readTasksFromFile();
    const newTask = req.body;
    
    // Si le tableau de tâches est vide, attribuer l'ID 1 à la nouvelle tâche
    if (tasks.length === 0) {
        newTask.id = 1;
    } else {
        // Sinon, attribuer l'ID suivant à la nouvelle tâche
        newTask.id = tasks[tasks.length - 1].id + 1;
    }
    
    tasks.push(newTask);
    writeTasksToFile(tasks);
    res.status(201).json(newTask);
}



// Mettre à jour une tâche existante
function updateTask(req, res, taskId) {
    let tasks = readTasksFromFile();
    const updatedTask = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    // Vérifiez si la tâche à mettre à jour existe
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    // Mettre à jour la tâche avec les nouvelles données
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    writeTasksToFile(tasks);

    // Renvoyer la tâche mise à jour
    res.json(tasks[taskIndex]);
}


// Supprimer une tâche existante
function deleteTask(req, res, taskId) {
    let tasks = readTasksFromFile();
    tasks = tasks.filter(task => task.id !== taskId);
    writeTasksToFile(tasks);
    res.sendStatus(204);
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
