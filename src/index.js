import './style.css';
import { addTodoToArray as createTodo } from './modules/todo_projects/addProjectToArray.js';
import { addTodoTaskToArray as createTask } from './modules/todo_task/addTaskToProject.js';

const todoProjects = [];

// EXAMPLE
createTodo('Food to make', todoProjects);

createTodo('Games to play', todoProjects);
