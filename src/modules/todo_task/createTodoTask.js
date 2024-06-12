import { createId } from '@paralleldrive/cuid2';

// Create TODO task
export function createTodoTask(title, description, dueDate, priority) {
  return {
    id: createId(), // Generate unique ID
    title,
    description,
    dueDate,
    priority,
  };
}
