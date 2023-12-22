import { useState, useEffect } from 'react';

function Header() {
  const [openTasks, setOpenTasks] = useState<number>(0);

  useEffect(() => {
    // Get todos from local storage
    const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    // Get incomplete todos
    const incompleteTodos: Todo[] = todos.filter((todo: Todo) => !todo.done);
    setOpenTasks(incompleteTodos.length);
  }, []);

  return (
    <>
      You have {openTasks} open {openTasks === 1 ? "task" : "tasks"}.
    </>
  )
}  
export default Header