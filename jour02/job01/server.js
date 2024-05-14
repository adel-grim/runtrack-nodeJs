const http = require('http');
const { getAllTasks, createTask, updateTask, deleteTask } = require('./routes');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    // Route GET /tasks
    if (method === 'GET' && url === '/tasks') {
        getAllTasks(req, res);
    }
    // Route POST /tasks
    else if (method === 'POST' && url === '/tasks') {
        createTask(req, res);
    }
    // Route PUT /tasks/:id
    else if (method === 'PUT' && url.match(/^\/tasks\/(\d+)$/)) {
        const taskId = parseInt(url.split('/')[2]);
        updateTask(req, res, taskId);
    }
    // Route DELETE /tasks/:id
    else if (method === 'DELETE' && url.match(/^\/tasks\/(\d+)$/)) {
        const taskId = parseInt(url.split('/')[2]);
        deleteTask(req, res, taskId);
    }
    // Route non trouvée
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

module.exports = server;
