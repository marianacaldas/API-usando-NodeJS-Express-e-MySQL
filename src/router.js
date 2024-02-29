const express = require('express');

const router = express.Router();

const tasksContoller = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksContoller.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksContoller.createTask);
router.delete('/tasks/:id', tasksContoller.deleteTask);
router.put('/tasks/:id', 
    tasksMiddleware.validateFieldTitle, 
    tasksMiddleware.validateFieldStatus, 
    tasksContoller.updateTask
);

module.exports = router;