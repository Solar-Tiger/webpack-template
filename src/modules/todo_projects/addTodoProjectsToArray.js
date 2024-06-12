import { createTodoProject } from './createTodoProject';

// Array to store project
const todoProjects = [];

// Add TODO projects to Array
function addTodoToArray(userInput) {
  const newTodoProject = createTodoProject(userInput);

  // For debugging purposes
  console.log(newTodoProject);

  todoProjects.push(newTodoProject);
}

// EXAMPLE
addTodoToArray('Food to make');
