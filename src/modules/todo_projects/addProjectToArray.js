import { createTodoProject } from './createTodoProject';

// Add TODO projects to Array
export function addTodoToArray(projectTitle, todoProjects) {
  const newTodoProject = createTodoProject({
    projectTitle,
  });

  // For debugging purposes
  console.log(newTodoProject);

  todoProjects.push(newTodoProject);
}
