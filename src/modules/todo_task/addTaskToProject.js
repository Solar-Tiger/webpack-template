import { createTodoTask } from './createTodoTask';

// Add TODO task to Project Task Array
export function addTodoTaskToArray(
  projectID,
  taskTitle,
  taskDescription,
  taskDueDate,
  taskPriority
) {
  const newTask = createTodoTask({
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority,
  });

  // For debugging purposes
  console.log(newTask);

  todoProjects[projectID].task.push(newTask);
}
