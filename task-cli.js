const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

function initTasksFile() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]), 'utf8');
    }
}

function readTasks() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
}

initTasksFile();


function addTask(description) {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        description,
        status: 'todo',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
}


function listTasks(status = null) {
    const tasks = readTasks();
    const filteredTasks = status ? tasks.filter(task => task.status === status) : tasks;
    if (filteredTasks.length === 0) {
        console.log('No tasks found.');
        return;
    }
    filteredTasks.forEach(task => {
        console.log(`[ID: ${task.id}] ${task.description} - ${task.status}`);
    });
}

function updateTask(id, newDescription) {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        console.log('Task not found.');
        return;
    }
    tasks[taskIndex].description = newDescription;
    tasks[taskIndex].updatedAt = new Date();
    writeTasks(tasks);
    console.log('Task updated successfully.');
}

function deleteTask(id) {
    const tasks = readTasks();
    const newTasks = tasks.filter(task => task.id !== id);
    if (tasks.length === newTasks.length) {
        console.log('Task not found.');
        return;
    }
    writeTasks(newTasks);
    console.log('Task deleted successfully.');
}


function markInProgress(id) {
    updateTaskStatus(id, 'in-progress');
}

function markDone(id) {
    updateTaskStatus(id, 'done');
}

function updateTaskStatus(id, status) {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        console.log('Task not found.');
        return;
    }
    tasks[taskIndex].status = status;
    tasks[taskIndex].updatedAt = new Date();
    writeTasks(tasks);
    console.log(`Task marked as ${status}.`);
}


const args = process.argv.slice(2);
const command = args[0];
const id = parseInt(args[1]);
const description = args.slice(1).join(' ');

switch (command) {
    case 'add':
        addTask(description);
        break;
    case 'list':
        listTasks(args[1]);
        break;
    case 'update':
        updateTask(id, description);
        break;
    case 'delete':
        deleteTask(id);
        break;
    case 'mark-in-progress':
        markInProgress(id);
        break;
    case 'mark-done':
        markDone(id);
        break;
    default:
        console.log('Unknown command.');
        break;
}

