// Create TODO projects
export function createTodoProject(title) {
  return {
    id: Date.now(),
    projectTitle: title,
    task: [],
  };
}

// Create TODO task
function createTodoTask(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  };
}

// Add TODO task to Project Task Array
function addTodoTaskToArray(
  userTitle,
  userDescription,
  userDueDate,
  userPriority
) {
  const newTask = createTodoTask(
    userTitle,
    userDescription,
    userDueDate,
    userPriority
  );

  // For debugging purposes
  console.log(newTask);

  todoProjects[0].task.push(newTask);
}

addTodoTaskToArray('Tuna salad', 'A simple tuna salad', new Date(), 'HIGH');
